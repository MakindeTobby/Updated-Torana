import React from 'react';
import { BiPlusMedical } from 'react-icons/bi'

const CommonSectionArea = ({ area_header }) => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     {area_header}
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>About Torana Care Australia</h5>
                           <h2>We strengthen the <b>WILL</b> of our participants</h2>
                        </div>
                        <div className="about-text mb-50">
                           <p>
                              We Understand The Needs Of Persons Living With Disability From Medical,
                              Technological And Social Standpoints. We Believe That, Any Human Being Is As Strong As Their "WILL" To Achieve Set Goals, Irrespective Of Their Disability. Just Like The Saying, “Where There Is A Will, There Is A Way”, We Strengthen The “WILL” Of Our Participants, To Make “WAY” For Them To Be Whatever They Want To Be, With Our Help.
                              Our Support And Services Aim To Bridge The Gap Between Our Participant’s “Will” And The “Way” To Their Goals.
                           </p>
                        </div>
                        <div className="our-destination">
                           <div className="single-item mb-30">
                              <div className="mv-icon f-left">
                                 {/* <img src="img/about/destination-icon-1.png" alt="" /> */}
                                 <BiPlusMedical className='text-danger fs-1' />
                              </div>
                              <div className="mv-title fix">
                                 <h3>Our Mission</h3>
                                 <p>Helping people with disabilities live their lives beyond limits by inspiring them effectively,
                                    employing best communication methods, pushing them beyond the comfort zones to achieving extraordinary results.</p>
                              </div>
                           </div>
                           <div className="single-item">
                              <div className="mv-icon f-left">
                                 {/* <img src="img/about/destination-icon-2.png" alt="" /> */}
                                 <BiPlusMedical className='text-danger fs-1' />

                              </div>
                              <div className="mv-title fix">
                                 <h3>Our Vision</h3>
                                 <p>To create equal opportunity for people living with disability,
                                    irrespective of state of health, cultural diversity and beliefs.</p>
                                 <p>
                                    To create a world where people living with disability can compete with everyone else in all spheres of life
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CommonSectionArea;