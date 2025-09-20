import styled from "styled-components";
import type { Pokemon } from "pokenode-ts";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  return (
    <CardContainer>
      <PokemonCardImage
        src={props.pokemon.sprites.front_default ?? ""}
        alt={`Image of ${props.pokemon.name}`}
      />
      <PokemonCardName>{props.pokemon.name}</PokemonCardName>
    </CardContainer>
  );
}
