import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";
import {AppToolbar} from "./components/AppToolbar";
import {MainRoutes} from "./routing/MainRoutes";

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div className="header">
                    <AppToolbar/>
                </div>
                <main className="main">
                    <div className="main-content">
                        <div className="main-navbar">
                            <NavLink to="/" className="main-navbar-tab main-navbar__start">
                                Forecast
                            </NavLink>
                            <NavLink to="/sources" className="main-navbar-tab main-navbar__end">
                                Sources
                            </NavLink>
                        
                        </div>
                        <div className="main-content-view">
                            <MainRoutes/>
                        </div>
                    
                    </div>
                </main>
                <footer className="footer">
                    <div className="copyright">
                        &copy; Yitzhak Galitch
                    </div>
                </footer>
            </BrowserRouter>
        </React.Fragment>
    );
}

export {App};
