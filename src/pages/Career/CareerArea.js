import { Link } from "react-router-dom";

const CareerArea = () => {
    return (
        <>
            <div className="doctor-details-area pt-115 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <article className="doctor-details-box">
                                <div className="section-title pos-rel mb-25">

                                    <div className="section-text pos-rel">
                                        <h5 className="green-color text-up-case">ANNOUNCEMENT</h5>
                                        <h1>We are currently hiring</h1>
                                    </div>
                                    <div className="section-line pos-rel">
                                        <img src="img/shape/section-title-line.png" alt="" />
                                    </div>
                                </div>
                                <div className="service-details-text mb-25s">
                                    <p>At Torana Care Australia, our staff work with us and not for us. Every staff is an
                                        important member of our team and are given the opportunity to grow there career professionally.
                                        We also support our workers to up skill with a view to achieving their career goals.</p>
                                    <p>All our support and services are provided within Canberra. We currently have the following vacant positions:</p>





                                    <div className="ser-fea-list fix">
                                        <ul>
                                            <li><i className='fas fa-check'></i>Disability Support Professional</li>
                                            <li><i className='fas fa-check'></i> Registered Nurse</li>
                                            <li><i className='fas fa-check'></i>Enrolled Nurse</li>
                                            <li><i className='fas fa-check'></i>IT Coordinator</li>
                                            <li><i className='fas fa-check'></i>Administration Officer</li>
                                        </ul>
                                    </div>
                                    <p>
                                        Get in touch with us.

                                    </p>



                                </div>

                                <Link to="/contact" className="primary_btn btn-icon ml-0"
                                    style={{ animationDelay: '0.6s' }} tabIndex="0"><span>+</span>Register your interest
                                </Link>



                            </article>
                        </div>





                        <div className="col-xl-5 col-lg-4">
                            <div className="service-widget mb-50">
                                <div className="team-wrapper team-box-2 team-box-3 text-center mb-30">
                                    <div className="team-thumb">
                                        <img src="img/team/helpcare.jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </>
    );
}

export default CareerArea;