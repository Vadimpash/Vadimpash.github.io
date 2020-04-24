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


const App = () => {

    return (
        <div>
            <div className="wrapper">
                <Authorization/>
                <div className="body">
                    <Error/>
                    <Registration/>
                    <Hookahs/>
                    <Statistic/>
                    <Tabac/>
                    <History/>
                </div>
            </div>
        </div>
    );
};

export default App;