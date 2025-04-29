import React from 'react';
import { motion } from 'framer-motion';

function PokemonCard({ pokemon }) {
  return (
    <motion.div 
      className="pokemon-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>ID: {pokemon.id}</p>
      <div className="types">
        {pokemon.types.map(type => (
          <span key={type} className={`type ${type}`}>{type}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default PokemonCard;

