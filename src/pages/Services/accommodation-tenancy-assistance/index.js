import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";
import Banner from '../banner';
import { Helmet } from 'react-helmet';
import MoreServices from '../more';

const Accomodation = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Accommodation / Tenancy Assistance- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.com.au/accommodation-tenancy-assistance" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-10.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Accommodation / Tenancy Assistance</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <h3> OUR SUPPORT CAN INCLUDE:</h3>
                           <p>
                              Helping participants to reclassify or create accommodation/tenancy objectives. We know how
                              challenging it can be to identify your housing needs and plan towards finding he right tenancy/
                              accommodation that suits your needs. We have a team of skilled professionals
                              ready to work through this process with you, no matter what stage you are in achieving set goals.
                           </p>
                           <p>
                              Investigating elective lodging choices. We help our participants investigate
                              available options, ensuring that they make the right choice in securing an
                              accommodation/tenancy that supports their needs.
                           </p>
                           <p>
                              We are totally committed to providing all necessary support to our participants, ensuring that
                              their housing needs are meet in every way possible.
                           </p>
                           <p>
                              People with disability (and families) are faced with the challenge of moving out of their family home
                              and into a house of their own. Participants and their families will need to decide for themselves where
                              they live, who they live with and how they are supported.Finding the right accommodation /tenancy as a
                              person living with a disability can be quiet challenging. With the NDIS ,accessing the Specialist Disability Accomodation(SDA) funding, may not be easy. We can educate and help you understand how the NDIS can meet your needs. However, there are other avenues we could explore with
                              you such as private accommodation modification, and private/shared property rental.
                           </p>
                           <p>
                              Torana Care Australia can give one on one help to assist participants to accomplish their
                              individual Accommodation and Tenancy objectives. We are well able to help participants beat boundaries
                              that sway a present occupancy. We support participants to investigate and rent a private accommodation.
                              We help in liaising with specialist organizations to determine a suitable accommodation for our
                              participants
                              with the aim of accomplishing their individual objectives.
                           </p>
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
}

export default Accomodation;