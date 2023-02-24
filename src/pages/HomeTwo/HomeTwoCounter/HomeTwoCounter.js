import React from 'react';
import HomeTwoSingleCount from '../../../components/HomeTwoSingleCount/HomeTwoSingleCount';
import CountUp from 'react-countup';
import { FaHandHoldingMedical, FaHandsHelping, FaHeadset, FaSmile } from 'react-icons/fa';

const HomeTwoCounter = () => {
    return (
        <>
            <section className="counter-wraper theme-bg pt-120 pb-175">
                <div className="container">
                    <div className="row justify-content-around">
                        <>
                            <div className="col-lg-2 col-md-3">
                                <div className="single-couter counter-box text-center mb-180">
                                    {/* <img src={`img/counter/counter-icon-${icon}.png`} alt=""/> */}
                                    <FaHandHoldingMedical style={{ fontSize: "5rem", color: 'rgb(225, 36, 84)' }} />
                                    <h1><span className="counter"><CountUp end={140} duration={8} /></span>+</h1>
                                    <h6 className="green-color">Professional Carers</h6>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="col-lg-2 col-md-3">
                                <div className="single-couter counter-box text-center mb-180">
                                    {/* <img src={`img/counter/counter-icon-${icon}.png`} alt=""/> */}
                                    <FaHeadset style={{ fontSize: "5rem", color: 'rgb(225, 36, 84)' }} />
                                    <h1><span className="counter"><CountUp end={399} duration={8} /></span>+</h1>
                                    <h6 className="green-color">Support Rendered</h6>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="col-lg-2 col-md-3">
                                <div className="single-couter counter-box text-center mb-180">
                                    {/* <img src={`img/counter/counter-icon-${icon}.png`} alt=""/> */}
                                    <FaSmile style={{ fontSize: "5rem", color: 'rgb(225, 36, 84)' }} />
                                    <h1><span className="counter"><CountUp end={100} duration={8} /></span>+</h1>
                                    <h6 className="green-color">Happy Clients</h6>
                                </div>
                            </div>
                        </>

                        {/* <HomeTwoSingleCount icon="4" counter="140" subtitle="Professional Carers" />
                        <HomeTwoSingleCount icon="5" counter="399" subtitle="Support Rendered" />
                        <HomeTwoSingleCount icon="6" counter="100" subtitle="Happy Clients" /> */}

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoCounter;