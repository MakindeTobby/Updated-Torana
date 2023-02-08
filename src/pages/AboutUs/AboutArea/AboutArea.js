import React, { useState } from 'react';
import CommonSectionArea from '../../../components/CommonSectionArea/CommonSectionArea';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const AboutArea = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>
         <ModalVideo channel='custom' url='https://toranacareaustralia.org.au/wp-content/uploads/2020/08/About-Torana-Care-Australia.mp4' autoplay isOpen={isOpen}
            onClose={() => setOpen(false)} />

         <CommonSectionArea area_header={
            <div className="about-left-side pos-rel mb-30">
               <div className="about-front-img pos-rel">
                  <img src="img/about/seth.jpg" alt="" />
                  <button onClick={() => setOpen(true)} className="popup-video about-video-btn white-video-btn">
                     <i className="fas fa-play"></i></button>
               </div>
               <div className="about-shape">
                  <img src="img/about/about-shape.png" alt="" />
               </div>
            </div>
         } />
      </>
   );
};

export default AboutArea;