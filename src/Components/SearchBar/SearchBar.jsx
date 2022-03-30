import React, {useState} from "react";

const SearchBar = (props) => {

    const [searchGame, setSearchGame] = useState('');

    function handleSubmit(entry){
        entry.preventDefault();
        props.filterGames(searchGame)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div></div>
                <div>Search for games in the database here!</div>
                <div>
                    <input value={searchGame} onChange={(entry) => setSearchGame(entry.target.value)} type="text" placeholder="Search..."></input>
                </div>
                <div>
                    <button type="text" class="submit">Search</button>
                </div>

            </form>
        </div>
     );
}
 
export default SearchBar;