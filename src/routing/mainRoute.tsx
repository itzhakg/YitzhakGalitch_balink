import React from 'react';
import {Route, Routes} from "react-router-dom";
import {WeatherForecast} from "../pages/WeatherForecast";
import {ForecastSources} from "../pages/ForecastSources";


const MAIN_ROUTES = {
    root: {
        path: '/',
        component: <WeatherForecast/>
    },
    details: {
        path: '/sources',
        component: <ForecastSources/>
    }
    
}

export type MainRoutes = typeof MAIN_ROUTES;

export const getMainRoutes = (): MainRoutes => {
    return Object.assign({}, MAIN_ROUTES);
}

export const MainRoutes = () => {
    const routes = getMainRoutes();
    return (
        <Routes>
            <Route path={routes.root.path} element={routes.root.component}/>
            <Route path={routes.details.path} element={routes.details.component}/>
        </Routes>
    );
}
