import { PokemonClient } from "pokenode-ts";
import type { Pokemon } from "pokenode-ts";

// inits the pokemon api
const api = new PokemonClient();

// makes a request to the pokemon api to get a pokemon by id
async function getPokemonById(id: number): Promise<Pokemon> {
  return api.getPokemonById(id)
}

export default getPokemonById
