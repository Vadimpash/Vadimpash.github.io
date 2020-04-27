import React from "react";
import './registration.css';
import logoReg from "../../img/png/logoReg.png"
import exitReg from "../../img/png/exitReg.png"
import {NavLink} from "react-router-dom";

const Registration = () => {
    return (
        <div className="reg">
            <div className="headTit">
                <div className="titWrap"><span className="colorText">restaurant</span><span className="sp2">name</span>
                    <span className="sp3">bergh</span></div>
                <div className="logRegImg"><img src={logoReg} alt="/"/></div>

            </div>
            <div className="set">
                <div className="SetTit"><h2>settings</h2></div>
                <h1>administrators</h1>
                <div className="setCont">
                    <span>benjamin lion</span>
                    <span><input type="radio" id="radioButton"/>full access</span>
                    <span>henry harison</span>
                    <span><input type="radio" id="radioButton"/>staff</span>
                    <span>evelyn li</span>
                    <span><input type="radio" id="radioButton"/>staff</span>
                    <span>olivia watson</span>
                    <span><input type="radio" id="radioButton"/>staff</span></div>
            </div>
            <div className="addRegMain">
                <div className="titReg"><span>Add admin</span></div>
                <form action="#">
                    <div className="RegCont">
                        <div className="titLogReg"><span>login</span></div>
                        <div className="login">
                            <label htmlFor="login"> </label>
                            <input type="text" id="login" placeholder="administrator"/>
                        </div>
                        <div className="titPassReg"><span>password</span></div>
                        <div className="password">
                            <label htmlFor="password"> </label>
                            <input type="password" id="pass" placeholder="xxxxxx"/>
                        </div>
                        <div className="addReg"><span>status</span>
                            <span><input type="radio" id="radioButton"/>staff</span>
                            <span><input type="radio" id="radioButton"/>full access</span></div>
                    </div>
                    <button className="buttonReg"><span>add admin</span></button>
                </form>
            </div>
            <div className="yellowStrip"><span>/</span></div>
            <div className="foot">
                <NavLink to="/">
                    <button><img src={exitReg} alt="/"/><span>back</span></button>
                </NavLink>
                <p>general legal information for the customer and other thing general legal <br/> information for the
                    customer and other things</p>
            </div>

        </div>
    );
}

export default Registration;