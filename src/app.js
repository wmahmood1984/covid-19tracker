import React from 'react'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData } from './API'

class App extends React.Component{

    state = {
        data:{},
        country:'',
    }

    async componentDidMount(){
        const apiData = await fetchData()
        this.setState({data:apiData})
    }

    handleCountryChange = async (country)=>{
        const apiData1 = await fetchData(country)
        this.setState({data:apiData1, country:country})
       
    }
    render(){

        const {data, country } = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
                
            </div>
        )
    }
}

export default App