import React from 'react';
import SingleBlog from '../../../components/SingleBlog/SingleBlog';

const HomeTwoBlogs = () => {
    return (
        <>
            <section className="latest-news-area gray-bg pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center pos-rel mb-70">

                                <div className="section-text pos-rel">
                                    <h4>Blog</h4>
                                    <h2>Take a break and read about interesting topics.</h2>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <SingleBlog image="img/blog/blog-1.jpg" title="Positive Thinking a powerful act"
                            content="Life can be hard especially when we are faced with multiple health challenges that attack our bodies. The worse of it all is knowing that "
                            link="/positive-thinking"
                        />
                        <SingleBlog image="img/blog/blog-2.jpg" title="Appreciate You"
                            content="Being alive comes with lots of challenges. Every individual, both Able or Disable face difficulties. Some challenges are physical, but others may not be physical. "
                            link="/appreciate-you"
                        />
                        <SingleBlog image="img/blog/blog-3.png" title="Living Life Beyond Limits"
                            content="Life can be very challenging when you have a disability. Sometimes you may feel like being alive is to no good. For many, there are "

                            link="/living-life-beyond-limits"
                        />

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoBlogs;