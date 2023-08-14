import React from 'react';
import { Helmet } from 'react-helmet';
import HomeTwoAbout from './HomeTwoAbout/HomeTwoAbout';
import HomeTwoAppoinmentArea from './HomeTwoAppoinmentArea/HomeTwoAppoinmentArea';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeroSection from './HomeTwoHeader/HomeTwoHeroSection';
import HomeTwoMissionArea from './HomeTwoMissionArea/HomeTwoMissionArea';
import HomeTwoNavBar from './HomeTwoNavBar/HomeTwoNavBar';
import HomeTwoServicesArea from './HomeTwoServicesArea/HomeTwoServicesArea';
import HomeTwoAward from './HomeTwoAward/HomeTwoAward';

const HomeTwo = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.org.au" />
                <meta name="description" content="Welcome" />
            </Helmet>
            <HomeTwoNavBar />
            <HomeTwoHeroSection />
            <HomeTwoAbout />
            <HomeTwoMissionArea />
            <HomeTwoServicesArea />
            <HomeTwoCounter />
            <HomeTwoAppoinmentArea />
            <HomeTwoAward />
            <HomeTwoBlogs />
            <HomeTwoFooter />
        </>
    );
};

export default HomeTwo;