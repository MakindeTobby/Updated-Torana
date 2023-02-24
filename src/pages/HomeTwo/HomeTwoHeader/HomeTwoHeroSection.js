import React from 'react';
import { FaPlay, FaUser } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { RiServiceFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeTwoHeroSection = () => {
   const values = useGlobalContext();
   const { setIsOpen } = values;
   return (
      <>
         <VideoPopup />

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

                                       <FaPlay className='fs-5 play-icon'

                                       />

                                    </button>
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
                                       {/* <div className="col-xl-12">
                                          <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                             <div className="appoint-ment-icon">
                                                <FaUser className='fs-2'
                                                   style={{ color: "rgb(225, 36, 84)" }}
                                                />
                                             </div>
                                             <form className="appointment-form-2" action="#">
                                                <label htmlFor="input">Enter Email or Phone</label>
                                                <input type="text" name="lc" id="lc" className=" outline-none"

                                                />


                                             </form>
                                          </div>
                                       </div> */}
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
                                                <select name="lc" id="lc" className="postform outline-none">
                                                   <option defaultValue="-1" hidden>Choose a Location</option>
                                                   <option className="level-0" defaultValue="36">New South Wales</option>
                                                   <option className="level-0" defaultValue="37">Victoria</option>
                                                   <option className="level-0" defaultValue="38">Queensland</option>
                                                   <option className="level-0" defaultValue="39">Western Australia</option>
                                                   <option className="level-0" defaultValue="40">South Australia</option>
                                                   <option className="level-0" defaultValue="40">Tasmania</option>
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
                                                <select name="lc" id="lc" className="postform w-100 overflow-hidden">
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
                                                </select>
                                             </form>
                                          </div>
                                       </div>
                                       <div className="col-xl-12 mb-35">
                                          <div className="inner caregive-btn text-center">
                                             <Link to="/thank-you" className="primary_btn gray-btn-border">Make Appointment</Link>
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