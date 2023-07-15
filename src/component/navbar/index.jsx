import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import {BsPerson} from 'react-icons/bs'

import "./navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <AiOutlineMenu className="menu-icon" size={30} onClick={handleNav} />
      {nav && (
        <div className="navbar-mobile">
          <a className="navbar-botton-mb" href="#home" onClick={() => setNav(false)} >
            <AiOutlineHome size={20} /> <span>Home</span>
          </a>
          <a className="navbar-botton-mb" href="#work" onClick={() => setNav(false)}>
            <BsPerson size={20} /> <span>Work</span>
          </a>
          <a className="navbar-botton-mb" href="#projects" onClick={() => setNav(false)}>
            <AiOutlineProject size={20} /> <span>Projects</span>
          </a>
          <a className="navbar-botton-mb" onClick={() => setNav(false)}>
            <AiOutlineMail size={20} /> <span>Contact</span>
          </a>
        </div>
      ) }
       <div className="navbar-desktop">
           <a className="navbar-botton-dt" href="#home">
            <AiOutlineHome size={20} />
          </a>
          <a className="navbar-botton-dt" href="#work">
            <BsPerson size={20} />
          </a>
          <a className="navbar-botton-dt" href="#projects">
            <AiOutlineProject size={20} />
          </a>
          <a className="navbar-botton-dt">
            <AiOutlineMail size={20} />
          </a>
        </div>
    </div>
  );
};

export default Navbar;
