import React from 'react';
import HomeTwoSingleCount from '../../../components/HomeTwoSingleCount/HomeTwoSingleCount';
import CountUp from 'react-countup';
import { FaHandHoldingMedical, FaHandsHelping, FaHeadset, FaSmile } from 'react-icons/fa';

const HomeTwoAward = () => {
    return (
        <>
            <section className="counter-wraper pt-100 pb-100">
                <div className="container">


                    <div className="row justify-content-around">
                        <>
                            <div className="col-lg-2 col-md-3">
                                <div className=" ">
                                    <img src="img/appoinment/award.jpeg" alt="" width={'100%'} className='rounded rounded-circle' />

                                </div>
                            </div>
                        </>





                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoAward;