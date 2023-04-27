export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function extractIdOfUrl(url) {
  if (!url) return;
  const id =
    typeof url === "string"
      ? url.split("/").slice(-2, -1)[0]
      : url.toString().split("/").slice(-2, -1)[0];
  return id;
}

//funcion recursiva : trae todas la evoluciones del pokemon
export function getEvolutions(evolutionChain) {
  if (!evolutionChain.evolves_to[0]) return [];
  return [
    evolutionChain.evolves_to[0].species,
    ...getEvolutions(evolutionChain.evolves_to[0]),
  ];
}

/*Para la linea de evolucion de un pokemon es la misma ruta (id), 
en consecuenta trae las mismas evoluciones siempre, 
esta funcion filra para que solo se muestra la siguiente evolucion que corresponde*/

export function filterEvolutions(chain, namePokemon) {
  if (!chain || !namePokemon) return;

  const arrayEvolutions = getEvolutions(chain);
  const index = arrayEvolutions.findIndex(
    (evolution) => evolution.name === namePokemon
  );
  const listEvolutions =
    index === -1 ? arrayEvolutions : arrayEvolutions.slice(index + 1);

  return listEvolutions;
}

