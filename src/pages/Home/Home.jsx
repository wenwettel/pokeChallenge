import { useRef, useEffect, useState, useCallback } from "react";
import { HomeStyle, ContainerSkeleton } from "./HomeStyle";
import Card from "../../components/Card/Card";
import {
  axiosGetAllPokemons,
  axiosGetTypesPokemons,
} from "../../services/pokemons";
import useIntersector from "../../hooks/Intersector";
import debounce from "just-debounce-it";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import Container from "../../components/Commons/Container";

function Home() {
  const elementRef = useRef();
  const [types, setTypes] = useState({
    data: [],
    loading: true,
    error: false,
  });
  const [pokemons, setPokemons] = useState({
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

  // Consulta de lista de pokemos
  useEffect(() => {
    if (!pokemons.loading && !pokemons.isNextPage) return;
    const getPokemons = async () => {
      try {
        const { items, nextPage } = await axiosGetAllPokemons(page);
        setPokemons({
          data: [...pokemons.data, ...items],
          loading: false,
          error: false,
          isNextPage: nextPage !== null,
        });
      } catch (err) {
        console.error(err);
        setPokemons({ data: null, loading: false, error: true });
      }
    };
    getPokemons();
  }, [page]);

  //consulta de tipos para el filtro
  useEffect(() => {
    const getTypes = async () => {
      try {
        const resTypes = await axiosGetTypesPokemons();
        setTypes({data:resTypes, loading:false, error:false})
      } catch (err) {
        console.error(err);
        setTypes({data:null, loading:false, error:true})
      }
    };
    getTypes();
  }, []);

  if (pokemons.loading) {
    return (
      <ContainerSkeleton>
        {Array.from(new Array(20)).map((_, i) => {
          return <Skeleton key={i} variant="rectangular" height="180px" width="200" />;
        })}
      </ContainerSkeleton>
    );
  }
  
  if (pokemons.error || (!pokemons.loading && !pokemons.data.length))
    return (
      <Container>
        Disculpe ocurrio un error, por favor intentelo nuevamente...
      </Container>
    );

  return (
    <HomeStyle>

      {!types.error &&
        <Dropdown
        options={types.data}
        selections={selections}
        setSelections={setSelections}
      />
      }
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
          <h4>Buscando...</h4>
        )}
        <div ref={elementRef}></div>
      </div>
    </HomeStyle>
  );
}

export default Home;
