import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaHome, FaWeight, FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";
import { Helmet } from 'react-helmet';
import Banner from '../banner';
import MoreServices from '../more';

const CommunityNursing = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Community Nursing- NDIS Services</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/community-nursing" />
            </Helmet>
            <HomeHeader />

            <div className="service-details-area pt-10 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <article className="service-details-box">
                                <div className="service-details-thumb shadow-sm border border-5 mb-80">
                                    <img className="img" src="img/services/service-main-1.png" alt="" />
                                </div>
                                <div className="section-title pos-rel mb-45">
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
                                            {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
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
                                </div>
                            </article>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <MoreServices />
                            <Banner />

                        </div>
                    </div>
                </div>
            </div>
            <HomeTwoFooter />
        </>
    );
}

export default CommunityNursing;