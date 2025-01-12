import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharCard from "./components/CharCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const[characters,changeCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      console.log('Data pulled: ',response);
      const charArray = response.data.results;
      console.log('Character array: ',charArray);
      changeCharacters(charArray);
    })
    .catch(error => {
      console.log('The API is currently down, try again later', error)
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cards">
        {characters.map(character => {
        return <CharCard key={character.name} name={character.name} homeworld= {character.homeworld} films= {character.films}/>
      })}
      </div>
    </div>
  );
}

export default App; 

