import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDetailsArea = () => {
   return (
      <>
         <div className="doctor-details-area pt-115 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="doctor-details-box">
                        <div className="section-title pos-rel mb-25">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png"
                                 alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">MESSAGE FROM THE CHAIRMAN</h5>
                              <h1>What to know.</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-25s">
                           <p>The safety of all participants and workers is our organisation’s top priority.
                              We have an obligation to respond to pandemics in a timely and effective manner.
                              Pandemics are high-risk situations that develop quickly. They have the potential to severely
                              impact the health of workers and participants. As work within the disability sector often requires
                              close contact between workers and participants, putting in place social distancing and social isolation
                              measures may also impact our ability to provide services.
                              Therefore, we will ensure that our response to a pandemic is:</p>
                           <div className="ser-fea-list fix">
                              <ul>
                                 <li><i className='fas fa-check'></i> pre-planned</li>
                                 <li><i className='fas fa-check'></i>risk-managed</li>
                                 <li><i className='fas fa-check'></i>flexible, and</li>
                                 <li><i className='fas fa-check'></i>person-centred</li>
                              </ul>
                           </div>

                        </div>

                        <div className="service-details-text mb-25">
                           <p>
                              <b>Participant vulnerability</b> We understand that people with disability are more vulnerable to
                              developing illness during a pandemic because they are more likely to:
                              require the use of medical equipment (e.g. urinary catheters, tracheostomies).
                           </p>
                           <div className="ser-fea-list service-details-feature fix mb-30">
                              <ul>
                                 <li><i className="fas fa-check"></i> have complex pre-existing conditions including multiple morbidities</li>
                                 <li><i className="fas fa-check"></i> have wounds</li>
                                 <li><i className="fas fa-check"></i> have a compromised immune system (e.g. due to pre-existing conditions or medications)</li>
                                 <li><i className="fas fa-check"></i> require the use of medical equipment (e.g. urinary catheters, tracheostomies).</li>

                              </ul>
                              <p>
                                 We will manage risks for all our participants and take into account each participant’s wishes, goals and situation.
                              </p>
                              <p>
                                 <b>Preparedness and planning</b>
                              </p>
                              <p>
                                 As a Support provider, it is our responsibility and obligation to meet the NDIS Code of Conduct and NDIS Practice Standards in regards to the supports and services we provide. Irrespective of the risks associated with our service delivery, in a pandemic, we have adequately identified these risks and we do have a
                                 comprehensive response plan to respond quickly and efficiently. Our pandemic management plan identifies:
                              </p>

                              <ul>
                                 <li><i className='fas fa-check'></i>all the key actions we need to take to prepare for a pandemic</li>
                                 <li><i className='fas fa-check'></i>our plan for ensuring business continuity</li>
                                 <li><i className='fas fa-check'></i>the names, contact details and roles of people required to ensure business continuity</li>
                                 <li><i className='fas fa-check'></i>action plans to keep our participants and staff safe</li>
                                 <li><i className='fas fa-check'></i>action plan to keep participants that are most at risk safe</li>
                                 <li><i className='fas fa-check'></i>how we will activate our pandemic plan</li>
                                 <li><i className='fas fa-check'></i>We will review our pandemic management plan annually (at a minimum) to ensure it is current</li>
                              </ul>

                           </div>

                        </div>


                     </article>
                  </div>





                  <div className="col-xl-5 col-lg-4">
                     <div className="service-widget mb-50">
                        <div className="team-wrapper team-box-2 team-box-3 text-center mb-30">
                           <div className="team-thumb">
                              <img src="img/team/Covid-19.jpg" alt="" />
                           </div>
                        </div>
                     </div>

                     <div className="service-widget mb-80">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Get Some Advice?</h3>
                        </div>
                        <form className="service-contact-form" action="">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-user mb-20">
                                    <input type="text" placeholder="Enter your name" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-mail mb-20">
                                    <input type="text" placeholder="Enter your email" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-hourglass">
                                    <select className="form-select select_style" aria-label="Default select example">
                                       <option defaultValue="Select type of care">Select type of care</option>
                                       <option defaultValue="1">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="ser-form-btn text-center mt-40">
                           <a href="#" className="primary_btn btn-icon ml-0"
                              style={{ animationDelay: '0.6s' }} tabIndex="0"><span>+</span>Request for call</a>
                        </div>
                     </div>

                  </div>
               </div>
               <div className="col-xl-12 col-lg-4">
                  <div className='ser-fea-list service-details-feature fix mb-30'>
                     <p>
                        <b>
                           Basic prevention measures during a pandemic
                        </b>
                     </p>
                     <p>
                        There are basic hygiene and cleaning measures that we take at all times. These are recorded in detail in our
                        infection control and waste management policies. Some basic measures that we take include:
                     </p>
                     <ul>
                        <li><i className='fas fa-check'></i>washing hands frequently and at relevant times</li>
                        <li><i className='fas fa-check'></i>maintaining respiratory hygiene at all times</li>
                        <li><i className='fas fa-check'></i>ensuring all areas are cleaned with appropriate tools and cleaning agents</li>
                        <li><i className='fas fa-check'></i>managing all forms of waste in a safe and suitable way</li>
                        <li><i className='fas fa-check'></i>wearing appropriate PPE when required.</li>
                     </ul>

                     <p>
                        During a pandemic we recognise that it is important to maintain a high level
                        of hygiene and continue this when social distancing and/or isolation is required.
                     </p>

                     <p>
                        <b> COVID-19 PROTOCOLS</b>
                     </p>
                     <p>Social distancing</p>
                     <p>Social distancing involves restrictions on movement that may need to be enforced to prevent/slow the spread of an illness. To be effective,
                        it must apply to all workers and participants. Social distancing typically involves:
                     </p>

                     <ul>
                        <li><i className='fas fa-check'></i>being at least 1.5 metres apart from others at all times</li>
                        <li><i className='fas fa-check'></i>limiting unnecessary touching (e.g. handshakes and hugging)</li>
                        <li><i className='fas fa-check'></i>if possible, limiting the number of workers on shift at one time, while still maintaining a high level of support.</li>
                        <li><i className='fas fa-check'></i>limiting face-to-face meetings where possible (i.e. conducting most meetings over the phone instead)</li>
                        <li><i className='fas fa-check'></i>limiting food handling and sharing</li>
                        <li><i className='fas fa-check'></i>only going out for essential reasons such as:</li>
                        <li><i className='fas fa-check'></i>attending work/school</li>
                        <li><i className='fas fa-check'></i>purchasing food and medicine</li>
                        <li><i className='fas fa-check'></i>medical appointments</li>
                        <li><i className='fas fa-check'></i>personal emergencies</li>
                        <li><i className='fas fa-check'></i>avoiding all non-essential national and international travel</li>
                        <li><i className='fas fa-check'></i>avoiding mass gatherings</li>
                        <li><i className='fas fa-check'></i>working/studying from home if practicable.</li>
                     </ul>

                     <p>
                        <b>
                           Isolation
                        </b>
                     </p>
                     <p>
                        We may need to have a worker or participant in isolation if they:
                     </p>
                     <ul>
                        <li><i className='fas fa-check'></i>have been tested positive for a pandemic-level illness</li>
                        <li><i className='fas fa-check'></i>are experiencing symptoms of a pandemic-level illness</li>
                        <li><i className='fas fa-check'></i>have recently been in contact with someone that has tested positive for a pandemic-level illness</li>
                        <li><i className='fas fa-check'></i>have recently travelled to a country experiencing a large-scale outbreak of a pandemic-level illness.</li>
                     </ul>
                     <p>
                        Home isolation typically means that the person being isolated must partake in relevant risk-minimisation measures, including:
                     </p>

                     <ul>
                        <li><i className='fas fa-check'></i>limiting their movements to their home and garden/backyard</li>
                        <li><i className='fas fa-check'></i>observing all appropriate hygiene measures</li>
                        <li><i className='fas fa-check'></i>practicing social distancing (as outlined above) if there are other people present in the house</li>
                        <li><i className='fas fa-check'></i>moving quickly through or avoiding common areas</li>
                        <li><i className='fas fa-check'></i>wearing masks and other necessary PPE</li>
                        <li><i className='fas fa-check'></i>using a separate bathroom, if available</li>
                        <li><i className='fas fa-check'></i>using separate cutlery, linens and towels</li>
                        <li><i className='fas fa-check'></i>avoiding food handling and sharing.</li>
                     </ul>
                     <p>
                        We will support workers in isolation by offering opportunities to work from home or making appropriate leave arrangements. In addition, we will provide workers with counselling and other resources as required. Although necessary, isolation can be a stressful
                        experience for participants as well. Therefore, we will ensure that participants in isolation:
                     </p>
                     <ul>
                        <li><i className='fas fa-check'></i>are still able to receive essential supports and services</li>
                        <li><i className='fas fa-check'></i>are isolated in a comfortable, clean and well-ventilated environment</li>
                        <li><i className='fas fa-check'></i>keep in touch with their support network via various telecommunication methods</li>
                        <li><i className='fas fa-check'></i>learn about and discuss their experience</li>
                        <li><i className='fas fa-check'></i>keep normal daily routines where possible (e.g. eating, sleeping and exercise)</li>
                        <li><i className='fas fa-check'></i>partake in home-based activities they enjoy.</li>
                     </ul>

                     <p>
                        <b>
                           Restrictive practices
                        </b>
                     </p>
                     <p>
                        Restrictive practices are used in the event that a participant responds to a situation
                        with a behaviour of concern. These behaviours often stem from triggering factors such as a maladaptive environment, fear or in response to a real or perceived threat. In the event of a pandemic outbreak, these factors may be heightened, thus it is our responsibility to ensure we provide comprehensive and suitable support to inform the participant of what is occurring and why certain restrictions are in place. If a restrictive practice is utilised, we will follow all standard debriefing,
                        reporting and legislative procedures outlined in the restrictive practice policy.
                     </p>

                     <p>
                        Whilst home isolation for therapeutic reasons is not considered a restrictive practice, it is important that such requirements during these events are discussed with the participant and their support network. This applies to all participants,
                        not only those that have restrictive practices incorporated in the positive behaviour support plan.
                     </p>
                     <p>
                        <b>
                           Incidents and complaints
                        </b>
                     </p>

                     <p>
                        We will address any complaints or incidents that arise during (or as a result of) a pandemic situation. Where possible, we will always follow the same procedures that are specified in relevant policies, processes and legislation. We will also make all reasonable attempts fast-track incident and complaint
                        reports that arise as a result of a pandemic as reports of this nature are likely to be urgent and time-sensitive.
                     </p>

                     <p>
                        <b>
                           Privacy and confidentiality
                        </b>
                     </p>
                     <p>
                        We are committed to maintaining privacy and confidentiality in accordance with all relevant policies
                        and legislation. Under usual circumstances, the participant can decide whether or not they reveal health information to us.The only time when we will request information about a health condition is if it is a notifiable disease under the National Notifiable Disease Surveillance System.
                        This may occur in the event of a pandemic. We will request this information in order to:
                     </p>

                     <ul>
                        <li><i className='fas fa-check'></i>give the person the support they need</li>
                        <li><i className='fas fa-check'></i>ensure the safety of all people within our organisation, including participants, workers and visitors</li>
                        <li><i className='fas fa-check'></i>put risk-minimisation measures in place.</li>
                     </ul>
                     <p>
                        We do not tolerate bullying, harassment or discrimination for any reason. This includes bullying, harassment or discrimination on the basis of disclosed health information. Any such instance will be subject to Investigation and disciplinary actions.
                        Incidents would also be addressed in accordance with our incident management policies/processes.
                     </p>
                     <p>
                        <b>
                           Communication strategies
                        </b>
                     </p>
                     <p>
                        As a pandemic situation is likely to develop very quickly, we understand the importance of consistent communication across the entire organisation.
                        To do this, we will implement the following strategies as required:
                     </p>
                     <ul>
                        <li><i className='fas fa-check'></i>utilise appropriate telecommunications (email, phone, online chat etc.) to:</li>
                        <li><i className='fas fa-check'></i>share important operational updates across the organisation</li>
                        <li><i className='fas fa-check'></i>make working from home arrangements</li>
                        <li><i className='fas fa-check'></i>conduct meetings and appointments</li>
                        <li><i className='fas fa-check'></i>provide relevant information to participants in a format they are most likely to understand, this may include the use of communication aids such as:</li>
                        <li><i className='fas fa-check'></i>easy read documents</li>
                        <li><i className='fas fa-check'></i>choice boards</li>
                        <li><i className='fas fa-check'></i>communication apps</li>
                        <li><i className='fas fa-check'></i>alphabet boards.</li>
                        <li><i className='fas fa-check'></i>record key events and decisions in a way that allows workers and participants to reference them in in the future.</li>
                     </ul>
                     <p><b>Definitions</b></p>
                     <table className="table">
                        <thead>
                           <tr>
                              <th scope="col">TERM</th>
                              <th scope="col">DESCRIPTION</th>

                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">notifiable condition</th>
                              <td>A health condition that must be declared to applicable personnel
                                 under the provisions made by the National Notifiable Disease Surveillance System.</td>

                           </tr>
                           <tr>
                              <th scope="row">pandemic</th>
                              <td>
                                 An outbreak of an infectious disease that affects a significant portion of the
                                 population across a large geographic area.
                              </td>

                           </tr>
                           <tr>
                              <th scope="row">social distancing</th>
                              <td>
                                 A set of actions that are designed to increase distance between individuals
                                 in order to slow or prevent the spread of an infectious disease.
                              </td>

                           </tr>
                           <tr>
                              <th scope="row">social isolation</th>
                              <td>
                                 The act of completely removing all interaction and contact with anyone outside of your household and
                                 remaining within the confines of your residence for a specific period of time.
                              </td>

                           </tr>

                        </tbody>
                     </table>
                     <p>
                        We will continue to provide updates to our valued participants and their families as we work towards providing
                        the safest and the highest quality of support and services.
                     </p>
                     <p>
                        Thank you
                     </p>
                     <p>
                        <b>
                           Dr. Michael Anefu Unobe
                        </b>
                     </p>
                     <p>
                        <b>
                           MBBS,Fellow(T&Rs)Path, FRACGP
                        </b>
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
};

export default DoctorDetailsArea;