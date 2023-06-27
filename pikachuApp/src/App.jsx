import React, { useState } from 'react';
import PokemonContainer from './containers/PokemonContainer';
import UserInput from './containers/UserInput';
export default function App() {
  const [pokemonImg, setPokemonImg] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState([]);
  return (
    <div>
      <UserInput {...{ setPokemonImg, setPokemonInfo }} />
      <PokemonContainer {...{ pokemonImg, pokemonInfo }} />
    </div>
  );
}
