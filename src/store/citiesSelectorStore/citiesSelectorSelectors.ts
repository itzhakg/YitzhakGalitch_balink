import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const selectCitiesSelectorState = (state: RootState) => state.citiesSelector;

export const selectSelectedCityWoeid = createSelector(
    selectCitiesSelectorState,
    citiesSelector => citiesSelector.selectedCityWoeid
);

export const selectCitiesList = createSelector(
    selectCitiesSelectorState,
    citiesSelector => citiesSelector.cities
);


