import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Services = <NavLink to="/services">NDIS Services </NavLink>
   const About = <NavLink to="/about">About </NavLink>

   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Link to={'/'} className="mb-4 d-block">
                     Home
                  </Link>
                  <Collapsible trigger={About} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><Link to="/background">Background</Link></li>

                     </ul>
                  </Collapsible>

                  <Collapsible trigger={Services} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><Link to="/community-nursing">Community Nursing</Link></li>
                        <li><Link to="/complex-health-care-support">Complex Health Care Support</Link></li>
                        <li><Link to="/social-support">Social Support and Services</Link></li>
                        <li><Link to="/therapeutic">Therapeutic Support</Link></li>
                        <li><Link to="/household">Household Task Support</Link></li>
                        <li><Link to="/exercise-phy">Exercise Physiologist</Link></li>
                        <li><Link to="/services">More Services</Link></li>
                     </ul>
                  </Collapsible>



                  <Link to={'/contact'} className="mb-4 d-block">
                     Contact
                  </Link>
                  <Link to={'/career'} className="mb-4 d-block">
                     Careers
                  </Link>
                  <Link to={'/covid19-updates'} className="mb-4 d-block" >
                     Covid-19 updates
                  </Link>
                  <a href="https://forms.gle/F8g3wWGTuNMjoDnC8">Refer a client</a>


               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;