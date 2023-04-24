import { useRef, useEffect, useState, useCallback } from "react";
import HomeStyle from "./HomeStyle";
import Card from "../../components/Card/Card";
import { axiosGetAllPokemons } from "../../services/pokemons";
import useIntersector from "../../hooks/Intersector";
import debounce from 'just-debounce-it'

function Home() {
  const elementRef = useRef();
  const [pokemons, setPokemos] = useState({
    data: [],
    loading: true,
    error: false,
  });

  const [page, setPage] = useState(0);
  const { isItersecting } = useIntersector(elementRef);

  const throttleScrollInfinitive = useCallback(debounce(
    () => setPage(page+1), 200
  ), [page])
  
 
  useEffect(() => {
    if (isItersecting) throttleScrollInfinitive();
  }, [throttleScrollInfinitive, isItersecting]);

  useEffect(() =>{
    const getPokemons = async () => {
        try {
          const res = await axiosGetAllPokemons(page);
          setPokemos({
            data: [...pokemons.data, ...res],
            loading: false,
            error: false,
          });
        } catch (err) {
          console.error(err);
          setPokemos({ data: null, loading: false, error: true });
        }
      };
      getPokemons();
  },[page])

  if(pokemons.loading) return "loading"

  return (
    <HomeStyle>
      <div className="contain-cards">
        {pokemons.data?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              number={pokemon.order}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
            />
          );
        })}
        <div ref={elementRef}></div>
      </div>
    </HomeStyle>
  );
}

export default Home;
