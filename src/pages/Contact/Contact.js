import React from 'react';
import { Helmet } from 'react-helmet';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/contact" />
                <meta name="description" content="Contact us" />
            </Helmet>
            <HomeHeader />
            <CommonPageHeader title="Contact Us" subtitle="Contact" />
            <ContactArea />
            <ContactFormArea />
            <ContactMap />
            <HomeTwoFooter />
        </>
    );
};

export default Contact;