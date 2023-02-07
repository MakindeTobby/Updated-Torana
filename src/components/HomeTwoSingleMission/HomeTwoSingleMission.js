import React from 'react';

const HomeTwoSingleMission = ({ icon, border, content }) => {

   return (
      <>
         <div className={border ? `mv-single-list d-flex ${border}` : "mv-single-list d-flex"}>
            <div className="mv-icon">
               <img src={`img/icon/mv-icon-${icon}.png`} alt="#" />
            </div>
            <div className=" fs-5">
               <p>{content}</p>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleMission;