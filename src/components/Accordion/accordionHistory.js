import React, {useState, useRef} from "react";
import './accordionHistory.css';
import AccordArrowHistory from "../../img/png/arrow_accordion.png"


const AccordionHistory = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordionHistory__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordionHistory__icon" : "accordionHistory__icon rotateHistory"
        );
    }
    return (
        <div className="accordionHistory__section">
            <button className={`accordionHistory ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionHistory__title">{props.title}</p>
                <img src={AccordArrowHistory} alt=""/>
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordionHistory__content"
            >
                <div
                    className="accordionHistory__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default AccordionHistory;