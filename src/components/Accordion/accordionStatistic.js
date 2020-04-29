import React, {useState, useRef} from "react";
import './accordionStatistic.css';
import AccordArrowStatistic from "../../img/png/arrow_accordion.png"


const AccordionStatistic = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordionStatistic__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordionStatistic__icon" : "accordionStatistic__icon rotateStatistic"
        );
    }
    return (
        <div className="accordionStatistic__section">
            <button className={`accordionStatistic ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionStatistic__title">{props.title}</p>
                <img src={AccordArrowStatistic} alt=""/>
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