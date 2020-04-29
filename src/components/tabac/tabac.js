import React from "react";
import './tabac.css';
import logoTab from "../../img/png/logoReg.png";
import exitHookah from "../../img/png/exitReg.png"
import arrowNext from "../../img/png/arrowNext.png"
import arrowSort from "../../img/png/arrowSort.png"
import {NavLink} from "react-router-dom";
import AccordionTabac from "../Accordion/accordionTabac";


const Tabac = () => {
    return (
        <div className="tabac">
            <div className="headTabac">
                <div className="TabacWrap"><span className="colorTabacText">restaurant</span><span
                    className="TabacSp1">name</span>
                    <span className="TabacSp2">bergh</span></div>
                <div className="headTabacImg"><img src={logoTab} alt="/"/></div>
            </div>
            <div className="menuTabac">
                <NavLink exact to="/hookah" activeClassName='active'>active hookahs</NavLink>
                <NavLink exact to="/statistic" activeClassName='active'>statistic</NavLink>
                <NavLink exact to="/tabac" activeClassName='active'>tobacco</NavLink>
                <NavLink exact to="/history" activeClassName='active'>history</NavLink>
            </div>
            <div className="contentTabac">
                <AccordionTabac title="Ramsider 01" content="tabac"/>
                <AccordionTabac title="Ramsider 02" content="tabac"/>
                <AccordionTabac title="Ramsider 03" content="tabac"/>
                <AccordionTabac title="Ramsider 04" content="tabac"/>
                <AccordionTabac title="Ramsider 05" content="tabac"/>
                <AccordionTabac title="Ramsider 06" content="tabac"/>
                <AccordionTabac title="Ramsider 07" content="tabac"/>
                <AccordionTabac title="Ramsider 08" content="tabac"/>
            </div>
            <div className="footerTabac">
                <div className="footerPageTabac">
                    <button className="footerButtonTabac1"><img src={arrowNext} alt=""/><span>next</span></button>
                    <div className="footerSpanTabac1"><span>page 1...5</span></div>
                    <button className="footerButtonTabac2"><img src={arrowSort} alt=""/><span>sort</span></button>
                </div>
                <div className="footerSettingTabac">
                    <div className="footerEmptyDiv">
                        <span>/</span>
                    </div>
                    <div className="footerSettingSpanTabac"><span>setting</span></div>
                    <NavLink exact to="/">
                        <button className="footerSettingButtonTabac"><img src={exitHookah} alt=""/><span>back</span>
                        </button>
                    </NavLink>
                </div>
                <div className="footerTextTabac"><p>general legal information for the customer and other things general
                    legal <br/>
                    information for the customer and other things</p>
                </div>
            </div>
        </div>
    );
}

export default Tabac;