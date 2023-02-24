import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';

const ThankYou = () => {
    return (
        <>
            {/* <HomeHeader /> */}
            {/* <CommonPageHeader title="Page not Found" subtitle="404 Not Found" /> */}

            <div className='pt-180 pb-180'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 offset-xl-2'>
                            <div className='error-404 not-found mb-20'>
                                <div className='error-404-content text-center'>
                                    <h1 className='error-404-title'> Thank You</h1>
                                    <p className='err-text fw-2'>for your appointment request. Kindly anticipate a call from one of our team members who will be pleased to assist you. </p>
                                    <div className='mt-4'><Link to="/" className="primary_btn btn-icon ml-0"><span>+</span>BACK TO HOME</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <HomeTwoFooter /> */}
        </>
    );
};

export default ThankYou;