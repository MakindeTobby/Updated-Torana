import React from 'react';
import { Helmet } from 'react-helmet';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
// import ServicesOneHiringArea from '../ServicesOne/ServicesOneHiringArea/ServicesOneHiringArea';
import ServicesTwoAbout from './ServicesTwoAbout/ServicesTwoAbout';
import ServicesTwoArea from './ServicesTwoArea/ServicesTwoArea';

const ServicesTwo = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our services - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.org.au/services" />
                <meta name="description" content="Our Services" />
            </Helmet>
            <HomeHeader />
            <CommonPageHeader title="Our Services" subtitle="Services" />
            <ServicesTwoAbout />
            <ServicesTwoArea />
            {/* <ServicesOneHiringArea /> */}
            <HomeTwoFooter />
            {/* <Footer/> */}
        </>
    );
};

export default ServicesTwo;