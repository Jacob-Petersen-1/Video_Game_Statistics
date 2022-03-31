import React from "react";



const DisplayAndSelectData = (props) => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Title</th>
                        <th>Publisher</th>
                        <th>Release Year</th>
                    </tr>
                </thead>

                <tbody>
                    {props.parentEntries.map((game)=>{
                        return(
                            <tr>
                                <td>{game.rank}</td>
                                <td>{game.name}</td>
                                <td>{game.publisher}</td>
                                <td>{game.year}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayAndSelectData;