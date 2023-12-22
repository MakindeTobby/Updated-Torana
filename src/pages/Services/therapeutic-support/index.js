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

const Therapeutic = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Therapeutic Support- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.com.au/therapeutic" />
         </Helmet>

         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-4.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Therapeutic Support</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <h3>
                              OUR THERAPEUTIC SUPPORTS AND SERVICES ARE PROVIDED TO PARTICIPANTS OVER THE AGE OF SEVEN(7). THESE INCLUDES:
                           </h3>
                           <div className="ser-fea-list fix">
                              <ul>
                                 <li><i className="fas fa-check"></i>
                                    <b>
                                       Assessment and Support:
                                    </b>
                                    <span> Our services are provided to support our participant’s care plan by proving training,
                                       or supervision of a care giver to respond to complex care needs of the participant.</span>
                                 </li>

                                 <li><i className="fas fa-check"></i>
                                    <b>
                                       Counselling:
                                    </b>
                                    <span> Our counselling services are provided to facilitate self-knowledge, emotional acceptance and growth, and the optimal development of personal resources, to help the
                                       participant work towards their personal goals and gain greater insight into their lives.</span>
                                 </li>

                                 <li><i className="fas fa-check"></i>
                                    <b>
                                       Community Engagement Assistance:
                                    </b>
                                    <span> Our support and services are provided to empower
                                       participants by developing and improving their social interaction skills.
                                    </span>
                                 </li>

                                 <li><i className="fas fa-check"></i>
                                    <b> Community Nursing Care for Continence Aid:
                                    </b>
                                    <span> We provide continence aids assessment, recommendation, and training support.
                                    </span>
                                 </li>

                                 <li><i className="fas fa-check"></i>
                                    <span> We also assist our participants to develop the skill to engage effectively in the community through a group approach
                                       to help them gain insight into their lives, and make informed decisions.
                                    </span>
                                 </li>

                                 <li><i className="fas fa-check"></i>
                                    <span> We provide Therapeutic support by an allied health assistant working under the
                                       delegation and direct supervision at all times of our therapist.
                                    </span>
                                 </li>

                                 <li><i className="fas fa-check"></i>
                                    <span> We provide assessment, recommendation, therapy or training
                                       (including Assistive Technology) by our psychologist or physiotherapist. <b> Our Exercise Physiologist</b> provides advice to a participant regarding exercise required due to the impact of their disability.
                                    </span>
                                 </li>
                                 <p>We are here to help…</p>
                              </ul>
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

export default Therapeutic;