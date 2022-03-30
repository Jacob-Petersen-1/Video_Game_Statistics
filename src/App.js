import './App.css';
import React, { useState, useEffect} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from "axios";
import Graph from "./Components/Graph/Graph"

function App() {

  const [games, setGames] = useState([]);
  const [displayGames, setDisplayGames] = useState([])

  useEffect(()=>{
    getAllGames();
  }, [])

  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setGames(response.data)
    setDisplayGames(response.data)
    console.log(response.data)
  }

  const filterGames = (searchGame) => {

    let matchingGames = games.filter((game) => {
      if(game.name.toLowerCase().includes(searchGame.toLowerCase())){

        return true
      }
      else{
        return false
      }
    })

    setDisplayGames(matchingGames)
    console.log(matchingGames)
  }

  return (
    <div>
      <header>
        <h1>VideoGame Query Machine</h1>
      </header>

      <div>
        <SearchBar filterGames={filterGames}/>
      </div>

      <div>
        <Graph displayGames={displayGames}/>
      </div>
    
    </div>
  );
}

export default App;
