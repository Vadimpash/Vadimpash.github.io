import React, {useState, useRef, useEffect} from "react";
import './accordionStatisticT.css';
import AccordArrowStatistic from "../../img/png/arrow_accordion.png"
import {Line} from "react-chartjs-2";
import arrowStatisticDown from "../../img/png/arrowStatisticDown.png";

const AccordionStatisticT = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    const  [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: "s",
                    data: [72, 99, 52, 76, 89],
                    backgroundColor: ["#beb53f"],
                    borderWidth: 10
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])


    return (
        <div className="accordionStatisticT__section">
            <button className={`accordionStatisticT ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionStatisticT__title"><span>{props.title}</span>
                    <img src={AccordArrowStatistic} alt=""/>
                </p>
            </button>
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className="accordionStatisticT__content"
            >
                <Line  data={chartData}
                       options={{
                           responsive: true,
                           title: { text: "sometext", display: true },
                           scales: {
                               yAxes: [
                                   {
                                       ticks: {
                                           autoSkip: true,
                                           maxTicksLimit: 10,
                                           beginAtZero: true
                                       },
                                       gridLines: {
                                           display: false
                                       }
                                   }
                               ],
                               xAxes: [
                                   {
                                       gridLines: {
                                           display: false
                                       }
                                   }
                               ]
                           }
                       }}/>
                <div
                    className="accordionStatisticT__text"
                    dangerouslySetInnerHTML={{__html: props.content}}
                />

                <div className="StatisticT">
                    <div className="coupleStatisticT1">
                        <span>apple</span>
                        <span>152</span>
                        <div className="BIT1">
                            <button>week<img src={arrowStatisticDown} alt="/"/></button>
                        </div>
                    </div>
                    <div className="coupleStatisticT2">
                        <span>mint</span>
                        <span>140</span>
                        <div className="BIT2">
                            <button>week<img src={arrowStatisticDown} alt="/"/></button>
                        </div>
                    </div>
                    <div className="coupleStatisticT3">
                        <span>raspberry</span>
                        <span>101</span>
                        <div className="BIT3">
                            <button>week<img src={arrowStatisticDown} alt="/"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionStatisticT;