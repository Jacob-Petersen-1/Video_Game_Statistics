import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import axios from "axios";
import Graph from "./Components/Graph/Graph";
import DisplayBestConsole from "./Components/DisplayBestConsole/DisplayBestConsole";
import DisplayAndSelectData from "./Components/DisplayAndSelectData/DisplayAndSelectData";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  const [games, setGames] = useState([]);
  const [displayGames, setDisplayGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    let response = await axios.get("https://localhost:7260/api/games");
    setGames(response.data);
    filterGames("Mario Kart");
  }

  const filterGames = (searchGame) => {
    let matchingGames = games.filter((game) => {
      if (game.name.toLowerCase().includes(searchGame.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    setDisplayGames(matchingGames);
    console.log(matchingGames);
  };

  return (
    <div>
      <TopBar />
      <div className="page-container">
        <div className="home-page">
          <div className="search">
            <SearchBar filterGames={filterGames} />
            <DisplayAndSelectData games={displayGames} />
          </div>
          <h2>Global Sales</h2>
          <div className="search-chart">
            <Graph displayGames={displayGames} />
          </div>
          <h2> Best Total Game Sales Per Platform Since 2013</h2>
          <div className="bar-chart">
            <DisplayBestConsole games={games} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
