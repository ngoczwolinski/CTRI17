import React from 'react';

export default function UserInput(props) {
  // Deconstruct Props
  const { setPokemonImg, setPokemonInfo } = props;
  // Life Cycle
  // Handle Methods
  function handleSubmit() {
    const input = document.querySelector('#pokemon-input');
    const pokemonName = input.value;
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then((res) => res.json())
        .then((data) => {
          const newPokemonImg = data.sprites.front_default;
          const newPokemonInfo = [];
          for (const { ability } of data.abilities) {
            newPokemonInfo.push(ability.name);
          }
          setPokemonImg(newPokemonImg);
          setPokemonInfo(newPokemonInfo);
          input.value = '';
        })
        .catch((err) => console.log('Error during fetching pokemon data', err));
    }
  }
  // Render
  return (
    <div id="user-input">
      <input
        type="text"
        name=""
        id="pokemon-input"
        placeholder="Enter POKEMON"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
