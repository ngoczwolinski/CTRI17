import React, { useState } from 'react';
import PokemonContainer from './containers/PokemonContainer';
import UserInput from './containers/UserInput';

export default function App() {
  const [pokemonImg, setPokemonImg] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  return (
    <div>
      <UserInput {...{ setPokemonImg, setPokemonInfo, setPokemonName }} />
      {/* <PokemonContainer pokemonImg={pokemonImg} pokemonInfo={pokemonInfo} /> */}
      <PokemonContainer {...{ pokemonImg, pokemonInfo, pokemonName }} />
    </div>
  );
}
