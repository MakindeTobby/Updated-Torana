import React from "react";
import { Helmet } from "react-helmet";
import CommonPageHeader from "../../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../../components/Shared/Footer";
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter";
// import ServicesOneHiringArea from '../ServicesOne/ServicesOneHiringArea/ServicesOneHiringArea';
import ServicesTwoAbout from "./ServicesTwoAbout/ServicesTwoAbout";
import ServicesTwoArea from "./ServicesTwoArea/ServicesTwoArea";

const ServicesTwo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> NDIS Service Provider, Registered Service Provider NDIS </title>
        <link
          rel="canonical"
          href="https://toranacareaustralia.com.au/services"
        />

        <meta
          name="description"
          content="Torana Care Australia is your trusted ndis service provider. Our support and services are built on the highest principles of Care-Giving. Call now +61 026 109 8099."
        />

        <meta
          name="keywords"
          content="NDIS service provider, Registered service provider NDIS"
        />
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
