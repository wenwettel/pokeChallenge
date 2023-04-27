import LineProgress from "../../components/Commons/LineProgress";
import { TypeStyle, FeatureStyles } from "./FeatureStyles";


function PokemonFeatures({ name, types, stats, isMobile }) {
 
  return (
    <FeatureStyles>
      {!isMobile && <h1>{name?.toUpperCase()}</h1>}
      {types?.map((type) => (
        <TypeStyle type={type.type.name} key={type.slot}>
          {type.type.name}
        </TypeStyle>
      ))}
      <div>
        {stats?.map((stat) => {
          return (
            <div key={stat.stat.url} className="container-stats">
              <p className="stat-name">{stat.stat.name}</p>
              <LineProgress
                value={stat.base_stat}
                type={types[0]?.type?.name}
              />
              <span className="percent">{stat.base_stat}%</span>
            </div>
          );
        })}
      </div>
    </FeatureStyles>
  );
}

export default PokemonFeatures;
