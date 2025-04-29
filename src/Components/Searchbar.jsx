import React from 'react';
import { motion } from 'framer-motion';

const types = [
  '', 'grass', 'fire', 'water', 'bug', 'normal', 'poison', 'electric',
  'ground', 'fairy', 'fighting', 'psychic', 'rock', 'ghost', 'ice', 'dragon', 'dark', 'steel', 'flying'
];

function SearchBar({ searchTerm, setSearchTerm, selectedType, setSelectedType }) {
  return (
    <motion.div 
      className="search-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <input 
        type="text" 
        placeholder="Search Pokémon..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select 
        value={selectedType} 
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>{type.toUpperCase()}</option>
        ))}
      </select>
    </motion.div>
  );
}

export default SearchBar;



