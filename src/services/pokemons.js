import axios from "axios";

export const axiosGetAllPokemons = async (page) => {
  const resPokemons = await axios(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`
  );

  const urls = resPokemons.data.results.map((pokemon) => {
    return pokemon.url;
  });

  const pokemons = await Promise.all(
    urls.map(async (url) => {
      const res = await axios(url);
      return res.data;
    })
  );
  return pokemons;
};
