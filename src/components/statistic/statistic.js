import React from "react";
import './statistic.css';
import exitHookah from "../../img/png/exitReg.png"
import arrowNext from "../../img/png/arrowNext.png"
import arrowSort from "../../img/png/arrowSort.png"
import logoReg from "../../img/png/logoReg.png";
import {NavLink} from "react-router-dom";

const Statistic = () => {
    return (
        <div className="statistic">
            <div className="headHookah">
                <div className="HookahWrap"><span className="colorHookahText">restaurant</span><span
                    className="HookahSp1">name</span>
                    <span className="HookahSp2">bergh</span></div>
                <div className="headHookahImg"><img src={logoReg} alt="/"/></div>
            </div>
            <div className="menuStatistic">
                <NavLink exact to="/hookah" activeClassName='active'>active hookahs</NavLink>
                <NavLink exact to="/statistic" activeClassName='active'>statistic</NavLink>
                <NavLink exact to="/tabac" activeClassName='active'>tobacco</NavLink>
                <NavLink exact to="/history" activeClassName='active'>history</NavLink>
            </div>
            <div className="contentStatistic">
                <span>statistic</span>
            </div>
            <div className="footerStatistic">
                <div className="footerPageStatistic">
                    <button className="footerButtonStatistic1"><img src={arrowNext} alt=""/><span>next</span></button>
                    <div className="footerSpanStatistic1"><span>page 1...5</span></div>
                    <button className="footerButtonStatistic2"><img src={arrowSort} alt=""/><span>sort</span></button>
                </div>
                <div className="footerSettingStatistic">
                    <div className="footerEmptyDiv">
                        <span>/</span>
                    </div>
                    <div className="footerSettingSpanStatistic"><span>setting</span></div>
                    <NavLink exact to="/">
                        <button className="footerSettingButtonStatistic"><img src={exitHookah} alt=""/><span>back</span>
                        </button>
                    </NavLink>
                </div>
                <div className="footerTextStatistic"><p>general legal information for the customer and other things general
                    legal <br/>
                    information for the customer and other things</p>
                </div>
            </div>
        </div>
    );
}

export default Statistic;