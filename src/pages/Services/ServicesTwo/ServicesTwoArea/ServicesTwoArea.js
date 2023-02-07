import React from 'react';
import { Link } from 'react-router-dom';
import ServicesTwoSingleItem from '../../../../components/ServicesTwoSingleItem/ServicesTwoSingleItem';

const ServicesTwoArea = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               {/* <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-12">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Departments</h5>
                           <h1>Managed Your Heathcare Services</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="section-button text-end d-none d-lg-block pt-80">
                        <Link to="/services"
                           className="primary_btn btn-icon ml-0"><span>+</span>more services</Link>
                     </div>
                  </div>
               </div> */}
               <div className="row">

                  <ServicesTwoSingleItem image="img/services/service-main-1.jpeg" title="COMMUNITY NURSING"
                     content="We have a team of competent and caring Nurses, ready to take care of your nursing needs. Our Nurses work with individuals 
                  and their families to help manage an ailment, keep up well-being and manage any out of hospital care medical needs"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-2.jpg" title="SPECIALIST BEHAVIOUR SUPPORT"
                     content="We offer clinical social help to decrease the danger of hurtful conduct and produce positive results. Our clinicians give proficient 
                  individualized examination and techniques that advance pro-social conduct and improve general well-being."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-3.jpeg" title="SOCIAL SUPPORT AND SERVICES"
                     content="We provide innovative community participation planning and support provision to our participants. We will work with you and your support network, 
                  to determine the best kind of social support you may engage in, to help you achieve your goals"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-4.jpeg" title="THERAPEUTIC SUPPORT"
                     content="Our Therapeutic Supports and Services are provided to participants over the age of seven(7). These includes:"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-5.jpeg" title="HOUSEHOLD TASK SUPPORT"
                     content="We understand how hard it can be for you to take care of all your household tasks, such as:"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-6.png" title="EXERCISE PHYSIOLOGY AND PERSONAL TRAINING"

                     content="Our Exercise Physiologist and Personal Trainer will work with our participants in the delivery of 
                  exercise physiology services including:"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-7.jpg" title="GROUP AND CENTRE-BASED ACTIVITIES"

                     content="We provide a range of group and centre-based activities, tailored to suit the interest and 
                     needs of our participants."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-8.jpeg" title="SPECIALIST SUPPORT COORDINATION"

                     content="Our Specialist support coordinator will support the participant to manage challenges in their 
                     support environment which may include health, education and Capacity building.
"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-9.jpeg" title="COMPLEX HEALTH CARE SUPPORT"

                     content="Torana Care Australia is committed to providing quality and safe complex health supports and services, 
                     which represent some of the highest risks for our participants and their families."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-10.jpg" title="ACCOMMODATION/TENANCY ASSISTANCE"

                     content="Torana Care Australia can give one on one help to assist participants to accomplish their 
                     individual Accommodation and Tenancy objectives, 
                     for example, helping participants to beat boundaries that sway a present occupancy."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-11.jpeg" title="ASSISTIVE SUPPORT AND SERVICES"

                     content="At Torana Care Australia, we take care of all aspects of our participants needs, that support their well-being.
                      These include but not limited to:."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-12.jpeg" title="CAPACITY BUILDING SUPPORT AND SERVICES"

                     content="Assistance to Access and maintain employment or higher Education We work with our participants to plan, access
                      and maintain employment and higher education,providing all support and services required to ensure set goals are met."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-10.jpg" title="GROUP/SHARED SUPPORTED LIVING,SUPPORTED INDEPENDENT LIVING/RESPITE"

                     content="At Torana Care Australia, we are committed to providing excellent support and services to our participants at all times. 
                     A high quality of service is guaranteed irrespective of location and time."
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-14.jpeg" title="SUPPORT COORDINATION"
                     content="Torana Care Australia Provides two(2) levels of Support coordination such as:"
                  />
                  <ServicesTwoSingleItem image="img/services/service-main-15.jpeg" title="CALD COMMUNITY PARTICIPATION"

                     content="We support our CALD(Cultural And Linguistically Diverse) participants engage with their communities. We understand the importance of being 
                     actively involved in our cultural activities, which forms part of our value system.."
                  />

               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesTwoArea;