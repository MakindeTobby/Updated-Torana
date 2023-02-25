import React from 'react';
import HomeTwoAbout from './HomeTwoAbout/HomeTwoAbout';
import HomeTwoAppoinmentArea from './HomeTwoAppoinmentArea/HomeTwoAppoinmentArea';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeroSection from './HomeTwoHeader/HomeTwoHeroSection';
import HomeTwoMissionArea from './HomeTwoMissionArea/HomeTwoMissionArea';
import HomeTwoNavBar from './HomeTwoNavBar/HomeTwoNavBar';
import HomeTwoServicesArea from './HomeTwoServicesArea/HomeTwoServicesArea';

const HomeTwo = () => {
    return (
        <>
            <HomeTwoNavBar />
            <HomeTwoHeroSection />
            <HomeTwoAbout />
            <HomeTwoMissionArea />
            <HomeTwoServicesArea />
            <HomeTwoCounter />
            <HomeTwoAppoinmentArea />
            <HomeTwoBlogs />
            <HomeTwoFooter />
        </>
    );
};

export default HomeTwo;