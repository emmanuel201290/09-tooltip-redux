import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemon, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons = (page=0) =>{
   return async (dispatch, getState )=>{
      dispatch(startLoadingPokemon())
   
    const {data } = await pokemonApi.get(`/pokemon?limit=10$offset=${page*10}`);

    dispatch(setPokemon({pokemons: data.results, page: page + 1}))
   }
}