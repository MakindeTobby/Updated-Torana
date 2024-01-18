import React, { useState } from 'react';
import { FaPlay, FaUser } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { RiServiceFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Swal from 'sweetalert2';

const HomeTwoHeroSection = () => {
   const navigate = useNavigate()
   const values = useGlobalContext();
   const { setIsOpen, storeService, storeLocation, } = values;
   const [location, setLocation] = useState("");
   const [service, setService] = useState("");


   const goTo = () => {
      if (location === '' || service === "") {
         return Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'Please select your location and type of service',
            showConfirmButton: false,
            timer: 1500
         })
      } else {
         localStorage.setItem('service', service);
         localStorage.setItem('location', location);
         navigate("/thank-you")
      }
   }

   console.log(service, location);
   return (
      <>
         <VideoPopup videoId="CIdiS4sMfzc" />

         <section className="hero-area">
            <div className="hero-slider hero_two_slider">
               <div className="slider-active">
                  <div className="single-slider slider-height slider-height-2 d-flex align-items-center"
                     data-background="img/slider/bg-22.jpeg">
                     <div className="container">
                        <div className="row align-items-center">
                           <div className="col-xl-6 col-lg-6 col-md-10">
                              <div className="hero-text hero-text-2 pt-35">
                                 <div className="hero-slider-caption hero-slider-caption-2">
                                    <h5 className="white-color">We are  here for your care.</h5>
                                    <h1 className="white-color" >Best Care & Best Carers.</h1>
                                 </div>
                                 <div className="hero-slider-btn">
                                    <Link to="/about" className="primary_btn btn-icon btn-icon-blue ml-0"><span>+</span>about us</Link>
                                    <button onClick={() => setIsOpen(true)} className="play-btn popup-video" title='play short video'>

                                       <FaPlay className='fs-5 text-white play-icon'

                                       />

                                    </button>

                                    {/* <button className="animated-btn text-white btn popup-video" href="#"><i className="fa fa-play" /></button> */}


                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
                              <div className="slider-right-2">
                                 <div className="caregive-box">
                                    <div className="search-form">
                                       <span className="sub-heading">Welcome</span>
                                       <h3>We are here for you</h3>
                                    </div>
                                    <div className="row">

                                       <div className="col-xl-12">
                                          <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                             <div className="appoint-ment-icon">
                                                {/* <img src="img/icon/caregive-option-icon-2.png" alt="" /> */}
                                                <MdLocationPin className='fs-1'
                                                   style={{ color: "rgb(225, 36, 84)" }}
                                                />
                                             </div>
                                             <form className="appointment-form-2" action="#">
                                                <label htmlFor="input">select your location</label>
                                                <select name="lc" id="lc" className="postform w-100 overflow-hidden border-0" onChange={e => setLocation(e.target.value)}>
                                                   <option defaultValue="-1" hidden>Choose a Location</option>
                                                   <option className="level-0" defaultValue="36">Australian Capital Territory</option>
                                                   <option className="level-0" defaultValue="36">New South Wales</option>
                                                   <option className="level-0" defaultValue="37">Victoria</option>
                                                   <option className="level-0" defaultValue="38">Queensland</option>
                                                   <option className="level-0" defaultValue="39">Northern Territory</option>
                                                   <option className="level-0" defaultValue="39">Western Australia</option>
                                                   <option className="level-0" defaultValue="40">South Australia</option>
                                                   <option className="level-0" defaultValue="40">Tasmania</option>
                                                   <option className="level-0" defaultValue="40">Others</option>
                                                </select>

                                             </form>
                                          </div>
                                       </div>
                                       <div className="col-xl-12">
                                          <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                             <div className="appoint-ment-icon">
                                                {/* <img src="img/icon/caregive-option-icon-2.png" alt="" /> */}
                                                <RiServiceFill className='fs-1' style={{ color: "rgb(225, 36, 84)" }} />
                                             </div>
                                             <form className="appointment-form-2" action="#">
                                                <label htmlFor="input">select your services</label>
                                                <select name="lc" id="lc" className="postform w-100 overflow-hidden border-0" onChange={e => setService(e.target.value)}>
                                                   <option defaultValue="-1" hidden>Choose a Service</option>
                                                   <option className="level-0"> Accommodation</option>
                                                   <option className="level-0"> Assistive Support</option>
                                                   <option className="level-0"> Household Task Support</option>
                                                   <option className="level-0"> Social Support and Services</option>
                                                   <option className="level-0"> Therapeutic Support</option>
                                                   <option className="level-0"> Community Nursing</option>
                                                   <option className="level-0"> Complex Health Care</option>
                                                   <option className="level-0"> Support Coordination</option>
                                                   <option className="level-0">  Specialist Behaviour</option>
                                                   <option className="level-0">  Exercise Physiology</option>
                                                   <option className="level-0">  CALD Community</option>
                                                   <option className="level-0">  Others</option>
                                                </select>
                                             </form>
                                          </div>
                                       </div>
                                       <div className="col-xl-12 mb-35">
                                          <div className="inner caregive-btn text-center">
                                             <button onClick={goTo} className="primary_btn rounded-pill">Make Appointment</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
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

export default HomeTwoHeroSection;