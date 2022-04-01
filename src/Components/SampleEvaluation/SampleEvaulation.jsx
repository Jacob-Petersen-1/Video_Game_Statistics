import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'

const SampleEvaluation = (props) => {
    
    const [graphDataGenre, setGraphDataGenre] = useState([]);
    const [genreData, setGenreData] = useState([]);
    
    
    
    useEffect(() =>{
        let tempGraphDataGenre = props.games.filter(function(el){
            return el.year >= 2000;
        })
        getGenreSalesData(tempGraphDataGenre)
    }, [props.games])
    console.log(graphDataGenre)

    
    function getGenreSalesData (tempGraphDataGenre){
        const removeDuplicates = tempGraphDataGenre.map(game=>game.genre);
        const platform = [...new Set(removeDuplicates)]

        let genreGlobalSales = platform.map(genre=> {
            let platformDataSet ={
                genre: genre,
                globalSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return platformDataSet
        })

        setGenreData(genreGlobalSales)
    }
    
    function formatGraph(dataSet){
        const data = [
            ["Platform", "Global Sales In Millions"],
            ...dataSet.map(data => [data.genre, data.globalSalesByGenre])
        ]
        return data
    }
    
    
    
    const options = {
        title: "Best Console Global Sales Since 2013",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };
    
    return ( 

        <div>
            {genreData.length > 0 &&
            <div><Chart chartType='ColumnChart' width='100%' height='300px' data={formatGraph(genreData)}/></div>}
        </div>

    );


}
 
export default SampleEvaluation;
