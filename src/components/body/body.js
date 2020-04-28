import React from "react";
import "./body.css";
import Hookahs from "./hookahs/hookahs";
import Statistic from "./statistic/statistic";
import Tabac from "./tabac/tabac";
import History from "./history/history";
import Authorization from "../ authorization/authorization";
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "../registration/registration";

const Body = () => {
    return (
        <BrowserRouter>
        <div className="body">
            <div className="auth"><Route exact path='/' component={Authorization}/></div>
            <div className="hookahs"><Route exact path='/body' component={Hookahs}/></div>
            <div className="registration"><Route exact path='/registration' component={Registration}/></div>
            <Statistic/>
            <Tabac/>
            <History/>
        </div>
        </BrowserRouter>
    );
}

export default Body;