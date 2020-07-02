import React, {useState,useEffect} from 'react'
import {fetchDailyData} from '../../API/index'
import { Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

const Chart = ({data, country}) => {

    const [dailyData,setDailyData] = useState([])
    useEffect(()=>{
        const fetchAPI = async ()=>{
        setDailyData(await fetchDailyData())
        }
        fetchAPI()
    },[])

    const LineChart = (
        dailyData.length!==0?
        <Line
        data ={{
            labels: dailyData.map(({data})=>data),
            datasets: [{
                data: dailyData.map(({confirmed})=>confirmed),
                label:'infected',
                bordercolor: '#333ff',
                fill: true,
            },{
                data: dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                bordercolor: 'red',
                
                fill: true,
            }],
        }}
        />:null
    )


    const barChart = (
        data.confirmed? (<Bar
        data ={{
            labels: ['infected','recovered','Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                data : [data.confirmed.value,data.recovered.value,data.deaths.value]

            }]
        }}
        options={{
            legend:{diplay:false},
            title: {display: true, text:`Abhi ${country} me yeh halat he dekh lo`,}
        }}
        />):null)

    
    return (
        <div className={styles.container}>
            {country? barChart : LineChart}
            
        </div>
    )
}

export default Chart;