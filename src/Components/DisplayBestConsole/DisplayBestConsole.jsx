
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'

const DisplayBestConsole = (props) => {
    
    const [graphDataPlatforms, setGraphDataPlatforms] = useState([]);
    const [platformData, setPlatformData] = useState([]);
    const game = props.game
    
    
    
    useEffect(() =>{
        let tempGraphDataPlatforms = props.games.filter(function(el){
            return el.year >= 2013;
        }).map(g => {
        return [g.platform];
    });


    setGraphDataPlatforms(tempGraphDataPlatforms);
    }, [props.games])
    console.log(graphDataPlatforms)

    
    function getPlatformSalesData (tempGraphDataPlatforms){
        const removeDuplicates = tempGraphDataPlatforms.map(game=>game.platform);
        const platform = [...new Set(removeDuplicates)]

        let platformsGlobalSales = platform.map(platform=> {
            let platformDataSet ={
                platform: platform,
                globalSales: tempGraphDataPlatforms.filter(game=>game.platform === platform).map(game.globalSales).reduce((a, b) => a + b, 0)
            }
            return platformDataSet
        })

        setPlatformData(platformsGlobalSales)
    }
    
    
    
    
    
    
    const options = {
        title: "Best Console Global Sales Since 2013",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };
    
    return ( 
        <h1>test</h1>
    //     <Chart
    //   chartType="BarChart"
    //   width="100%"
    //   height="400px"
    //   data={[["Platform","Global Sales"],...graphDataConsole]}
    //   options={options}
    
    //     />
    
    );


}
 
export default DisplayBestConsole;


//notes  // function removeDuplicates(arr) {
    //     var unique = arr.reduce(function (acc, curr) {
    //         if (!acc.includes(curr))
    //             acc.push(curr);
    //         return acc;
    //     }, []);
    //     return unique;
    // }
   
