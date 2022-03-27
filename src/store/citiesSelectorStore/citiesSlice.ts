import {createSlice} from "@reduxjs/toolkit";

export interface CitySelector {
    name: string;
    woeid: number;
}

export interface CitiesSelectorState {
    selectedCityWoeid: number;
    cities: CitySelector [];
    
}

const citiesSelectorInitialState: CitiesSelectorState = {
    selectedCityWoeid: 2459115,
    cities: [
        {
            name: "New York",
            woeid: 2459115
        },
        {
            name: "Los Angeles",
            woeid: 2442047
        },
        {
            name: "Marseille",
            woeid: 610264
        },
        {
            name: "Barcelona",
            woeid: 753692
        },
        {
            name: "Rome",
            woeid: 721943
        }
    ]
}

export const citiesSelectorSlice = createSlice({
    name: 'citiesSelector',
    initialState: citiesSelectorInitialState,
    reducers: {
        selectCity: (state, action) => {
            if(action.payload) {
                state.selectedCityWoeid = action.payload;
            }
        }
    }
});

export const { selectCity } = citiesSelectorSlice.actions;
