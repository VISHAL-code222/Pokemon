import React from 'react';
import { motion } from 'framer-motion';
import Pokemon_Card from './Pokemon_Card';

function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return <div className="no-results">No Pokémon match your search.</div>;
  }

  return (
    <motion.div 
      className="pokemon-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {pokemons.map(pokemon => (
        <Pokemon_Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </motion.div>
  );
}

export default PokemonList;

