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
      <AiOutlineMenu className="menu-icon" onClick={handleNav} />
      {nav && (
        <div className="navbar-mobile">
          <a className="navbar-botton-mb">
            <AiOutlineHome size={20} /> <span>Home</span>
          </a>
          <a className="navbar-botton-mb">
            <BsPerson size={20} /> <span>About</span>
          </a>
          <a className="navbar-botton-mb">
            <AiOutlineProject size={20} /> <span>Work</span>
          </a>
          <a className="navbar-botton-mb">
            <AiOutlineMail size={20} /> <span>Contact</span>
          </a>
        </div>
      ) }
       <div className="navbar-desktop">
           <a className="navbar-botton-dt">
            <AiOutlineHome size={20} />
          </a>
          <a className="navbar-botton-dt">
            <BsPerson size={20} />
          </a>
          <a className="navbar-botton-dt">
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
