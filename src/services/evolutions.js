
import { pokemonApi } from "./api";
import {extractIdOfUrl} from '../utils'

export const axiosGetEvolutions = async (id) => {
    try {
      const pokemonSpecies = await pokemonApi.get(`pokemon-species/${id}`);
      const idEvolutionChain = extractIdOfUrl(pokemonSpecies?.data.evolution_chain.url)
      const resEvolution = await pokemonApi.get( `evolution-chain/${idEvolutionChain}`);
      return {
        resEvolution,
      };
    } catch (error) {
      console.error(error);
      return {
        resEvolution: null,
      };
    }
  };
  