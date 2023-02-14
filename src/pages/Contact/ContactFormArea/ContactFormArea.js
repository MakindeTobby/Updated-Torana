
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const ContactFormArea = () => {
   const name = useRef(null);
   const email = useRef(null);
   const phone = useRef(null);
   const subject = useRef(null);
   const message = useRef(null);

   const handleForm = async (e) => {
      e.preventDefault()
      try {
         const { data } = await axios({
            method: 'post',
            url: 'http://profitmax-001-site8.ctempurl.com/api/Account/send_email',
            data: {
               name: name.current.value,
               email: email.current.value,
               phone: phone.current.value,
               subject: subject.current.value,
               message: message.current.value,
               mailFrom: email.current.value,
               recipient: "info@toranacareaustralia.org.au"
            }
         });
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
         })
         name.current.value = "";
         email.current.value = "";
         phone.current.value = "";
         subject.current.value = "";
         message.current.value = "";
         email.current.value = "";
      } catch (error) {
         console.log(error);
      }


   };

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
                     <form id="contact-form" action="#" onSubmit={handleForm}>
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="form-box user-icon mb-30">
                                 <input type="text" name="name" ref={name} placeholder="Your Name" required />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box email-icon mb-30">
                                 <input type="text" name="email" ref={email} placeholder="Your Email" required />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box phone-icon mb-30">
                                 <input type="text" name="phone" placeholder="Your Phone" ref={phone} required />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box subject-icon mb-30">
                                 <input type="text" name="subject" ref={subject} placeholder="Your Subject" required />
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="form-box message-icon mb-30">
                                 <textarea name="message" id="message" cols="30" rows="10" ref={message}
                                    placeholder="Your Message" required></textarea>
                              </div>
                              <div className="contact-btn text-center">
                                 <button

                                    className="primary_btn btn-icon ml-0" type="submit">
                                    <span>+</span> Submit
                                    {/* <span className='spinner-border text-danger'></span> */}
                                 </button>
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