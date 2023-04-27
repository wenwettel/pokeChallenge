
import axios from "axios";
import {BASE_URL} from '../../constants'
import {extractIdOfUrl} from '../utils'

export const axiosGetEvolutions = async (id) => {
    try {
      const pokemonSpecies = await axios(
        `${BASE_URL}pokemon-species/${id}`
      );
      const idEvolutionChain = extractIdOfUrl(pokemonSpecies?.data.evolution_chain.url)
      const resEvolution = await axios(
        `${BASE_URL}evolution-chain/${idEvolutionChain}`
      );
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
  