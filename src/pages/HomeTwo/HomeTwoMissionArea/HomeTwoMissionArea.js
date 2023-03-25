import React from 'react';
import HomeTwoSingleMission from '../../../components/HomeTwoSingleMission/HomeTwoSingleMission';

const HomeTwoMissionArea = () => {

   return (
      <>
         <section className="about-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-10 col-md-12">
                     <div className="about-title mb-20">
                        <h5 className="pink-color">Our Mission & Vision</h5>
                        <h1>Professional and Friendly Health Care.</h1>
                     </div>
                     <div className="about-text mission-about-text">
                        <p>Helping people with disabilities live their lives beyond limits by inspiring them effectively, employing best communication methods, pushing them beyond the comfort zones to achieving extraordinary results.
                        </p><br />
                     </div>
                     <div className="mission-vision-list pr-90 fs-5">
                        <HomeTwoSingleMission icon="1" content="We live to maximise the potential of persons living with disability, by building on their strengths, applying, modern technology and principles for improved results." />
                        <HomeTwoSingleMission icon="1" border="border-0" content="We build the capacity of disabled people, to enable them interact effectively with their environment by applying an individualised and holistic care approach that helps determine the person’s strength, weakness and abilities." />
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-lg-none d-xl-block">
                     <div className="mv-right-img pos-rel mb-30">
                        <img src="img/about/caregiver2.png" alt="" />
                     </div>
                     <div className="testi-quato-icon about-icon-white d-none d-xl-block">
                        <img src="img/appoinment/NDIS.png" alt="" width={'100%'} />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoMissionArea;