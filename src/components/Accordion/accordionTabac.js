import React, {useState, useRef} from "react";
import './accordionTabac.css';
import AccordArrow from "../../img/png/arrow_accordion.png"
import qrCode from "../../img/png/qrCode.png"

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
                <p className="accordionTabac__title">
                    <div className="wrapSpanTabac">
                        <span>rams tobacco fruit mix</span>
                        <span>id tobacco: RtFM56898F45</span>
                    </div>
                    <div className="middleSpanTabac">
                        <span>05/19 - 06/20</span>
                    </div>
                    <div className="wrapStatusTabac">
                        <span>in stock</span>
                        <img src={AccordArrow} alt=""/>
                    </div>
                </p>
            </button>
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className="accordionTabac__content"
            >
                <div className="accordionTabac__text">
                    <div className="accordionTabacLeft">
                        <div className="wrapSpanTabacLeft">
                            <span>rams tobacco fruit mix</span>
                            <span>id tobacco: RtFM56898F45</span>
                            <span>05/19 - 06/20</span>
                        </div>
                        <div className="wrapAdminSpanTabac">
                            <span>admin name</span>
                            <span>used 25/12/2019    15:35</span>
                        </div>
                        <div className="spanTabac">
                            <span>Tim bergh</span>
                        </div>
                    </div>
                    <div className="accordionTabacRight">
                        <span><img src={qrCode} alt=""/></span>
                        <div className="accordionSpanTabacRight">
                            <span>rams tobacco fruit mix</span> <br/>
                            <button>order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionTabac;