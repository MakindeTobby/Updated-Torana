import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import ContentArea from './contentArea';

const AppreciateYou = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Appreciate You - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/appreciate-you" />
            </Helmet>
            <HomeHeader />
            {/* <CommonPageHeader title="Blog Details" subtitle="Details" /> */}
            <ContentArea />
            <HomeTwoFooter />
        </>
    );
};

export default AppreciateYou;