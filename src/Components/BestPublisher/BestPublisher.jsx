import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'

const BestPublisher = (props) => {
    
    const [graphDataPublisher, setGraphDataPublisher] = useState([]);
    const [publisherData, setPublisherData] = useState([]);
    
    
    
    useEffect(() =>{
        let tempGraphDataPublisher = props.games.filter(function(el){
            return el.year >= 1950;
        })
        getPublisherSalesData(tempGraphDataPublisher)
    }, [props.games])
    console.log(graphDataPublisher)

    
    function getPublisherSalesData (tempGraphDataPublisher){
        const removeDuplicates = tempGraphDataPublisher.map(game=>game.publisher);
        const publisher = [...new Set(removeDuplicates)]

        let publisherGlobalSales = publisher.map(publisher=> {
            let publisherDataSet ={
                publisher: publisher,
                globalSalesByPublisher: tempGraphDataPublisher.filter(game=>game.publisher === publisher).map(game => game.globalSales).reduce((a, b) => a + b, 0),
            }
            return publisherDataSet
        })

        let filteredPublisherGlobalSales = filterBySales(publisherGlobalSales)

        setPublisherData(filteredPublisherGlobalSales)
    }
    
    function formatGraph(dataSet){
        const data = [
            ["publisher", "Global Sales In Millions"],
            ...dataSet.map(data => [data.publisher, data.globalSalesByPublisher])
        ]
        

        return data
    }
    
    function filterBySales(dataSet){
        let filteredData = dataSet.filter(function(el){
            return el.globalSalesByPublisher >= 200;
        })

        return filteredData
    }
    
    const options = {
        title: "Most Successful Publisher of All Time by Global Sales",
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10
                }
            }]
        }
      };
    
    return ( 

        <div>
            {publisherData.length > 0 &&
            <div><Chart 
            options={options}
            chartType='ColumnChart' 
            width='100%' 
            height='300px' 
            data={formatGraph(publisherData)}/></div>}
        </div>

    );


}
 
export default BestPublisher;
