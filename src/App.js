import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import Authorization from "./components/ authorization/authorization";

const App = () => {

    return (
        <div>
            <div className="wrapper">
                <Authorization/>
                <div className="body">

                </div>
            </div>
        </div>
    );
};

export default App;