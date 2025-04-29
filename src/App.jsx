import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import SearchBar from './Components/Searchbar';
import PokemonList from './Components/PokemonList';
import Loader from "./Components/Loader"
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const results = response.data.results;
  
        const detailedPokemons = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return {
              id: res.data.id,
              name: res.data.name,
              image: res.data.sprites.front_default,
              types: res.data.types.map(typeInfo => typeInfo.type.name),
            };
          })
        );
  
        
        setTimeout(() => {
          setPokemons(detailedPokemons);
          setFilteredPokemons(detailedPokemons);
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
  
    fetchPokemons();
  }, []);
  

  useEffect(() => {
    let filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedType) {
      filtered = filtered.filter(pokemon => pokemon.types.includes(selectedType));
    }

    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType, pokemons]);

  if (loading) {
    return <div className="loader"><Loader/></div>;
  }

  if (error) {
    return <div className="error">Failed to load Pokémon. Try again later.</div>;
  }

  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedType={selectedType} 
        setSelectedType={setSelectedType}
      />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
