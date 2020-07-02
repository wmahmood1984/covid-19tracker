import React, { useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import style from './CountryPicker.module.css'
import { fetchCountries } from '../../API'
const CountryPicker = ({handleCountryChange}) => {
const [fetchedCountries, setfetchedCountries] = useState([])


useEffect(()=>{
    const fetchAPI = async ()=>{
        setfetchedCountries(await fetchCountries())

    }
    fetchAPI();
},[setfetchedCountries]);
console.log('fetched countries',fetchedCountries)
    return (
        <FormControl className={style.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <opton value="">Global</opton>
    {fetchedCountries.map((country, i)=><option key={i}value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;