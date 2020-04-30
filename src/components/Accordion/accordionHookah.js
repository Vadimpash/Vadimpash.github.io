import React, {useState, useRef} from "react";
import './accordionHookah.css';
import AccordArrow from "../../img/png/arrow_accordion.png"
import Battery from "../../img/png/batteryBlack.png"
import YellowBattery from "../../img/png/battery.png"


const AccordionHookah = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title"><span>{props.title}</span>
                    <img src={AccordArrow} alt=""/>
                    <img src={Battery} alt=""/>
                    <span>17 : 05</span>
                    <span>active</span>
                </p>

            </button>
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className="accordion__content"
            >
                <div className="accordion__text">
                    <div className="accordionHookahLeft">
                        <div className="wrapAccordHookahLeft"><span>{props.title}</span>
                            <div className="wrapBattery"><span>99%</span>
                                <img src={YellowBattery} alt=""/></div>
                            <button>
                                pause
                            </button>
                        </div>
                    </div>
                    <div className="accordionHookahRight">
                        <div className="wrapSpanHookah">
                            <span>rams tobacco fruit mi</span> <br/>
                            <p>id tobacco: RtFM56898F45</p>
                        </div>
                        <span> <input type="radio" id="radioButton"/></span>
                        <span>6 sessions</span>
                        <span> <input type="radio" id="radioButton"/></span>
                        <span>administrator name</span>
                        <span><input type="radio" id="radioButton"/></span>
                        <span>6:25:36</span>
                        <span><input type="radio" id="radioButton"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionHookah;