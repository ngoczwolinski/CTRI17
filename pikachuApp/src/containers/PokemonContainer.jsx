import React from 'react';

export default function PokemonContainer(props) {
  // Deconstruct the props/Initialize State
  const { pokemonImg, pokemonInfo, pokemonName } = props;
  // LifeCycle Method

  // Handle Method

  // Render
  if (!pokemonName) return <h3>Please input POKEMON name</h3>;
  return (
    <div id="user-input">
      <h3>{pokemonName}</h3>
      <img src={pokemonImg} alt="Pokemon Picture" />
      <h3>Information</h3>
      <ul>
        {pokemonInfo.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
