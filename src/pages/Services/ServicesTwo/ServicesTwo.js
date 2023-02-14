import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import ServicesTwoAbout from './ServicesTwoAbout/ServicesTwoAbout';
import ServicesTwoArea from './ServicesTwoArea/ServicesTwoArea';

const ServicesTwo = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Our Services" subtitle="Services" />
            <ServicesTwoAbout />
            <ServicesTwoArea />
            <HomeTwoFooter />
        </>
    );
};

export default ServicesTwo;