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
          <h5>According to our data, since 2013 the best platform for investing/creating games on based on sales is the PS4.</h5>
          <h5>The PS4 leads the second most popular platform, the PS3, by approximately $89,000,000 globally.</h5>
          <h5>The two top platforms in the gaming industry are owned by the same company, Sony, which could be a substantial boon for investors looking to capitalize on the market when considering the fact that many games on the PS3 are ported to the PS4.</h5>
          <h5>It is important to note that these numbers may not accurately reflect the best console of choice when the next generation consoles become available to consumers.</h5>

          <h2>Most Successful Genre by Sales</h2>
          <div className="bar-chart">
            <SampleEvaluation games={games}/>
          </div>
          <h5>According to our data, the best genre for investing/creating games based on sales are Action games.</h5>
          <h5>Action games lead the second most popular genre, Sports, by approximately $414,000,000 globally.</h5>
          <h5>The only genre to have more sales in Japan than any other region was Role-Playing. The only two other genres where sales in Japan beat sales in Europe were Puzzle and Strategy. The rest of the genres follow the same trend of having the most sales in North America, followed by Europe, and then Japan.</h5>

          <h2>Most Successful Publisher of All Time</h2>
          <div className="bar-chart">
            <BestPublisher games={games}/>
          </div>
          <h5>According to our data, the best publisher for investing/creating games with based on sales is Nintendo.</h5>
          <h5>Nintendo leads its closest competition, Electronic Arts, by approximately $691,000,000 globally.</h5>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
