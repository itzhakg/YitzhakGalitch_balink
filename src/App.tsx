import React from 'react';
import logo from './logo.svg';

const App = () => {
  return (
      <>
        <div className="header">
          Weather App
        </div>
        <main className="main">
        
            
            <div className="weather">
                <div className="weather-city">
                    <span className="weather-city__title">
                        <span className="weather-city__name">
                        New York,
                    </span>
                    <span className="weather-city__region">
                        New York
                    </span>
                    </span>
                    
                </div>
                <div className="weather-forecast">
                    <div className="forecast">
                        <div className="day-header">
                            <div className="day-header__title">
                                Today
                            </div>
                            <div className="day-header__icon">
                                <img src="" alt="icon"/>
                            </div>
                            
                        </div>
                        <div className="day-data">
                            <div className="data-row">
                                <div className="data-row__name">
                                
                                </div>
                                <div className="data-row__value">
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="forecast">day2</div>
                    <div className="forecast">day3</div>
                    <div className="forecast">day4</div>
                    <div className="forecast">day5</div>
                </div>
            
            </div>
        </main>
        <footer className="footer">
          footer
        </footer>
      </>
    
  );
}

export { App };
