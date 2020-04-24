import React from "react";
import './registration.css';


const Registration = () => {
    return (
        <div className="reg">
            <div className="headTit">
                <span></span>
                <span></span>
                <img src="/" alt="/"/>
            </div>
            <div className="set">
                <h1></h1>
                <span></span><button></button>
                <span></span><button></button>
                <span></span><button></button>
                <span></span><button></button>
            </div>
            <div className="add">
                <form action="#">
                    <div className="titAuto"><span>Ad admin</span></div>
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
                        <div className="add"><span>status</span>
                            <button></button>
                            <button></button></div>
                    </div>
                </form>
            </div>
            <div className="foot">
                <button></button>
                <p></p>
            </div>

        </div>
    );
}

export default Registration;