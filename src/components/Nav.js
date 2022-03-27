import React, { useState, useEffect } from "react";
import "./Nav.css";
import { RiSearchLine } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
        alt="Netflix Logo"
      />

      <ul className="nav__lists">
        <li className="nav__list active">Home</li>
        <li className="nav__list">TV Shows</li>
        <li className="nav__list">Movies</li>
        <li className="nav__list">New & Popular</li>
        <li className="nav__list">My List</li>
      </ul>

      <ul className="right__nav">
        <li className='right__navList'>
          <RiSearchLine />
        </li>
        <li className='right__navList'>Kids</li>
        <li className='right__navList'>
          <BsFillBellFill />
        </li>
        <li className='right__navList'>
          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="User Avatar"
          />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
