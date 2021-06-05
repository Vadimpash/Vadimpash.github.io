import React, {Component} from "react";
import './authentication.css';
import Fon from '../../img/jpg/logoc.jpg'
import Connect from '../../img/png/connect.png'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            login: false,
            store: null
        }
        this.stateLevels = {
            id: null,
            name: null,
            value: null,
            sorted: true,
            unsorted: true,
            empty: true
        }
    }

    registration() {

    }

    login() {
        console.warn("state", this.state)
        fetch("https://immense-harbor-02534.herokuapp.com/api/users/authentication", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            response.text().then(function (text) {
                console.warn("t", text);
                localStorage.setItem('login', text);
                if (response.ok) {
                    window.location.assign('http://localhost:3000/#/hookah');
                } else {
                    alert("CHECK YOUR LOGIN/PASSWORD")
                }
            });
        });
        sleep(500).then(() => {
            fetch("https://immense-harbor-02534.herokuapp.com/api/accountLevels", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;',
                    'Authorization': 'Bearer ' + localStorage.getItem('login'),
                },
            }).then((response) => {
                response.text().then(function (text) {
                    console.warn("r", text);
                });
            });
        });
    }

    render() {
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
                        <div className="titAuth"><span>Authentication</span></div>
                        <div className="formCont">
                            <div className="titLog"><span>login</span></div>
                            <div className="login">
                                <label htmlFor="login"> </label>
                                <input type="text" placeholder="administrator"
                                       onChange={(event) => this.setState({email: event.target.value})}/>
                            </div>
                            <div className="titPass"><span>password</span></div>
                            <div className="password">
                                <label htmlFor="password"> </label>
                                <input type="password" placeholder="xxxxxx"
                                       onChange={(event) => this.setState({password: event.target.value})}/>
                            </div>
                            <div className="add">
                                <button onClick={() => {
                                    this.registration()
                                }} className="b1"><span>registration <br/> add new user</span></button>
                                <button className="b2"
                                        onClick={() => {
                                            this.login()
                                        }}>enter
                                </button>
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
}

export default Authentication;