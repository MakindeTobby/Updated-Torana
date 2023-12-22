import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-area pt-80 pb-90" data-background="assets/img/bg/bg-map.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30" style={{ height: "22rem" }}>
                                <a href='mailto:info@toranacareaustralia.com.au'>   <i className="fas fa-envelope"></i></a>
                                <h3>Mail Here</h3>
                                <a href='mailto:info@toranacareaustralia.com.au'> info@toranacareaustralia.com.au</a>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30" style={{ height: "22rem" }}>
                                <a href="https://goo.gl/maps/jsyfzM5KNxZHYMu59"><i className="fas fa-map-marker-alt"></i></a>
                                <h3>Visit Here</h3>
                                <a href="https://goo.gl/maps/jsyfzM5KNxZHYMu59">19/1 Devenish street Taylor 2913</a>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30" style={{ height: "22rem" }}>
                                <a href='tel:+61499322078'> <i className="fas fa-phone"></i></a>
                                <h3>Call Here</h3>
                                <a href='tel:+61499322078'>+61 499 322 078</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;