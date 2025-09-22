import styled from "styled-components";
import type { Pokemon } from "pokenode-ts";
import { POKEMON_TYPE_COLORS } from "../utils/pokemonTypes";

// passing in a background color based on the type of the pokemon
const CardContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonCardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
`;

const PokemonCardName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export default function PokemonCard(props: { pokemon: Pokemon }) {
  // gets the primary type of the pokemon to determine its main color
  const primaryType = props.pokemon.types[0]?.type
    .name as keyof typeof POKEMON_TYPE_COLORS;
  // sets the background color based on the primary type
  const backgroundColor = POKEMON_TYPE_COLORS[primaryType] || "#FFFFFF";

  return (
    <CardContainer backgroundColor={backgroundColor}>
      <PokemonCardImage
        src={props.pokemon.sprites.front_default ?? ""}
        alt={`Image of ${props.pokemon.name}`}
      />
      <PokemonCardName>{props.pokemon.name}</PokemonCardName>
    </CardContainer>
  );
}
