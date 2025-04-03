import React from "react";
import { Helmet } from "react-helmet";
import HomeTwoAbout from "./HomeTwoAbout/HomeTwoAbout";
import HomeTwoAppoinmentArea from "./HomeTwoAppoinmentArea/HomeTwoAppoinmentArea";
import HomeTwoBlogs from "./HomeTwoBlogs/HomeTwoBlogs";
import HomeTwoCounter from "./HomeTwoCounter/HomeTwoCounter";
import HomeTwoFooter from "./HomeTwoFooter/HomeTwoFooter";
import HomeTwoHeroSection from "./HomeTwoHeader/HomeTwoHeroSection";
import HomeTwoMissionArea from "./HomeTwoMissionArea/HomeTwoMissionArea";
import HomeTwoNavBar from "./HomeTwoNavBar/HomeTwoNavBar";
import HomeTwoServicesArea from "./HomeTwoServicesArea/HomeTwoServicesArea";
import HomeTwoAward from "./HomeTwoAward/HomeTwoAward";

const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>Home - Torana Care Australia</title> */}

        <title>
          {" "}
          NDIS Care Home Provider, Respite support NDIS - Torana Care Australia{" "}
        </title>
        <link rel="canonical" href="https://toranacareaustralia.com.au" />
        <meta name="description" content="Welcome" />
        <meta
          name="keywords"
          content="torana care australia, specialist care provider in gunghalin, ndis provider canberra, gunghalin ndis provider, respite support ndis, ndis care home provider"
        />
        <meta
          name="description"
          content="At Torana Care Australia, we are been dedicated to providing the best possible support and care services. Call now +61 026 109 8099"
        />
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
