import React from 'react';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import ContentArea from './contentArea';

const PositiveThinking = () => {
    return (
        <>
            <HomeHeader />
            {/* <CommonPageHeader title="Blog Details" subtitle="Details" /> */}
            <ContentArea />
            <HomeTwoFooter />
        </>
    );
};

export default PositiveThinking;