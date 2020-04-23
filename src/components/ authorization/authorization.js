import React from "react";
import './authorization.css';
import Fon from '../../img/jpg/fon1.jpg'
import logo from '../../img/png/logo.png'
import Connect from '../../img/png/connect.png'
import {NavLink} from "react-router-dom";

const Authorization = () => {
    return (
        <div className="mainWindow">
            <div className="Fon"><img src={Fon} alt="/"/></div>
            <div className="authContent">
                <div className="banner">
                    <img src={logo} alt="/"/>
                    <div className="title">
                        <h1>RAMSIDER</h1>
                        <h1>ELECTRONIC HOOKAH</h1>
                        <h1>TECHNO-LUXURY</h1>
                    </div>
                </div>
                <div className="authorization">
                    <form action="#">
                        <div className="formLabel"><span className="titLabel">authorization</span></div>
                        <div className="login">
                            <span className="titLabel">login</span>
                            <label htmlFor="login"> </label>
                            <input type="text" id="login" placeholder="Enter your username"/>
                        </div>
                        <div className="login">
                            <span className="titLabel">password</span>
                            <label htmlFor="login"> </label>
                            <input type="text" id="login" placeholder="Enter your password"/>
                        </div>
                        <div className="formButton">
                            <button>add new user registration</button>
                            <button>enter</button>
                        </div>
                    </form>
                </div>
                <div className="mainFooter">
                    <img src={Connect} alt="/"/>
                    <h1>CONNECT</h1>
                    <span>with hookah</span>
                </div>
            </div>
        </div>
    );
}

export default Authorization;