import { axiosGetTypesPokemons } from "../../../services/pokemons";
import { setTypes, setErrorTypes } from "./types";


export const getTypes = () => {
  return async (dispatch) => {
    try {
      const resTypes = await axiosGetTypesPokemons();
      dispatch(setTypes({ types: resTypes, loading: false, error: false }));
    } catch (err) {
      console.error(err);
      dispatch(setErrorTypes());
    }
  };
};
