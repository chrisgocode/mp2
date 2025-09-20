const MAX_DEX_NUMBER = 493;

// generates a random pokedex
// recursively calls itself until a unique pokedex number is generated
export const getRandomPokemon: (usedNumbers?: number[]) => number = (
  usedNumbers
) => {
  const pokedexNumber: number = Math.floor(Math.random() * MAX_DEX_NUMBER) + 1;

  if (!usedNumbers?.includes(pokedexNumber)) return pokedexNumber;

  return getRandomPokemon(usedNumbers);
};

// generates an array of 9 unique pokedex numbers
export const getPokemonGrid: () => number[] = () => {
  const group: number[] = [];
  for (let i = 0; i < 9; i++) {
    group.push(getRandomPokemon(group));
  }
  return group;
};
