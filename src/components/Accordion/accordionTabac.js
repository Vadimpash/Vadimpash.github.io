import React, {useState, useRef} from "react";
import './accordionTabac.css';
import AccordArrowTabac from "../../img/png/arrow_accordion.png"
import Battery from "../../img/png/batteryBlack.png"

const AccordionTabac = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "activeTabac" : "");
        setHeightState(
            setActive === "activeTabac" ? "0px" : `${content.current.scrollHeight}px`
        );
    }
    return (
        <div className="accordionTabac__section">
            <button className={`accordionTabac ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionTabac__title"><span>{props.title}</span>
                    <img src={AccordArrowTabac} alt=""/>
                    <img src={Battery} alt=""/>
                    <span>17 : 05</span>
                    <span>active</span></p>
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordionTabac__content"
            >
                <div
                    className="accordionTabac__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default AccordionTabac;