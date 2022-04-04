import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import axios from "axios";
import Graph from "./Components/Graph/Graph";
import DisplayBestConsole from "./Components/DisplayBestConsole/DisplayBestConsole";
import DisplayAndSelectData from "./Components/DisplayAndSelectData/DisplayAndSelectData";
import TopBar from "./Components/TopBar/TopBar";
import SampleEvaluation from "./Components/SampleEvaluation/SampleEvaulation";
import Footer from "./Components/Footer/Footer";
import BestPublisher from "./Components/BestPublisher/BestPublisher";

function App() {
  const [games, setGames] = useState([]);
  const [displayGames, setDisplayGames] = useState([]);
  const[search, setSearch] = useState('')

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
      if (game.name.toLowerCase().includes(searchGame.toLowerCase())||game.platform.toLowerCase().includes(searchGame.toLowerCase())||game.publisher.toLowerCase().includes(searchGame.toLowerCase())||game.genre.toLowerCase().includes(searchGame.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setSearch(searchGame);
    setDisplayGames(matchingGames);
    console.log(matchingGames);
    console.log(searchGame)
  };

  return (
    <div>
      <TopBar />
      <div className="page-container">
        <div className="home-page">
          <div className="search">
            <SearchBar filterGames={filterGames} />
            <DisplayAndSelectData games={displayGames} search={search}/>
          </div>
          <h2>Search Results</h2>
          <div className="search-chart">
            <Graph displayGames={displayGames} />
          </div>
          <h5>*Only five games are shown at a time to limit degradation of chart readability. If you don't see your title here, try being more specific. You can find it in the table above and then re-search it in the search bar.</h5>
          
          <h2>Best Platform for Gaming</h2>
          <div className="bar-chart">
            <DisplayBestConsole games={games} />
          </div>

          <h2>Most Successful Genre by Sales</h2>
          <div className="bar-chart">
            <SampleEvaluation games={games}/>
          </div>

          <h2>Most Successful Publisher of All Time</h2>
          <div className="bar-chart">
            <BestPublisher games={games}/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
