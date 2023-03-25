import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";
import { Helmet } from 'react-helmet';
import Banner from '../banner';
import MoreServices from '../more';

const GroupandCentre = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Group And Centre-Based Activities- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/group-center" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-7.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Group And Centre-Based Activities</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              Group Centre-based activity is a platform where persons living with a disability can come together to build their social skills, communication and get busy exploring a range of interesting activities with
                              like minds, under the supervision of experienced health care professionals.
                           </p>
                           <p>
                              At Torana Care Australia, we understand how boring and frustrating in can be for persons living with a disability to remain unengaged within a lengthy space of time and in the four walls of their homes. Being part of a daily centre-based activity group is rewarding as it builds
                              the capacity and further improves the well-being of persons living with a disability.
                           </p>
                           <p>
                              We provide a range of group and centre-based activities, tailored to suit the interest and needs of our participants. We make these activities fun and interesting, giving each participant a chance to express themselves with the aim of achieving the best
                              possible outcome. Our services will be provided based on our participant’s set goals.
                           </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>OUR LIST OF GROUP ACTIVITIES INCLUDES:</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i> Knitting</li>
                                    <li><i className="fas fa-check"></i> Drawing</li>
                                    <li><i className="fas fa-check"></i> Painting</li>
                                    <li><i className="fas fa-check"></i> Singing</li>
                                    <li><i className="fas fa-check"></i> Drumming</li>
                                    <li><i className="fas fa-check"></i> Cooking</li>
                                    <li><i className="fas fa-check"></i> Movies</li>
                                 </ul>
                              </div>
                              <p> We are happy to discuss other group activities that may interest you.</p>
                           </div>
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

export default GroupandCentre;