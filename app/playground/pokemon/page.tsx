'use client'

import { useGetAllPokemonsQuery } from "@/app/lib/redux/api/pokemonApi";
import { Box, Text, Image, Spinner, Input, SimpleGrid, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PokemonCard from "./components/pokemonCard"

const PokemonApi: React.FC = () => {
    const { data: allPokemons, error: allPokemonsError, isLoading: allPokemonsIsLoading } = useGetAllPokemonsQuery(151)
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    useEffect(() => {
        if (allPokemons) {
            Promise.all(
                allPokemons.results.map(async (pokemon: { name: string }) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    const data = await response.json();
                    return {
                        name: pokemon.name,
                        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
                        types: data.types.map((typeInfo: any) => typeInfo.type.name),
                        stats: data.stats.map((stat: any) => ({
                            name: stat.stat.name,
                            value: stat.base_stat,
                        })),
                    };
                })
            ).then((details) => setPokemonDetails(details));
        }
    }, [allPokemons]);

    const filteredPokemons = pokemonDetails.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );

    console.log(filteredPokemons)

    return (
        <Box p={4}>
            <Center marginBottom={'50px'}>
                <img className="w-[900px]" src={'/choose-your-squad.png'} alt={'Choose your squad image'} />
            </Center>
            <Input
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={handleSearchChange}
                mb={4}
            />
            {allPokemonsIsLoading ? (
                <Center height='300px'>
                    <Spinner thickness="4px" color="#356ABC" size='xl' />
                </Center>
            ) : filteredPokemons && (
                <SimpleGrid justifyContent="center" alignItems="center" columns={[1, 2, 3, 4, 5]} spacing={4}>
                    {filteredPokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            imageUrl={pokemon.imageUrl}
                            types={pokemon.types}
                            hp={pokemon.stats[0].value}
                            attack={pokemon.stats[1].value}
                            defense={pokemon.stats[2].value}
                        />
                    ))}
                </SimpleGrid>
            )
            }
            {!allPokemonsIsLoading && filteredPokemons.length === 0 && allPokemonsError && <Text color="red.500">Oh no, there was an error</Text>}

        </Box>
    );
};

export default PokemonApi
