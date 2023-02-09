import React from 'react';
import HomeTwoSingleService from '../../../components/HomeTwoSingleService/HomeTwoSingleService';

const HomeTwoServicesArea = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-100 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 offset-xl-4 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Services</h5>
                           <h1>What We Do For You?</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">





                  <HomeTwoSingleService icon="1" number="1" title="Community Nursing​"
                     content="We have a team of competent and caring Nurses, ready to take care of your nursing needs. 
                  Our Nurses work with individuals and their families to help manage an ailment, keep up well-being and manage any out of hospital care medical needs."
                     link="/community-nursing"
                  />
                  <HomeTwoSingleService icon="2" number="2" title="Specialist Behaviour Support​"

                     content="We offer clinical social help to decrease the danger of hurtful conduct and produce positive results. Our clinicians give proficient individualized examination and techniques that advance  pro-social conduct and improve general well-being."
                     link="/special"
                  />
                  <HomeTwoSingleService icon="3" number="3" title="Therapeutic Support"
                     content="Our Therapeutic Supports and Services are provided to participants over the age of seven(7). These includes:"
                     link="/therapeutic"
                  />
                  <HomeTwoSingleService icon="4" number="4" title="Household Task Support"

                     content="We understand how hard it can be for you to take care of all your household tasks, such as:"
                     link="/household"
                  />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoServicesArea;