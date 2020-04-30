import React from "react";
import './hookahs.css';
import logoReg from "../../img/png/logoReg.png";
import exitHookah from "../../img/png/exitReg.png"
import arrowNext from "../../img/png/arrowNext.png"
import arrowSort from "../../img/png/arrowSort.png"
import AccordionHookah from "../Accordion/accordionHookah";
import {NavLink} from "react-router-dom";


const Hookahs = () => {
    return (
        <div className="hookah">
            <div className="headHookah">
                <div className="HookahWrap"><span className="colorHookahText">restaurant</span><span
                    className="HookahSp1">name</span>
                    <span className="HookahSp2">bergh</span></div>
                <div className="headHookahImg"><img src={logoReg} alt="/"/></div>
            </div>
            <div className="menuHookah">
                <NavLink exact to="/hookah" activeClassName='active'>active hookahs</NavLink>
                <NavLink exact to="/statistic" activeClassName='active'>statistic</NavLink>
                <NavLink exact to="/tabac" activeClassName='active'>tobacco</NavLink>
                <NavLink exact to="/history" activeClassName='active'>history</NavLink>
            </div>
            <div className="contentHookah">
                <AccordionHookah title="Ramsider 01" />
                <AccordionHookah title="Ramsider 02" />
                <AccordionHookah title="Ramsider 03" />
                <AccordionHookah title="Ramsider 04" />
                <AccordionHookah title="Ramsider 05" />
                <AccordionHookah title="Ramsider 06" />
                <AccordionHookah title="Ramsider 07" />
                <AccordionHookah title="Ramsider 08" />
            </div>
            <div className="footerHookah">
                <div className="footerPageHookah">
                    <button className="footerButtonHookah1"><img src={arrowNext} alt=""/><span>next</span></button>
                    <div className="footerSpanHookah1"><span>page 1...5</span></div>
                    <button className="footerButtonHookah2"><img src={arrowSort} alt=""/><span>sort</span></button>
                </div>
                <div className="footerSettingHookah">
                    <div className="footerEmptyDiv">
                        <span>/</span>
                    </div>
                    <div className="footerSettingSpanHookah"><span>setting</span></div>
                    <NavLink exact to="/">
                        <button className="footerSettingButtonHookah"><img src={exitHookah} alt=""/><span>back</span>
                        </button>
                    </NavLink>
                </div>
                <div className="footerTextHookah"><p>general legal information for the customer and other things general
                    legal <br/>
                    information for the customer and other things</p>
                </div>
            </div>
        </div>
    );
}

export default Hookahs;