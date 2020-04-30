import React, {useState, useRef} from "react";
import './accordionStatistic.css';
import AccordArrowStatistic from "../../img/png/arrow_accordion.png"
import Battery from "../../img/png/batteryBlack.png"

const AccordionStatistic = (props) => {
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
        <div className="accordionStatistic__section">
            <button className={`accordionStatistic ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionStatistic__title"><span>{props.title}</span>
                    <img src={AccordArrowStatistic} alt=""/>
                    <img src={Battery} alt=""/>
                    <span>17 : 05</span>
                    <span>active</span></p>
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordionStatistic__content"
            >
                <div
                    className="accordionStatistic__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default AccordionStatistic;