import React from 'react';

export default function PokemonContainer(props) {
  // Deconstruct Props
  const { pokemonImg, pokemonInfo } = props;
  // Life Cycle
  // Handle Methods
  // Render
  if (!pokemonImg) return <h3>Please submit a pokemon</h3>;
  return (
    <div id="pokemon-container">
      <h3>Pikachu</h3>
      <img src={pokemonImg} alt="Pokemon Picture" />
      <div id="pokemon-information">
        <h3>Information</h3>
        <ul>
          {pokemonInfo.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// Export
