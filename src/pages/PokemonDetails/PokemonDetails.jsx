import LinearProgress from "@mui/material/LinearProgress";
import { DetailStyle, TypeStyle } from "./DetailStyle";
import { capitalizeFirstLetter } from "../../utils";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const {id} = useParams()
  console.log(id)
  const stats = [1, 2, 3, 4, 5, 6];
  const types = ["poison", "grow"];
  return (
    <DetailStyle>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="pokemon"
      />
      <div className="main-features">
        <h1>{capitalizeFirstLetter("bulbasaur")}</h1>
        {types.map((type) => (
          <TypeStyle>{type}</TypeStyle>
        ))}
        <div>
          {stats.map((stat) => {
            return (
              <div className="container-stats">
                <p>stats</p>
                <LinearProgress variant="determinate" value={30} />
                <span className="percent">30%</span>
              </div>
            );
          })}
        </div>
      </div>
    </DetailStyle>
  );
}

export default PokemonDetails;
