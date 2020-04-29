import React, {useState, useRef} from "react";
import './accordionTabac.css';
import AccordArrowTabac from "../../img/png/arrow_accordion.png"


const AccordionTabac = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordionTabac__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "activeTabac" : "");
        setHeightState(
            setActive === "activeTabac" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "activeTabac" ? "accordionTabac__icon" : "accordionTabac__icon rotateTabac"
        );
    }
    return (
        <div className="accordionTabac__section">
            <button className={`accordionTabac ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionTabac__title">{props.title}</p>
                <img src={AccordArrowTabac} alt=""/>
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