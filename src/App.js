import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import {BrowserRouter, Route} from "react-router-dom";
import Authorization from "./components/ authorization/authorization";

const App = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Authorization/>
                <div className="body">

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;