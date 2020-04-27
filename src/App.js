import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import Authorization from "./components/ authorization/authorization";
import Error from "./components/error/error"
import Registration from "./components/registration/registration";
import Hookahs from "./components/body/hookahs/hookahs";
import Statistic from "./components/body/statistic/statistic";
import Tabac from "./components/body/tabac/tabac";
import History from "./components/body/history/history";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="auth"><Route exact path='/' component={Authorization}/></div>
                <div className="registration"><Route exact path='/registration' component={Registration}/></div>
                <Error/>
                <Hookahs/>
                <Statistic/>
                <Tabac/>
                <History/>
            </div>
        </BrowserRouter>
    );
};

export default App;