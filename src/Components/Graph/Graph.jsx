import { Chart } from "react-google-charts"
import React, { useState,useEffect } from 'react';



const Graph = (props) => {
    
    const [graphData, setGraphData] = useState([]);
    
    useEffect(() => {
    let tempGraphData = props.displayGames.map(game => {
        return [game.name, game.globalSales, game.northAmericaSales, game.europeSales, game.japanSales];
    });

    setGraphData(tempGraphData);
    }, [props.displayGames])

    console.log(graphData)

    const data = [
        [
          "Element",
          "Density",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        ["Copper", 8.94, "#b87333", null],
        ["Silver", 10.49, "silver", null],
        ["Gold", 19.3, "gold", null],
        ["Platinum", 21.45, "color: #e5e4e2", null],
      ];
      
       const options = {
        title: "Sold Per Console",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };

    return (  
        
        <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={[["Platform", "GlobalSales", "North America Sales", "Europe Sales", "Japan Sales"], ...graphData]}
       
      />

  
        
        
    );
  }


 
export default Graph;