import React from 'react';
import {WeatherForecast} from "./pages/WeatherForecast";

const App = () => {
  return (
      <React.Fragment>
        <div className="header">
          Weather App
        </div>
        <main className="main">
            <WeatherForecast/>
        </main>
        <footer className="footer">
          footer
        </footer>
      </React.Fragment>
    
  );
}

export { App };
