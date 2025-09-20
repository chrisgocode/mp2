import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import type { Pokemon } from "pokenode-ts";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vw;
`;

interface PokemonGridProps {
  pokemon: Pokemon[];
}

export default function PokemonGrid({ pokemon }: PokemonGridProps) {
  return (
    <GridContainer>
      {pokemon.map((pokemonData: Pokemon) => (
        <PokemonCard key={pokemonData.id} pokemon={pokemonData} />
      ))}
    </GridContainer>
  );
}
