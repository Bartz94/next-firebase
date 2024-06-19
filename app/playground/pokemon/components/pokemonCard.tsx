import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';
import pokemonTypeColors from '../utils/pokemonColors';

interface PokemonCardProps {
    name: string
    imageUrl: string
    types: string[]
    hp: string
    attack: string
    defense: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, types, hp, attack, defense }) => {
    const primaryType = types[0];
    const bgColor = pokemonTypeColors[primaryType] || 'gray.200'

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            textAlign="center"
            bg={bgColor}
            shadow="md"
            color="black"
            maxW="xs"
            cursor="pointer"
        >
            <Box position="relative">
                <Image src={imageUrl} alt={name} boxSize="150px" objectFit="cover" mx="auto" />
                <Badge
                    position="absolute"
                    top="10px"
                    left="10px"
                    bg={bgColor}
                    border="1px solid white"
                    color="white"
                    borderRadius="full"
                    px={2}
                    py={1}
                >
                    {types[0]}
                </Badge>
            </Box>
            <Text mt={2} fontSize="2xl" fontWeight="bold">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </Text>
            <Text fontSize="lg" color="gray.700">
                HP {hp}
            </Text>
            <Text fontSize="lg" color="gray.700">
                ATTACK {attack}
            </Text>
            <Text fontSize="lg" color="gray.700">
                DEFENSE {defense}
            </Text>

        </Box>
    );
};

export default PokemonCard;
