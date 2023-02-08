import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Services = <NavLink to="/services">NDIS Services </NavLink>

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
                  <Link to={'/about'} className="mb-2 d-block" >
                     About
                  </Link>

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

                  <Link to={'/career'} className="mb-4 d-block">
                     Careers
                  </Link>
                  <Link to={'/covid19-updates'} className="mb-4 d-block" >
                     Covid-19 updates
                  </Link>



               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;