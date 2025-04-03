import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";
import { Helmet } from "react-helmet";
import Banner from "../banner";
import MoreServices from "../more";

const SocialSupport = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://toranacareaustralia.com.au/social-support"
        />

        <title>
          Social Support and Services, MTA Service Provider - Torana Care
          Australia
        </title>

        <meta
          name="description"
          content="We provide innovative community participation planning and support provision to our participants. Get in touch with us today at +61 026 109 8099."
        />

        <meta name="keywords" content="MTA service provider" />
      </Helmet>
      <HomeHeader />

      <div className="service-details-area pt-10 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <article className="service-details-box">
                <div className="service-details-thumb shadow-sm border border-5 mb-80">
                  <img
                    className="img"
                    src="img/services/service-main-3.jpeg"
                    alt="special-support"
                  />
                </div>
                <div className="section-title pos-rel mb-45">
                  <div className="section-text pos-rel">
                    <h5 className="green-color text-up-case"></h5>
                    <h1>Social Support And Services</h1>
                  </div>
                  <div className="section-line pos-rel">
                    <img src="img/shape/section-title-line.png" alt="" />
                  </div>
                </div>
                <div className="service-details-text mb-30">
                  <p>
                    We provide innovative community participation planning and
                    support provision to our participants. We will work with you
                    and your support network, to determine the best kind of
                    social support you may engage in, to help you achieve your
                    goals
                  </p>
                  <p>Are you worried about being home most of the time?</p>
                  <p>
                    Are you unsure about what social activities to engage in?
                  </p>
                  <p>We would like to hear from you.</p>
                </div>
              </article>
            </div>
            <div className="col-xl-5 col-lg-4">
              <MoreServices />
              <Banner />
            </div>
          </div>
        </div>
      </div>
      <HomeTwoFooter />
    </>
  );
};

export default SocialSupport;
