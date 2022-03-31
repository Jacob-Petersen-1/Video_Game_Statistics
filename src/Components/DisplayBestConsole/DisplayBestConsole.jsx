
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'

const DisplayBestConsole = (props) => {
    
    const [graphData, setGraphData] = useState([]);
    
    useEffect(() => {
    let tempGraphData = props.games.map(game => {
        return [game.platform, game.globalSales, game.year >= 2013];

    });

    setGraphData(tempGraphData);
    }, [props.games])

    console.log(graphData)

    const data = [
        
        
      ];
      
    const options = {
        title: "Best Selling consoles since 2013",
        curveType: "function",
        legend: { position: "bottom" },
      };
    
    
    return ( 

        <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={[["Platform",], ...graphData]}
        options={options}
      />
    );


}
 
export default DisplayBestConsole

;