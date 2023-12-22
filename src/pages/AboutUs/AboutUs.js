import React from 'react';
import { Helmet } from 'react-helmet';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeOurTeam from '../Home/Home/HomeOurTeam/HomeOurTeam';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoNavBar from '../HomeTwo/HomeTwoNavBar/HomeTwoNavBar';
import AboutAnalysis from './AboutAnalysis/AboutAnalysis';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import AboutArea from './AboutArea/AboutArea';
import AboutCounter from './AboutCounter/AboutCounter';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';

const AboutUs = () => {
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>About us - Torana Care Australia</title>
            <link rel="canonical" href="https://toranacareaustralia.com.au/about" />
            <meta name="description" content="All you need to know about Torana" />
         </Helmet>
         <HomeHeader />
         {/* <HomeTwoNavBar /> */}
         <CommonPageHeader title="About Us" subtitle="About" />
         <AboutArea />
         {/* <AboutCounter /> */}
         <AboutAppoinment />
         {/* <HomeOurTeam /> */}
         {/* <HomeFact /> */}
         {/* <AboutTestimonial /> */}
         {/* <AboutAnalysis /> */}
         {/* <Footer /> */}
         <HomeTwoFooter />
      </>
   );
};

export default AboutUs;