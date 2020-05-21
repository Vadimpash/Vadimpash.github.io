import React, {useState, useRef, useEffect} from "react";
import './accordionStatistic.css';
import AccordArrowStatistic from "../../img/png/arrow_accordion.png"
import {Line} from "react-chartjs-2";
import arrowStatisticDown from "../../img/png/arrowStatisticDown.png"


const AccordionStatistic = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: ['-', '-', '-', '-', '-'],
            datasets: [
                {
                    label: "Some text",
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: ["#e5710f"],
                    borderWidth: 10
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="accordionStatistic__section">
            <button className={`accordionStatistic ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionStatistic__title"><span>{props.title}</span>
                    <img src={AccordArrowStatistic} alt=""/>
                </p>
            </button>
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className="accordionStatistic__content"
            >
                <Line data={chartData}
                      options={{
                          responsive: true,
                          title: {text: "sometext", display: true},
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
                    className="accordionStatistic__text"
                    dangerouslySetInnerHTML={{__html: props.content}}
                />

                <div className="Statistic">
                    <div className="coupleStatistic1">
                        <span>profit</span>
                        <span>3540</span>
                        <div className="BI1">
                            <button>week<img src={arrowStatisticDown} alt="/"/></button>
                        </div>

                    </div>
                    <div className="coupleStatistic2">
                        <span>visitors</span>
                        <span>1547</span>
                        <div className="BI2">
                            <button>week<img src={arrowStatisticDown} alt="/"/></button>
                        </div>
                    </div>
                    <div className="coupleStatistic3">
                        <span>sessions</span>
                        <span>1805</span>
                        <div className="BI3">
                            <button>week<img src={arrowStatisticDown} alt="/"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionStatistic;