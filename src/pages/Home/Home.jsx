import { useRef, useEffect, useState, useCallback } from "react";
import HomeStyle from "./HomeStyle";
import Card from "../../components/Card/Card";
import {
  axiosGetAllPokemons,
  axiosGetTypesPokemons,
} from "../../services/pokemons";
import useIntersector from "../../hooks/Intersector";
import debounce from "just-debounce-it";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";

function Home() {
  const elementRef = useRef();
  const types = useRef();
  const [pokemons, setPokemos] = useState({
    data: [],
    loading: true,
    error: false,
    isNextPage: false,
  });
  const [page, setPage] = useState(0);
  const [selections, setSelections] = useState([]);
  const { isItersecting } = useIntersector(elementRef);

  /*Filtro */
  const leakedPokemons = selections.length
    ? pokemons.data.filter((pokemon) => {
        return pokemon.types.some((type) =>
          selections.includes(type.type.name)
        );
      })
    : pokemons.data;

  /*Se usa debounce para controlar que el cambio de pagina suceda en el momento que corresponde */
  const debounceScrollInfinitive = useCallback(
    debounce(() => setPage(page + 1), 200),
    [page]
  );

  useEffect(() => {
    if (!pokemons.loading && !pokemons.isNextPage) return;
    if (isItersecting) debounceScrollInfinitive();
  }, [debounceScrollInfinitive, isItersecting]);

  //abstraer el llamado de los pokemons
  useEffect(() => {
    if (!pokemons.loading && !pokemons.isNextPage) return;

    const getPokemons = async () => {
      try {
        const { items, nextPage } = await axiosGetAllPokemons(page);
        setPokemos({
          data: [...pokemons.data, ...items],
          loading: false,
          error: false,
          isNextPage: nextPage !== null,
        });
      } catch (err) {
        console.error(err);
        setPokemos({ data: null, loading: false, error: true });
      }
    };
    getPokemons();
  }, [page]);

  //abstraer de mejor forma (traer y guardar en Redux)
  useEffect(() => {
    const getTypes = async () => {
      try {
        const resTypes = await axiosGetTypesPokemons();
        types.current = resTypes;
      } catch (err) {
        console.log(err);
      }
    };
    getTypes();
  }, []);

  if (pokemons.loading) return "loading";

  return (
    <HomeStyle>
      <Dropdown
        options={types.current}
        selections={selections}
        setSelections={setSelections}
      />
      <div className="contain-cards">
        {leakedPokemons.length ? (
          leakedPokemons?.map((pokemon) => {
            return (
              <Link to={`pokemon/${pokemon.id}`} key={pokemon.id}>
                <Card
                  name={pokemon.name}
                  number={pokemon.order}
                  image={pokemon.sprites.front_default}
                  types={pokemon.types}
                />
              </Link>
            );
          })
        ) : (
          <h1>No se encontraron resultados!</h1>
        )}
        <div ref={elementRef}></div>
      </div>
    </HomeStyle>
  );
}

export default Home;
