import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import Authorization from "./components/ authorization/authorization";
import Error from "./components/error/error"
import Registration from "./components/registration/registration";
import Body from "./components/body/body";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="auth"><Route exact path='/' component={Authorization}/></div>
                <div className="registration"><Route exact path='/registration' component={Registration}/></div>
                <Route path='/body' component={Body}/>
                <Error/>
            </div>
        </BrowserRouter>
    );
};

export default App;