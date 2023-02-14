import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoSingleService = ({ icon, number, title, content, link }) => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-12">
            <div className="service-box service-box-2 mb-30 pos-rel d-flex
            flex-column justify-content-center align-items-center"
               style={{ height: "20rem" }}
            >
               <div className="service-thumb">
                  <img src={`img/services/service-icon-${icon}.png`} alt="" width={'80px'} />
               </div>
               <div className="service-content service-content-2 text-center">
                  <h4><Link to={`${link}`}>{title}</Link></h4>
                  <p>{content}</p>
                  <Link className="service-link" to={`${link}`}><i className="fas fa-arrow-right"></i>Read More</Link>
               </div>
               {/* <div className="service-number">
                  <h1 className="service-big-number">{`0${number}`}</h1>
               </div> */}
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleService;