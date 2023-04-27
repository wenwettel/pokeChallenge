import { configureStore } from "@reduxjs/toolkit";
import { getTypesPokemons } from "./slices/types";

export const store = configureStore({
  reducer: {
    types: getTypesPokemons.reducer,
  },
});
