import React from 'react';
import { Helmet } from 'react-helmet';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import DoctorDetailsArea from './DoctorDetailsArea/DoctorDetailsArea';

const DoctorDetails = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Covid-19 Updates - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/covid19-updates" />
                <meta name="description" content="Updates on Covid-19" />
            </Helmet>
            <HomeHeader />
            <CommonPageHeader title="Covid-19 Updates" subtitle="Covid-Details" />
            <DoctorDetailsArea />
            <HomeTwoFooter />
        </>
    );
};

export default DoctorDetails;