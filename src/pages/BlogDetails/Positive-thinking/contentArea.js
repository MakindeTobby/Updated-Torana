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
                                    Positve Thinking a powerful act.
                                </h3>
                                <article className="postbox post format-image mb-40">

                                    <div className="postbox__thumb mb-35">
                                        <img src="img/blog/blog-1.jpg" alt="blog img" />
                                    </div>
                                    <div className="postbox__text bg-none">
                                        <div className="post-meta mb-15">
                                            <span><i className="far fa-calendar-check"></i> December 15, 2020 </span>
                                            <span><Link to="/blogDetails"><i className="far fa-user"></i> Florence Unobe</Link></span>
                                            <span><Link to="/blogDetails"><i className="far fa-comments"></i> No Comments</Link></span>
                                        </div>

                                        <div className="post-text mb-20">
                                            <p>Life can be hard especially when we are faced with multiple health challenges that attack our bodies. The worse of it all is knowing
                                                that we may lose your lives someday if our condition deteriorates. This is a honest reality right?</p>

                                            <p><b>Question: How honest is this reality?</b></p>
                                            <p>
                                                The good news is, the POWER to overcome all challenges lies with us. It is also free of charge and present in our minds.
                                            </p>
                                            <p><b>What do I really mean?</b></p>
                                            <p>Man responds more to how we feel and all that our bodies presents to us. The reason being
                                                that our bodies speak to our minds all the time; which can be likened to an INVOLUNTARY ACTION.</p>
                                            <p>
                                                Literarily, the opposite of Involuntary is voluntary. What this means is, we need a voluntary action to overcome an involuntary action. While our
                                                body feeds our mind with negative ideas, we have the power to overcome these negative thoughts with positive notions.
                                            </p>
                                            <p>
                                                As simple as speaking to ourselves may be, this act can be extremely difficult when we are faced with challenges.
                                                This is one of the most powerful ways to live a free life, in the midst of pain and suffering.
                                            </p>
                                            <p>
                                                <b>Question: Do speaking positively, change my situation?</b>
                                            </p>
                                            <p>NO, it does not in the short term and YES, it can in the long term. We can borrow insight from nature. When we plant a seed, it does not grow and bear fruits on the first day right? It actually takes time to germinate. While we may not see the activities that take
                                                place does not mean nothing is happening. Shortly, we begin to see the shoot and then the tree in some cases.</p>
                                            <p>
                                                Between the planting and the germination is TIME. We would need patience to get results. It is important to note that not all seeds planted germinate. Some seeds may require fertilizers, sufficient sunlight, regular watering and many more. We must me mindful of our seeds
                                                to ensure we provide the right environment for it to grow.
                                            </p>
                                            <p>
                                                This principle applies to us being Positive in negative situations. Some of us may need to fill our minds with positive information gotten from engaging with positive people, watching positive programs and focusing on positive things. Others may not need to push hard to get desired results. In any case, the results would come if we are consistent. However, not everyone would get or see results in a lifetime,
                                                Sad right? But the good news is being positive improves our quality of life.
                                            </p>
                                            <p>
                                                We can also begin to heal when we share our problems with trusted and positive people. When we lack the will and the strength to be positive,
                                                persons we trust may be able to provide support to us by speaking positively about our challenges.
                                            </p>

                                            <p><b>Finally, IN ALL SITUATIONS, SPEAK POSITIVELY AND THINGS CAN ONLY GET BETTER FOR US ALL.</b></p>


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