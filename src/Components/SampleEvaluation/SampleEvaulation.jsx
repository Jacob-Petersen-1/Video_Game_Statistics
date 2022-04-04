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
        const genre = [...new Set(removeDuplicates)]

        let genreGlobalSales = genre.map(genre=> {
            let genreDataSet ={
                genre: genre,
                globalSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.globalSales).reduce((a, b) => a + b, 0),
                northAmericaSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.northAmericaSales).reduce((a, b) => a + b, 0),
                europeSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.europeSales).reduce((a, b) => a + b, 0),
                japanSalesByGenre: tempGraphDataGenre.filter(game=>game.genre === genre).map(game => game.japanSales).reduce((a, b) => a + b, 0)
            }
            return genreDataSet
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
        title: "Most Successful Genre by Global Sales Compared in North America, Europe, and Japan",
        vAxis: {
            title: 'Sales in Millions',
        },
        hAxis: {
            title: 'Genre'
        }
      };
    
    return ( 

        <div>
            {genreData.length > 0 &&
            <div><Chart 
            options={options}
            chartType='ColumnChart' 
            width='100%' 
            height='300px' 
            data={formatGraph(genreData)}/></div>}
        </div>

    );


}
 
export default SampleEvaluation;
