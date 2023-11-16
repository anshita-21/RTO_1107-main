import React from 'react';
import './Navbar.css';
import {AiOutlineCar} from "react-icons/ai"
import {Link} from "react-scroll";
const Navbar = () => {



  return (

    <div className="nav-content">
      <div className="nav-left">
        <div className="logo">
          <AiOutlineCar/>
        </div>
         <div className='title'>RTO</div>
      </div>
      <div className="nav-right">
        <ul>
          <li>Licence Appointment</li>
          <li><Link to='top-routes' smooth={true} offset={-130} duration={500} >Top Routes</Link></li>
          <li><Link to='cars' smooth={true} offset={0} duration={500} >Transports</Link></li>
          <li><Link to='contact' smooth={true} offset={100} duration={1000} >Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
