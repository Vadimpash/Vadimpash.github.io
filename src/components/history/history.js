import React from "react";
import './history.css';
import logoHist from "../../img/png/logoReg.png";
import exitHookah from "../../img/png/exitReg.png"
import arrowNext from "../../img/png/arrowNext.png"
import arrowSort from "../../img/png/arrowSort.png"
import AccordionHistory from "../Accordion/accordionHistory";
import {NavLink} from "react-router-dom";


const History = () => {
    return (
        <div className="history">
            <div className="headHistory">
                <div className="HistoryWrap"><span className="colorHistoryText">restaurant</span><span
                    className="HistorySp1">name</span>
                    <span className="HistorySp2">bergh</span></div>
                <div className="headHistoryImg"><img src={logoHist} alt="/"/></div>
            </div>
            <div className="menuHistory">
                <NavLink exact to="/hookah" activeClassName='active' >active hookahs</NavLink>
                <NavLink exact to="/statistic" activeClassName='active'>statistic</NavLink>
                <NavLink exact to="/tabac" activeClassName='active'>tobacco</NavLink>
                <NavLink exact to="/history" activeClassName='active'>history</NavLink>
            </div>
            <div className="contentHistory">
                <AccordionHistory title="Ramsider 01"/>
                <AccordionHistory title="Ramsider 02"/>
                <AccordionHistory title="Ramsider 03"/>
            </div>
            <div className="footerHistory">
                <div className="footerPageHistory">
                    <button className="footerButtonHistory1"><img src={arrowNext} alt=""/><span>next</span></button>
                    <div className="footerSpanHistory1"><span>page 1...5</span></div>
                    <button className="footerButtonHistory2"><img src={arrowSort} alt=""/><span>sort</span></button>
                </div>
                <div className="footerSettingHistory">
                    <div className="footerEmptyDiv">
                        <span>/</span>
                    </div>
                    <div className="footerSettingSpanHistory"><NavLink exact to="/regSetting"><span>setting</span></NavLink></div>
                   <div className="BackButton"><NavLink exact to="/">
                       <button className="footerSettingButtonHistory"><img src={exitHookah} alt=""/><span>back</span>
                       </button>
                   </NavLink></div>
                </div>
                <div className="footerTextHistory"><p>general legal information for the customer and other things general
                    legal <br/>
                    information for the customer and other things</p>
                </div>
            </div>
        </div>
    );
}

export default History;