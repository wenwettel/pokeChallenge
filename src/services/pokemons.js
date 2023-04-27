import axios from "axios";
import { filterEvolutions } from "../utils";
import { axiosGetEvolutions } from "./evolutions";
import { pokemonApi } from "./api";

//Todos los pokemons en tandas de 20
export const axiosGetAllPokemons = async (page) => {
  const resPokemons = await pokemonApi.get(
    `pokemon?limit=20&offset=${page * 20}`
  );
  const urls = resPokemons.data.results.map((pokemon) => {
    return pokemon.url;
  });

  const items = await Promise.all(
    urls.map(async (url) => {
      const res = await axios(url);
      return res.data;
    })
  );

  return { items, nextPage: resPokemons.data.next };
};

//Tipos del pokemon
export const axiosGetTypesPokemons = async () => {
  const resTypes = await pokemonApi.get(`type`);
  const urls = resTypes.data.results.map((type) => type.url);

  const items = await Promise.all(
    urls.map(async (url) => {
      const res = await axios(url);
      return res.data;
    })
  );
  
  //muestra unicamente los tipos que tienen resultados
  const filterItem = items.reduce((accum, item) => {
    if (item.pokemon.length) {
      return [...accum, item.name];
    }
    return accum;
  }, []);

  return filterItem;
};

//Detalles del pokemon
export const axiosGetPokemonDetail = async (id) => {
  const resPokemon = await pokemonApi.get(`pokemon/${id}`);
  const { resEvolution } = await axiosGetEvolutions(id);
  const evolutions = resEvolution
    ? filterEvolutions(resEvolution?.data?.chain, resPokemon?.data?.name)
    : null;

  return {
    details: resPokemon?.data,
    evolutions,
  };
};
