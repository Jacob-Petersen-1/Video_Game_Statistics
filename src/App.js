import './App.css';
import React, { useState, useEffect} from 'react';

function App() {

  const [games, setGames] = useState([]);
  const [displayGames, setDisplayGames] = useState([])

  useEffect(()=>{
    getAllGames();
  }, [])

  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setSongs(response.data)
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
  }

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
