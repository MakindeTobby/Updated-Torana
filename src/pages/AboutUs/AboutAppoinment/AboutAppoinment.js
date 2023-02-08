import React from 'react';
import { Link } from 'react-router-dom';

const AboutAppoinment = () => {
   return (
      <>
         <section className="appoinment-section pt-120 pb-120" data-background="img/bg/appointment.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="appoinment-box white">
                        <div className="appoinment-content">
                           <span className="small-text">Our Approach</span>
                           <h1>If you are a patient seeking quality care.</h1>
                           <p>We are passionate about providing quality services that builds and support
                              the capacity of our participants and improve the quality of their life.</p>
                           {/* <ul className="professinals-list pt-30">
                              <li>
                                 <i className="fa fa-check"></i>
                                 Ut enim ad minim veniam, quis nostrud exercit.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Ut enim ad minim veniam, quis nostrud exercit.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Ut enim ad minim veniam, quis nostrud exercit.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Ut enim ad minim veniam, quis nostrud exercit.
                              </li>
                           </ul> */}
                        </div>
                        <Link to="/contact" className="primary_btn mt-40">Make appointment</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutAppoinment;