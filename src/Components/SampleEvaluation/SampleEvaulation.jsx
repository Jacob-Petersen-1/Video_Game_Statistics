import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'

const SampleEvaluation = (props) => {
    
    const [graphDataGenre, setGraphDataGenre] = useState([]);
    const [genreData, setGenreData] = useState([]);
    
    
    
    useEffect(() =>{
        let tempGraphDataGenre = props.games.filter(function(el){
            return el.year >= 1950;
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
                globalSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.globalSales).reduce((a, b) => a + b, 0),
                northAmericaSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.northAmericaSales).reduce((a, b) => a + b, 0),
                europeSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.europeSales).reduce((a, b) => a + b, 0),
                japanSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.japanSales).reduce((a, b) => a + b, 0)
            }
            return platformDataSet
        })

        setGenreData(genreGlobalSales)
    }
    
    function formatGraph(dataSet){
        const data = [
            ["Genre", "Global Sales In Millions", "North America Sales In Millions", "Europe Sales In Millions", "Japan Sales in Millions"],
            ...dataSet.map(data => [data.genre, data.globalSalesByGenre, data.northAmericaSalesByGenre, data.europeSalesByGenre, data.japanSalesByGenre])
        ]
        return data
    }
    
    
    
    const options = {
        title: "Best Console Global Sales Since 2013",
        width: 100,
        height: 800,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };
    
    return ( 

        <div>
            {genreData.length > 0 &&
            <div><Chart 
            chartType='ColumnChart' 
            width='100%' 
            height='300px' 
            data={formatGraph(genreData)}/></div>}
        </div>

    );


}
 
export default SampleEvaluation;
