import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  error: false,
};

export const getTypesPokemons = createSlice({
  name: "types",
  initialState,
  reducers: {
    startLoadingTypes: (state) => {
      state.loading = true;
    },
    setTypes: (state, action) => {
      state.loading = false;
      state.data = action.payload.types;
    },
    setErrorTypes: (state) =>{
      state.error = true
      state.data = null
      state.loading = false
    }
  },
});

export const { startLoadingTypes, setTypes,setErrorTypes } = getTypesPokemons.actions;