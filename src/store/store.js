import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './slices/couter/counterSlice'
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";
//slice una funcion que recibe un objeto,

export const store = configureStore({
    reducer: {
       counter: counterSlice.reducer,
       pokemons: pokemonSlice.reducer
    },
})