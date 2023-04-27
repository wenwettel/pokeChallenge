import { useState, useEffect } from "react";
import { DetailStyle } from "./DetailStyle";
import { useParams } from "react-router-dom";
import { axiosGetPokemonDetail } from "../../services/pokemons";
import useMediaQuery from "@mui/material/useMediaQuery";
import PokemonFeatures from "../../components/PokemonFeatures";
import AccordionPokemonDetails from "../../components/AccordionPokemonDetails";
import SkeletonDetails from '../../components/Commons/Skeletons/SkeletonDetails'
import Container from "../../components/Commons/Container";

function PokemonDetails() {
  const isMobile = useMediaQuery("(max-width:580px)");
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    data: {},
    loading: true,
    error: false,
  });
  const { details, evolutions } = pokemon?.data;

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await axiosGetPokemonDetail(id);
        setPokemon({ data: res, loading: false, error: false });
      } catch (error) {
        console.error(error);
        setPokemon({ data: null, loading: false, error: true });
      }
    };
    getPokemon();
  }, [id]);

  if (pokemon?.loading) return <SkeletonDetails />;

  if (pokemon?.error || (!pokemon?.loading && !Object.keys(pokemon?.data).length)){
    return (
      <Container>
        Disculpe ocurrio un error, por favor intentelo nuevamente...
      </Container>
    );
  }

  return (
    <DetailStyle>
      {isMobile && (
        <h1 className="title-mobile">{details?.name?.toUpperCase()}</h1>
      )}
      <div className="container-img-info">
        <img
          className="image"
          src={details?.sprites?.other["official-artwork"]?.front_default}
          alt="pokemon"
        />
        <PokemonFeatures
          isMobile={isMobile}
          name={details?.name}
          types={details?.types}
          stats={details?.stats}
        />
      </div>
      <AccordionPokemonDetails
        abilities={details?.abilities}
        evolutions={evolutions}
        games={details?.game_indices}
        types={details?.types}
      />
    </DetailStyle>
  );
}

export default PokemonDetails;
