import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCitiesList, selectSelectedCityWoeid} from "../store/citiesSelectorStore/citiesSelectorSelectors";
import {selectCity} from "../store/citiesSelectorStore/citiesSlice";


export const AppToolbar = () => {
    const listOfCities = useSelector(selectCitiesList);
    const selectedCityWoeid = useSelector(selectSelectedCityWoeid);
    
    const dispatch = useDispatch();
    
    const [selectedCityWoeidState, setSelectedCityWoeidState] = useState(selectedCityWoeid);
    
    const citiesSelectorHandler = (value: number) => {
        setSelectedCityWoeidState(currentState => value);
        dispatch(selectCity(value));
    }
    
    useEffect(()=>{
        console.log('selectedCityWoeidState', selectedCityWoeidState);
    })
    return (
        <div className="toolbar">
            <div className="toolbar-start">
                <div className="app-title">
                    Weather App
                </div>
                <div className="city-selection">
                    
                    <select className="selector-input"
                            value={selectedCityWoeidState}
                            onChange={(event) => citiesSelectorHandler(+event.target.value)}
                            >
                        {
                            listOfCities.map((city, index) => <option value={city.woeid} key={index}>{city.name}</option>)
                        }
                    </select>
                </div>
            
            </div>
            <div className="toolbar-end">
                <div className="language-selection">
                
                </div>
            </div>
        </div>
    );
}
