
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const ContactFormArea = () => {

   const email = useRef(null)
   const subject = useRef(null)
   const body = useRef(null)

   return (
      <>
         <section className="contact-form-area gray-bg pt-100 pb-100">
            <div className="container">
               <div className="form-wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-8">
                        <div className="section-title mb-55">
                           {/* <p><span></span> </p> */}
                           <h2>Send a mail</h2>
                        </div>
                     </div>

                  </div>
                  <div className="contact-form">
                     <form id="contact-form" action="#">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="form-box user-icon mb-30">
                                 <input type="text" name="name" placeholder="Your Name" required />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box email-icon mb-30">
                                 <input type="text" name="email" ref={email} placeholder="Your Email" required />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box phone-icon mb-30">
                                 <input type="text" name="phone" placeholder="Your Phone" required />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box subject-icon mb-30">
                                 <input type="text" name="subject" ref={subject} placeholder="Your Subject" required />
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="form-box message-icon mb-30">
                                 <textarea name="message" id="message" cols="30" rows="10" ref={body}
                                    placeholder="Your Message" required></textarea>
                              </div>
                              <div className="contact-btn text-center">
                                 <button

                                    className="primary_btn btn-icon ml-0" type="button">
                                    <span>+</span> Submit</button>
                              </div>
                           </div>
                        </div>
                     </form>
                     <p className="ajax-response text-center"></p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactFormArea;