import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './slices/couter/counterSlice'
//slice una funcion que recibe un objeto,

export const store = configureStore({
    reducer: {
       counter: counterSlice.reducer
    },
})