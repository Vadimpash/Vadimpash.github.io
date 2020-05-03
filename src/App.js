import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import Authorization from "./components/ authorization/authorization";
import Error from "./components/error/error"
import Registration from "./components/registration/registration";
import Hookahs from "./components/hookahs/hookahs";
import Statistic from "./components/statistic/statistic";
import Tabac from "./components/tabac/tabac";
import History from "./components/history/history";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="auth"><Route exact path='/' component={Authorization}/></div>
                <div className="registration"><Route exact path='/registration' component={Registration}/></div>
                <div className="hookahs"><Route exact path='/hookah' component={Hookahs}/></div>
                <div className="statistic"><Route exact path='/statistic' component={Statistic}/></div>
                <div className="tabac"><Route exact path='/tabac' component={Tabac}/></div>
                <div className="history"><Route exact path='/history' component={History}/></div>
               {/* <Error/>*/}
            </div>
        </BrowserRouter>
    );
};

export default App;