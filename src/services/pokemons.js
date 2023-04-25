import axios from "axios";

export const axiosGetAllPokemons = async (page) => {
  const resPokemons = await axios(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`
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

export const axiosGetTypesPokemons = async () => {
  const resTypes = await axios("https://pokeapi.co/api/v2/type");

  const urls = resTypes.data.results.map((type) => type.url);

  const items = await Promise.all(
    urls.map(async (url) => {
      const res = await axios(url);
      return res.data;
    })
  );

  const filterItem = items.reduce((accum, item) => {
    if (item.pokemon.length) {
      return [...accum, item.name];
    }
    return accum;
  }, []);

  return filterItem;
};
