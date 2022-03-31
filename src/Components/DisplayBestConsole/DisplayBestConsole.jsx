
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'

const DisplayBestConsole = (props) => {
    
    const [graphDataConsole, setGraphDataConsole] = useState([]);
    
    
    
    useEffect(() =>{
        let tempGraphDataConsole = props.games.filter(function(el){
            return el.year >= 2013;
        }).map(g => {
        return g.platform;
    });
    let cleanData = removeDuplicates(tempGraphDataConsole);
    setGraphDataConsole(cleanData);
    }, [props.games])
    
    console.log(graphDataConsole)

    function removeDuplicates(arr) {
        var unique = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        return unique;
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
 
export default DisplayBestConsole

;