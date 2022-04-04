import React, {useState} from "react";
import "./SearchBar.css"

const SearchBar = (props) => {

    const [searchGame, setSearchGame] = useState('');

    function handleSubmit(entry){
        entry.preventDefault();
        props.filterGames(searchGame)
        setSearchGame('')
    }

    return ( 
        <div className="searchbar-container"> 
            <form onSubmit={handleSubmit}>
                    <input 
                    value={searchGame} 
                    onChange={(entry) => setSearchGame(entry.target.value)} 
                    type="text" 
                    placeholder="Search..." 
                    className="input"></input>
                    <button type="text" class="submit" className="search-button">Search</button>
            </form>
        </div>
                
                
                

     );
}
 
export default SearchBar;