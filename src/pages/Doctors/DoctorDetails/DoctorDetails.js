import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import DoctorDetailsArea from './DoctorDetailsArea/DoctorDetailsArea';

const DoctorDetails = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Covid-19 Updates" subtitle="Covid-Details" />
            <DoctorDetailsArea />
            <HomeTwoFooter />
        </>
    );
};

export default DoctorDetails;