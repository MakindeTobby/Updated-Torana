import axios from 'axios';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
const HomeTwoAppoinmentArea = () => {
   const name = useRef(null)
   const email = useRef(null)
   const phone = useRef(null)
   const message = useRef(null)
   const [loading, setLoading] = useState(false)


   const handleForm = async () => {
      try {
         setLoading(true)
         const { data } = await axios({
            method: 'post',
            url: 'http://profitmax-001-site8.ctempurl.com/api/Account/send_email',
            data: {
               name: name.current.value,
               email: email.current.value,
               phone: phone.current.value,
               subject: "Appointment",
               message: message.current.value,
               mailFrom: email.current.value,

               recipient: "makindetobiloba9@gmail.com"
               // recipient: "info@toranacareaustralia.org.au"
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
         message.current.value = "";
         email.current.value = "";
         setLoading(false)

      } catch (error) {
         console.log(error);
         setLoading(false)

      }
   }
   return (
      <>
         <section className="appoinment-area gray-bg pb-15">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="appoinment-box-2">
                        <div className="row no-gutters">
                           <div className="col-xl-8 col-lg-12">
                              <div className="appoinment-box-content">
                                 <div className="about-title mb-40">
                                    <h5 className="pink-color">Free Consultation</h5>
                                    <h1>Get An Appointment</h1>
                                 </div>
                                 <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                       <div className="appoinment-form-box d-flex mb-40">
                                          <div className="appoint-ment-icon">
                                             <img src={`img/icon/caregive-option-icon-3.png`} alt="" />
                                          </div>
                                          <form className="appointment-form-2" action="#">
                                             <label htmlFor="input">Your Name</label>
                                             <input type="text" placeholder="Enter your name" ref={name} required />
                                          </form>
                                       </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                       <div className="appoinment-form-box d-flex mb-40">
                                          <div className="appoint-ment-icon">
                                             <img src={`img/icon/caregive-option-icon-4.png`} alt="" />
                                          </div>
                                          <form className="appointment-form-2" action="#">
                                             <label htmlFor="input">Your Email</label>
                                             <input type="text" placeholder="Enter your email" ref={email} required />
                                          </form>
                                       </div>
                                    </div>




                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                       <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                          <div className="appoint-ment-icon">
                                             <img src="img/icon/caregive-option-icon-2.png" alt="" />
                                          </div>
                                          <form className="appointment-form-2" action="#">
                                             <label htmlFor="input">select your services</label>
                                             <select name="lc" id="lc" className="postform outline-none" ref={message} required>
                                                <option defaultValue="-1" hidden>Choose A Service</option>
                                                <option className="level-0"> Accommodation</option>
                                                <option className="level-0"> Assistive Support</option>
                                                <option className="level-0"> Household Task Support</option>
                                                <option className="level-0"> Social Services</option>
                                                <option className="level-0"> Therapeutic Support</option>
                                                <option className="level-0"> Community Nursing</option>
                                                <option className="level-0"> Complex Health Care</option>
                                                <option className="level-0"> Support Coordination</option>
                                                <option className="level-0"> Specialist Support</option>
                                             </select>
                                          </form>
                                       </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                       <div className="appoinment-form-box d-flex mb-40">
                                          <div className="appoint-ment-icon">
                                             <img src={`img/icon/caregive-option-icon-5.png`} alt="" />
                                          </div>
                                          <form className="appointment-form-2" action="#">
                                             <label htmlFor="input">Your Phone</label>
                                             <input type="text" placeholder="Enter your phone" ref={phone} required />
                                          </form>
                                       </div>
                                    </div>



                                    <div className="col-xl-6 col-lg-12">
                                       <div className="appoint-button">

                                          {/* <Link to="/contact" className="primary_btn green-bg-btn">Make Appointment</Link> */}
                                          <button onClick={handleForm} className="primary_btn green-bg-btn">


                                             {loading ? <span className='spinner-border  text-white'></span> : "Make Appointment"}

                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-4">
                              <div className="appoinment-right f-right">
                                 {/* <img src="img/appoinment/torana-white-pt2.png" width={'25%'} alt="" /> */}
                                 <img src="img/appoinment/appointment-new.jpg" alt="" />
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

export default HomeTwoAppoinmentArea;