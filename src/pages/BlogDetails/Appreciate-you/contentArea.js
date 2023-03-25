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
                                    Appreciate You
                                </h3>
                                <article className="postbox post format-image mb-40">

                                    <div className="postbox__thumb mb-35">
                                        <img src="img/blog/blog-2.jpg" alt="blog img" />
                                    </div>
                                    <div className="postbox__text bg-none">
                                        <div className="post-meta mb-15">
                                            <span><i className="far fa-calendar-check"></i> August 11, 2020 </span>
                                            <span><Link to="/blogDetails"><i className="far fa-user"></i> Florence Unobe</Link></span>
                                            <span><Link to="/blogDetails"><i className="far fa-comments"></i> No Comments</Link></span>
                                        </div>

                                        <div className="post-text mb-20">
                                            <p>Being alive comes with lots of challenges. Every individual, both Able or Disable face difficulties. Some challenges are physical, but others may not be physical.
                                                What is important here is that everyone has something going on in their lives which may be very difficult to deal with.</p>


                                            <p>
                                                Yes, being obviously disabled and being sick is more depressing. Knowing that people see our physical challenges and sometimes throw pity parties for us, could be upsetting. The bottom line is, everyone has PROBLEMS. Once we understand this, we will begin to feel better about ourselves. Let’s not let the thoughts of being disabled keep us in a perpetual state of shame.
                                                No one is better than you. Our life’s struggles are the same, irrespective of what the problem may be.   </p>


                                            <p>Focusing on our strengths than our weakness
                                                is what we need to get by. For some of us, even if we are not able to Walk, we are able to talk.
                                            </p>

                                            <p>Even if we are not able to Walk and Talk, we are able to Think</p>

                                            <p>Even if we are not able to Think, we are able to Use Our Hands</p>
                                            <p>Even if we are not able to Walk, Talk, Think, use our hands we have SUPPORT.</p>

                                            <p>The list goes on and on. Occupying our minds with positive thoughts are very important as it brightens our day. When ever we feel depressed about our condition, we can search the internet to find people with similar situations and have recovered or successfully overcome their challenges in one way or the other. Watching inspiring videos on youtube can be helpful. Social media platforms are useful in this area by subscribing
                                                to pages,blogs,vblogs and the likes, that feed you with interesting and inspiring messages/videos.
                                            </p>

                                            <p>
                                                Most importantly, we need to protect our minds from negative thoughts that tries to make us feel bad about ourselves.
                                                Self love is necessary at all times as it determines how people would see us and treat us.
                                            </p>
                                            <p>
                                                Let us take advantage of all support available to us. If we do not know what support we can get or how to access these supports, we can ask our family and friends to help us out or visit Mr Google for help. We need to appreciate the
                                                fact that we have SUPPORT to help us with things we can’t do. That is something to be thankful for.
                                            </p>
                                            <p>
                                                We have to try to APPRECIATE OUR LIVES IN EVERY WAY POSSIBLE. We are the best we can ever be at any point in time.
                                                When we understand this, we will work better with our support team and make the best out of Lives.
                                            </p>


                                            <p>There is no other YOU and there cannot be another you. APPRECIATE YOU.</p>
                                            <p>Feel free to contact us for help at any time. You can leave a message by clicking on the contact us menu above. </p>






                                        </div>
                                        <div className="row mt-50">
                                            <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                                                <div className="blog-post-tag">
                                                    <span>Releted Tags</span>
                                                    <Link to="/blogs">No tags yet</Link>

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