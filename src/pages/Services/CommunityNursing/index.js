import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross,TbSocial,TbPhysotherapist } from "react-icons/tb";

const CommunityNursing = () => {
   
    return (
        <>
            <HomeHeader />

            <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-1.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Community Nursing</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>Community Nursing attendants are a significant piece of the treatment team giving comprehensive
                              care to clients in the community. They carry the truly necessary considerations and provide healthcare
                              support to clients/participants in the solace of their homes, inline with the requirements of the client’s medical team. Giving the required instruction to clients about their well-being conditions is an integral part of their duty. Providing essential nursing care in the Community are significant obligations of the Nurse. They also have a duty to offer emotional help to the client and their families, providing insights to psychological wellness worries within their scope of duties and further escalation of health/medical concerns to appropriate places as required. Keeping and making comprehensive
                              reports of the client’s health condition is an essential segment of the community nurse.</p>
                           <p>At Torana Care Australia, we have a team of competent and caring Nurses, ready to take 
                              care of your nursing needs as explained above.
                              Our Nurses work with individuals and their families to help manage an ailment, keep up
                               well-being and manage any out of hospital care medical needs. We intend to help and keep
                            up our participant’s freedom, security and sound way of life, simultaneously and also provide support to carers.</p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-1.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Our support and services include:</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Care after a medical clinic</li>
                                    <li><i className="fas fa-check"></i>General nursing care, incorporating help with chronic conditions</li>
                                    <li><i className="fas fa-check"></i>Medical clinic in the home’ services, which give emergency clinic type care outside of the emergency clinic</li>
                                    <li><i className="fas fa-check"></i>Palliative nursing care, for individuals who have an actual constraining ailment and needs to remain at home</li>
                                 </ul>
                              </div>
                           </div>
                           {/* <div className="ser-fea-box f-left me-0">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-2.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Lifestyle support</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Didunt ut labore et dolore magna.</li>
                                    <li><i className="fas fa-check"></i>Aliqua. Ut enim ad minim veniam.</li>
                                    <li><i className="fas fa-check"></i>Quis nostrud exercitation ullamco.</li>
                                    <li><i className="fas fa-check"></i>Laboris nisi ut aliquip ex ea.</li>
                                 </ul>
                              </div>
                           </div> */}
                        </div>
                        {/* <div className="service-chart mb-55">
                           <img src="img/services/service-chart.jpg" alt=""/>
                           <ResponsiveContainer width="100%" height={300}>
                              <AreaChart
                                 width={500}
                                 height={400}
                                 data={data}
                                 margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                 }}
                              >
                                 <CartesianGrid strokeDasharray="3 3" />
                                 <XAxis dataKey="name" />
                                 <YAxis />
                                 <Tooltip />
                                 <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                 <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                 <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                              </AreaChart>
                           </ResponsiveContainer>
                        </div> */}
                        {/* <div className="service-doctors mb-55">
                           <img src="img/services/service-doctors.png" alt="" />
                        </div> */}
                        {/* <div className="section-title pos-rel mb-50">
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">download</h5>
                              <h1>Free Download Resources</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div> */}
                        {/* <div className="download-area">
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/pdf.png" alt="" />
                                 <span>The Balanced Care Method Flyer.pdf</span>
                                 <span className="download-size">57KB</span>
                              </div>
                           </a>
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/doc.png" alt="" />
                                 <span>Infomation sheet 2 2016-17.doc</span>
                                 <span className="download-size">87KB</span>
                              </div>
                           </a>
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/zip.png" alt="" />
                                 <span>What_is_home_care_manual.zip</span>
                                 <span className="download-size">112KB</span>
                              </div>
                           </a>
                        </div> */}
                        {/* <div className="testi-box text-center pos-rel mb-0">
                           <div className="testi-content testi-service-content pos-rel">
                              <div className="testi-quato-icon">
                                 <img src="img/testimonials/testi-quato-icon.png" alt="" />
                              </div>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                 perspiciatis unde omnis iste natus error sit voluptatem.</p>
                              <span></span>
                           </div>
                           <div className="testi-author">
                              <h2 className="testi-author-title">Rosalina D. Williamson</h2>
                              <span className="testi-author-desination">founder, uithemes</span>
                           </div>
                           <div className="test-author-icon mb-10">
                              <img src="img/testimonials/testi-author-icon.png" alt="" />
                           </div>
                        </div> */}
                     </article>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">More Services</h3>
                        </div>
                        <div className="more-service-list">
                        <ul>
                              <li>
                                 <Link to="/community-nursing">
                                 <FaWheelchair className="fs-1 text-danger" />
                                    <div className="more-service-title">Community Nursing</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/special">
                                    <TbMedicalCross className="fs-1 text-danger" />
                                    <div className="more-service-title">SPECIALIST BEHAVIOUR SUPPORT</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/social-support">
                                    <TbSocial className="fs-1 text-danger" />
                                    <div className="more-service-title">SOCIAL SUPPORT AND SERVICES</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/therapeutic">
                                        <TbPhysotherapist className="fs-1 text-danger" />
                                    <div className="more-service-title">THERAPEUTIC SUPPORT</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/household">
                                    <MdAddTask className="fs-1 text-danger" />
                                    <div className="more-service-title">HOUSEHOLD TASK SUPPORT</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/exercise-phy">
                                    <SiOpenaigym className="fs-1 text-danger" />
                                    <div className="more-service-title">EXERCISE PHYSIOLOGY AND PERSONAL TRAINING</div>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Get Some Advice?</h3>
                        </div>
                        <form className="service-contact-form" action="">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-user mb-20">
                                    <input type="text" placeholder="Enter your name" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-mail mb-20">
                                    <input type="text" placeholder="Enter your email" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-hourglass">

                                    <select className="form-select select_style" aria-label="Default select example">
                                       <option defaultValue="Select type of care">Select type of care</option>
                                       <option defaultValue="1">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="ser-form-btn text-center mt-40">
                           <a href="#" className="primary_btn btn-icon ml-0"
                              style={{ animationDelay: '0.6s' }}
                              tabIndex="0"><span>+</span>Request for call</a>
                        </div>
                     </div>
                     <div className="service-widget mb-50 border-0 p-0">
                        <div className="banner-widget">
                           <Link to="/contact">
                              <img src="img/services/services-banner.png" alt="" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            <HomeTwoFooter />
        </>
    );
}

export default CommunityNursing;