import { useState, useEffect } from "react";
import PokemonGrid from "./components/PokemonGrid";
import { getPokemonGrid } from "./utils/getRandomPokemon";
import getPokemonById from "./utils/pokeApi";
import type { Pokemon } from "pokenode-ts";

function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemon(): Promise<void> {
      const pokemonIds = getPokemonGrid();
      const data = await Promise.all(
        pokemonIds.map((id) => getPokemonById(id))
      );
      setPokemonData(data);
    }
    fetchPokemon()
      .then(() => console.log("Data fetched!"))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <PokemonGrid pokemon={pokemonData} />
    </>
  );
}

export default App;
