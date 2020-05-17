import React, {useState, useRef, useEffect} from "react";
import './accordionStatistic.css';
import AccordArrowStatistic from "../../img/png/arrow_accordion.png"
import {Line} from "react-chartjs-2";

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

    const  [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
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
                style={{ maxHeight: `${setHeight}` }}
                className="accordionStatistic__content"
            >
                <Line data={chartData}
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
                    className="accordionStatistic__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default AccordionStatistic;