import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ image, title, content, link }) => {
    return (

        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="service-box-3 mb-30 text-center">
                    <div className="service-thumb" style={{ height: "16rem", overflow: "hidden" }}>
                        <Link to={`${link}`}>
                            <img src={image} alt="" />
                        </Link>
                    </div>
                    <div className="service-content-box align-items-center">
                        <div className="service-content" style={{ height: "15rem", overflow: "hidden" }}>
                            <h3><Link to={`${link}`}>{title}</Link></h3>
                            <p>{content}</p>
                        </div>
                        <Link to={`${link}`} className="service-link">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;