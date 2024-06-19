import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: (limit = 150, offset = 0) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
