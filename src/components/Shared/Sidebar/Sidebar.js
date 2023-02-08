import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Services = <NavLink to="/servicesTwo">NDIS Services </NavLink>
   const Doctors = <NavLink to="/doctors">Doctors </NavLink>
   const Shop = <NavLink to="/shop">Shop</NavLink>
   const News = <NavLink to="/blogSidebar">News</NavLink>
   const Pages = <a href="#">Pages</a>
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
                        <li><Link to="/servicesDetails">Community Nursing</Link></li>
                        <li><Link to="/servicesDetails">Household Task Support</Link></li>
                        <li><Link to="/servicesDetails">Complex Health Care Support</Link></li>
                        <li><Link to="/servicesDetails">Therapeutic Support</Link></li>
                        <li><Link to="/servicesDetails">Social Support and Services</Link></li>
                        <li><Link to="/servicesDetails">More ...</Link></li>
                     </ul>
                  </Collapsible>

                  <Link to={'/'} className="mb-4 d-block">
                     Careers
                  </Link>
                  <Link to={'/about'} className="mb-4 d-block" >
                     Covid-19 updates
                  </Link>



               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;