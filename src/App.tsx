import React from 'react';
import {WeatherForecast} from "./pages/WeatherForecast";
import {AppToolbar} from "./components/AppToolbar";

const App = () => {
  return (
      <React.Fragment>
        <div className="header">
          <AppToolbar/>
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
