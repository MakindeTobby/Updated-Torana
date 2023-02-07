import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';

const ServicesDetails = () => {
    return (
        <>
            <HomeHeader />
            {/* <CommonPageHeader title="Our Services" subtitle="Details" /> */}
            <ServicesDetailsArea />
            <HomeTwoFooter />
        </>
    );
};

export default ServicesDetails;