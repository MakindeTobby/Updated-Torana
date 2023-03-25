import React from 'react';
import { Link } from 'react-router-dom';


const ContentArea = () => {
    return (
        <>
            <section className="blog-area pt-50 pb-80">
                <div className="container">
                    <div className="row">

                        <>
                            <div className="col-lg-12">
                                <h3 className="blog-title uppercase">
                                    LIVING LIFE BEYOND LIMITS
                                </h3>
                                <article className="postbox post format-image mb-40">

                                    <div className="postbox__thumb mb-35">
                                        <img src="img/blog/blog-3.png" alt="blog img" />
                                    </div>
                                    <div className="postbox__text bg-none">
                                        <div className="post-meta mb-15">
                                            <span><i className="far fa-calendar-check"></i> April 13, 2020  </span>
                                            <span><Link to="/blogDetails"><i className="far fa-user"></i> Florence Unobe</Link></span>
                                            <span><Link to="/blogDetails"><i className="far fa-comments"></i> No Comments</Link></span>
                                        </div>

                                        <div className="post-text mb-20">

                                            <p>
                                                Life can be very challenging when you have a disability. Sometimes you may feel like being alive is to no good. For many, there are loved ones always around to shower us with love and care at all times.
                                                Even with these, we still do not feel worthy to be among ABLED PERSONS.
                                            </p>

                                            <div className="ser-fea-list fix">

                                                <ul>
                                                    <li><i className="fas fa-check">
                                                    </i> Every human has a BODY, SOUL and a SPIRIT. Being disabled affects only the body and not the spirit or soul. The beauty of this is the fact that the Spirit is not and cannot be disabled.
                                                        In the domain of the spirit, we all are equal and have no limits to what we can do, go to and achieve.
                                                        <br />
                                                        <br />
                                                        Having a clear understanding of these makes anyone with a health challenge heal quicker and live life better. The WILL to living live beyond limits starts with your inner man which is your spirit. There are five (5) ways to achieve your goals:
                                                    </li>
                                                    <li><i className="fas fa-check"></i> Have a clear vision of what you want to achieve in life irrespective of your disability.
                                                        This is the first step to living your life beyond limits.</li>
                                                    <li><i className="fas fa-check"></i>Meditate on your vision. The idea here is to fill your mind with your vision and imagine that your goals have been achieved.
                                                        You will begin to dream about your goals and speak to everyone who cares to listen to your life goals.</li>
                                                    <li><i className="fas fa-check"></i>Speak to family and your support network about your vision. This is important because they would help you
                                                        make contact with your support providers and other health professionals about your goals.</li>
                                                    <li><i className="fas fa-check"></i> Put in every effort to act your vision safely. Do your best to request
                                                        to be actively supported. Make an effort to live your vision in any way consistently.</li>
                                                    <li><i className="fas fa-check"></i> When your support plan is developed to help you achieve set goals,
                                                        cooperate with your support team as they work to actualise your goals.</li>
                                                </ul>
                                            </div>



                                            <p>It’s not going to be easy to live your life beyond limits. It takes determination and consistency to bring you DREAMS TO LIFE.</p>
                                        </div>

                                        <div className="row mt-50">
                                            <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                                                <div className="blog-post-tag">
                                                    <span>Releted Tags</span>
                                                    <Link to="/blogs">App</Link>
                                                    <Link to="/blogs">Book</Link>
                                                    <Link to="/blogs">Reading</Link>

                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                                                <div className="blog-share-icon text-left text-md-right">
                                                    <span>Share: </span>
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="post-comments-form">
                                        <div className="post-comments-title">
                                            <h2>Post Comments</h2>
                                        </div>
                                        <form id="contacts-form" className="conatct-post-form" action="#">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="contact-icon contacts-message">
                                                        <textarea name="comments" id="comments" cols="30" rows="10"
                                                            placeholder="Your Comments...."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="contact-icon contacts-name">
                                                        <input type="text" placeholder="Your Name.... " />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="contact-icon contacts-email">
                                                        <input type="email" placeholder="Your Email...." />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="contact-icon contacts-website">
                                                        <input type="text" placeholder="Your Website...." />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <button className="primary_btn theme-btn" type="submit">Post comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </article>
                            </div>
                        </>









                    </div>
                </div>
            </section>
        </>
    );
};

export default ContentArea;