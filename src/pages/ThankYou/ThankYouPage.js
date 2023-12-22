import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BsClock, BsPhone } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ThankYou = () => {
    const navigate = useNavigate()
    const service = localStorage.getItem("service")
    const location = localStorage.getItem("location")
    const name = useRef(null)
    const email = useRef(null)
    const phone = useRef(null)
    const time = useRef(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {

        try {
            setLoading(true)
            const { data } = await axios({
                method: 'post',
                url: 'https://profitmax-001-site10.ctempurl.com/api/Account/send_email',
                data: {
                    name: name.current.value,
                    email: email.current.value,
                    phone: phone.current.value,
                    subject: "Appointment",
                    message: "I'm requesting for " + service + " and I will like to be contacted at " + time.current.value + " my location is " + location,
                    mailFrom: email.current.value,
                    recipient: "info@toranacareaustralia.com.au"

                }
            });
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: data.message,
                showConfirmButton: false,
                timer: 1500
            })
            name.current.value = "";
            email.current.value = "";
            phone.current.value = "";
            time.current.value = "";
            localStorage.removeItem("service")
            localStorage.removeItem("location")
            setLoading(false)
            navigate("/")
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Appointment - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/thank-you" />
                <meta name="description" content="Request for Appointment" />
            </Helmet>
            {/* <HomeHeader /> */}
            {/* <CommonPageHeader title="Page not Found" subtitle="404 Not Found" /> */}

            <div className='pt-50 pb-150'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-8 offset-xl-2'>
                            <div className='error-404 not-found mb-20'>
                                <div className='error-404-content text-center'>
                                    <h1 className=' pink-color'> Thank You</h1>
                                    <p className='err-text fw-2'>for your appointment request. Kindly complete the form below so we can reach you. </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <HomeTwoFooter /> */}
            <section className=" gray-bg ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="appoinment-box-3 ">
                                <div className="row ">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="appoinment-box-content ">
                                            <div className='row mb-40'>
                                                <div className="col-xl-9 col-lg-6 col-md-6">
                                                    <div className="about-title">
                                                        <h3>Appointment Request Form</h3>
                                                    </div>

                                                </div>
                                                <div className="col-xl-3 col-lg-6 col-md-6">
                                                    <div className='mb-4'><Link to="/" className="primary_btn btn-icon ml-0"><span>+</span>BACK TO HOME</Link></div>

                                                </div>
                                            </div>



                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="appoinment-form-box d-flex mb-40">
                                                        <div className="appoint-ment-icon">
                                                            <img src={`img/icon/caregive-option-icon-3.png`} alt="" />
                                                        </div>
                                                        <form className="appointment-form-2" action="#">
                                                            <label htmlFor="input">Your Name</label>
                                                            <input type="text" placeholder="Enter your name" required ref={name} />
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
                                                            <input type="text" placeholder="Enter your email" required ref={email} />
                                                        </form>
                                                    </div>
                                                </div>




                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                                        <div className="appoint-ment-icon">
                                                            <img src="img/icon/caregive-option-icon-2.png" alt="" />
                                                        </div>
                                                        <form className="appointment-form-2" action="#">
                                                            <label htmlFor="input">selected service</label>
                                                            <input type="text" value={service} required />
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="appoinment-form-box d-flex mb-40">
                                                        <div className="appoint-ment-icon">
                                                            {/* <img src={`img/icon/caregive-option-icon-5.png`} alt="" /> */}
                                                            <BsPhone className='fs-1 pink-color' />
                                                        </div>
                                                        <form className="appointment-form-2" action="#">
                                                            <label htmlFor="input">Your Phone</label>
                                                            <input type="text" placeholder="Enter your phone" required ref={phone} />
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="appoinment-form-box d-flex mb-40">
                                                        <div className="appoint-ment-icon">
                                                            {/* <img src={`img/icon/caregive-option-icon-5.png`} alt="" /> */}
                                                            <BsClock className='fs-1'
                                                                style={{ color: "rgb(225, 36, 84)" }}
                                                            />
                                                        </div>
                                                        <form className="appointment-form-2" action="#">
                                                            <label htmlFor="input">selected location</label>
                                                            <input type="text" value={location} required />

                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="appoinment-form-box d-flex mb-40">
                                                        <div className="appoint-ment-icon">
                                                            {/* <img src={`img/icon/caregive-option-icon-5.png`} alt="" /> */}
                                                            <GoLocation className='fs-1'
                                                                style={{ color: "rgb(225, 36, 84)" }}
                                                            />
                                                        </div>
                                                        <form className="appointment-form-2" action="#">
                                                            <label htmlFor="input">Preffered time for call</label>
                                                            <input type="time" placeholder="Enter your phone" ref={time} required />
                                                        </form>
                                                    </div>
                                                </div>



                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="appoint-button d-flex gap-5">

                                                        {/* <Link to="/contact" className="primary_btn green-bg-btn">Make Appointment</Link> */}
                                                        <button className="primary_btn green-bg-btn" onClick={handleSubmit}>

                                                            {loading ? <span className='spinner-border  text-white'></span> : "Submit Request"}
                                                        </button>
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
            {/* <HomeTwoFooter /> */}
        </>
    );
};

export default ThankYou;