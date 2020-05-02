import React, {useState, useRef} from "react";
import './accordionHistory.css';
import AccordArrowHistory from "../../img/png/arrow_accordion.png"
import downArrowHistory from "../../img/png/arrowDownHistory.png"
import uppArrowHistory from "../../img/png/arrowUppHistory.png"


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
                    <div className="leftContentHistory">
                        <span>{props.title}</span>
                    </div>
                    <div className="middleContentHistory">
                        <div className="wrapMiddleSpanHistory">
                            <span>rams tobacco fruit mix</span> <br/>
                            <span>id tobacco: RtFM56898F45</span>
                        </div>
                        <div className="titleSessionHistory"><span>56 session</span></div>
                        <div className="sessionHistory">
                            <div className="headerSessionHistory"><span>session 1</span></div>
                            <div className="upperHistory">
                                <span>rams tobacco fruit mix</span> <br/>
                                <span>id tobacco: RtFM56898F45</span>
                            </div>
                            <div className="middleHistory">
                                <span>administrator: john do</span> <br/>
                                <span>21/05/2019     15:45:14  -  16:54:12 </span>
                            </div>
                            <div className="bottomHistory">
                                <span>user: tim bergh</span> <br/>
                                <span>cash: 25$</span>
                            </div>
                        </div>
                    </div>
                    <div className="rightContentHistory">
                        <div className="wrapBtnHistory">
                            <button className="btnHistoryOne"><img src={downArrowHistory} alt=""/></button>
                            <button className="btnHistoryTwo"><img src={uppArrowHistory} alt=""/></button>
                        </div>
                        <span>56:24:32</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionHistory;