import React, { useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">Autocrypt</a>
      </div>
      <ul className="app__navbar-links">
        {["benefit", "pricing", "testimonials", "partner"].map((link) => (
          <li key={link} className="app__flex p-text">
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-btns">
        <button className="app__navbar-btn-login">Login</button>
        <button className="app__navbar-btn-register">Register</button>
      </div>
      {/**Mobile Menu */}
      <div className="app__navbar-menu">
        <AiOutlineMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["benefit", "pricing", "testimonials", "partner"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="app__navbar-btns">
              <button className="app__navbar-btn-login">Login</button>
              <button className="app__navbar-btn-register">Register</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
