import React from 'react';
const url =
  'data:image/jpeg;base64,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';
const info = ['Info1', 'Info2', 'Info3', 'Info4'];

export default function UserInput(props) {
  // Deconstruct the props/Initialize State
  const { setPokemonImg, setPokemonInfo, setPokemonName } = props;
  // LifeCycle Method

  // Handle Method
  // function handleSubmit() {
  //   const input = document.querySelector('#pokemon-input');
  //   const pokemonName = input.value;
  //   // If user input a name
  //   if (pokemonName) {
  //     // Fetch POKEMON API
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // Obtain POKEMON image & info
  //         const newPokemonImg = data.sprites.front_default;
  //         const newPokemonInfo = [];
  //         for (const { ability } of data.abilities) {
  //           newPokemonInfo.push(ability.name);
  //         }
  //         // for (const { slot } of data.abilities) {
  //         //   console.log(slot);
  //         // }
  //         // Update image
  //         setPokemonImg(newPokemonImg);
  //         // Update information
  //         setPokemonInfo(newPokemonInfo);
  //         // Update name
  //         setPokemonName(pokemonName);
  //         //Reset input box
  //         input.value = '';
  //       })
  //       .catch((err) => console.log('Error during fetching POKEMON API', err));
  //   }
  // }
  async function handleSubmit() {
    // Obtain input value from user
    const input = document.getElementById('pokemon-input');
    const pokemonName = input.value;
    // If user input a name
    if (pokemonName) {
      try {
        // Fetch to POKEMON API
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await res.json();
        console.log(data);
        // Get Pokemon img & abilities
        const newPokemonImg = data.sprites.front_shiny;
        const newPokemonInfo = data.abilities.map(
          ({ ability }) => ability.name
        );
        // Update name
        setPokemonName(pokemonName);
        // Update img
        setPokemonImg(newPokemonImg);
        // Update abilities
        setPokemonInfo(newPokemonInfo);
        // Reset the input box
      } catch (err) {
        console.log('Error during fetching POKEMON API', err);
      }
    }
  }
  // Render
  return (
    <div id="user-input">
      <input type="text" placeholder="Enter POKEMON" id="pokemon-input" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
