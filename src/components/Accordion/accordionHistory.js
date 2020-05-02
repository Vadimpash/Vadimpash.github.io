import React, {useState, useRef} from "react";
import './accordionHistory.css';
import AccordArrowHistory from "../../img/png/arrow_accordion.png"


const AccordionHistory = (props) => {
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
        <div className="accordionHistory__section">
            <button className={`accordionHistory ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionHistory__title"><span>{props.title}</span>
                    <span><img src={AccordArrowHistory} alt=""/></span>
                    <span>56:24:32</span>
                    <span>1258$</span></p>
            </button>
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className="accordionHistory__content"
            >
                <div className="accordionHistory__text">
                    <span>History</span>
                </div>
            </div>
        </div>
    );
}

export default AccordionHistory;