import React from "react";
import './authorization.css';
import Fon from '../../img/jpg/logoc.jpg'
import Connect from '../../img/png/connect.png'
import {NavLink} from "react-router-dom";

const Authorization = () => {
    return (
        <div className="mainWindow">
            <div className="Fon"><img src={Fon} alt="/"/></div>
            <div className="banner">
                <div className="title">
                    <span>ramsider</span> <br/>
                    <span>electronic hookah</span> <br/>
                    <span>techno-luxury</span>
                </div>
            </div>
            <div className="authorization">
                <form action="#">
                    <div className="titAuth"><span>Authorization</span></div>
                    <div className="formCont">
                        <div className="titLog"><span>login</span></div>
                        <div className="login">
                            <label htmlFor="login"> </label>
                            <input type="text" id="login" placeholder="administrator"/>
                        </div>
                        <div className="titPass"><span>password</span></div>
                        <div className="password">
                            <label htmlFor="password"> </label>
                            <input type="password" id="pass" placeholder="xxxxxx"/>
                        </div>
                        <div className="add"><NavLink exact to="/registration"
                        ><span>registration <br/> add new user</span></NavLink>
                           <NavLink exact to="/hookah"><button>enter</button></NavLink>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mainFooter">
                <img src={Connect} alt="/"/>
            </div>
        </div>
    );
}

export default Authorization;