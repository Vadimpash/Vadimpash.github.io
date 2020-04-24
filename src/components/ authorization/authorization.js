import React from "react";
import './authorization.css';
import Fon from '../../img/jpg/logoc.jpg'
import Connect from '../../img/png/connect.png'


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
                        <div className="titAuto"><span>Authorization</span></div>
                        <div className="formCont">
                            <div className="titLog"> <span>login</span></div>
                            <div className="login">
                                <label htmlFor="login"> </label>
                                <input type="text" id="login" placeholder="administrator"/>
                            </div>
                            <div className="titPass"><span>password</span></div>
                            <div className="password">
                                <label htmlFor="password"> </label>
                                <input type="password" id="pass" placeholder="xxxxxx"/>
                            </div>
                            <div className="add"><span>add new user <br/> registration</span><button>enter </button></div>
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