import React from 'react';
import { Link } from 'react-router-dom';
import HomeTwoSingleAbout from '../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout';

const HomeTwoAbout = () => {
   return (
      <>
         <section className="about-area about-area-mid pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12">
                     <div className="row">

                        <HomeTwoSingleAbout icon="1" title="Advanced Care" spacing="b-40"
                           text="Our Support And Services Are Built On The Highest Principles Of Care-Giving."
                        />
                        <HomeTwoSingleAbout icon="5" title="Disability Support" spacing="b-40"
                           text="Making specialised disability support and service delivery, easier to access."
                        />
                        <HomeTwoSingleAbout icon="3" title="Experienced Care Workers"
                           text="You're provided with experienced care workers with proven records and of quality standard."
                        />
                        <HomeTwoSingleAbout icon="4" title="Daily Care" spacing="b-40 mb-30"
                           text="On a daily basis, we give professional carer or companion who lives in the vicinity of the client"
                        />

                     </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-11">
                     <div className="about-right-side pt-25 mb-30">
                        <div className="about-title mb-20">
                           <h5 className="pink-color">About Us</h5>
                           <h1>Short Story About Torana Care.</h1>
                        </div>
                        <div className="about-text">
                           <p>We are a team of passionate and qualified health professional, led by a Specialist GP 24/7.
                              We are been dedicated to providing the best possible support and care services.
                              We are passionate about supporting people living with a disability to live their best lives.</p><br />
                        </div>
                        <div className="about-text-list mb-40">
                           <ul>
                              <li><i className="fa fa-check"></i><span>NDIS-approved disability support provider.</span></li>
                              <li><i className="fa fa-check"></i><span>Support and care for older adults and people with diabilities </span></li>
                           </ul>
                        </div>
                        <div className="button-area">
                           <Link to="/about" className="primary_btn btn-icon ml-0"><span>+</span>Read more</Link>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAbout;