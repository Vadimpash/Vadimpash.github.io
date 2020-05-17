import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import Authorization from "./components/ authorization/authorization";
import Registration from "./components/registration/registration";
import Hookahs from "./components/hookahs/hookahs";
import Statistic from "./components/statistic/statistic";
import Tabac from "./components/tabac/tabac";
import History from "./components/history/history";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
            <div className="wrapper">
                <div className="auth"><Route exact path='/' render={() => <Authorization/>}/></div>
                <div className="registration"><Route exact path='/registration'
                                                     render={() => <Registration stateStorage={props.stateStorage}
                                                                                 addNewAdmin={props.addNewAdmin}/>}/>
                </div>
                <div className="hookahs"><Route exact path='/hookah' render={() => <Hookahs/>}/></div>
                <div className="statistic"><Route exact path='/statistic' render={() => <Statistic/>}/></div>
                <div className="tabac"><Route exact path='/tabac' render={() => <Tabac/>}/></div>
                <div className="history"><Route exact path='/history' render={() => <History/>}/></div>
                {/* <Error/>*/}
            </div>
    );
};

export default App;