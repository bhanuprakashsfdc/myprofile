import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaFileAlt, FaTasks, FaRss, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { SiInstagram, SiBehance, SiLinkedin, SiDribbble, SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import siteLogo from '../assets/img/site-logo.svg'; 

const MobileMenuSideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 px-3 bg-white/10 mobile-menu-bar sm:px-6 backdrop-blur-md xl:hidden">
        <div className="text-lg font-medium name">
          <Link to="/" className="flex items-center gap-2 text-black dark:text-white">
            <img src={siteLogo} alt="Minfo" />
            <span>Minfo</span>
          </Link>
        </div>
        {/* Mobile Hamburger Menu Start */}
        <button
          className="w-12 h-12 border rounded-full hamburger menu_toggle bg-white dark:bg-nightBlack border-platinum dark:border-greyBlack flex-center"
          type="button"
          aria-label="Open Mobile Menu"
          onClick={toggleMenu}
        >
          <FaBars className="w-6" />
        </button>
        {/* Mobile Hamburger Menu End */}
      </div>
      <div
        className={`mobile-menu fixed top-0 ${
          isMenuOpen ? 'right-0' : '-right-full'
        } w-full max-w-mobilemenu bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 py-12 px-8 overflow-y-scroll`}
      >
        <button
          className="absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack"
          aria-label="Close Menu"
          onClick={toggleMenu}
        >
          <IoMdClose />
        </button>
        <div className="mb-6 text-lg font-medium text-black dark:text-white menu-title">
          Menu
        </div>
        <ul className="space-y-5 font-normal main-menu">
          <li data-scroll-nav="0" className="relative group active">
            <Link to="#home" className="flex items-center space-x-2 group">
              <FaHome className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Home
              </span>
            </Link>
          </li>
          <li data-scroll-nav="1" className="relative group">
            <Link to="#about" className="flex items-center space-x-2 group">
              <FaUser className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                About
              </span>
            </Link>
          </li>
          <li data-scroll-nav="2" className="relative group">
            <Link to="#" className="flex items-center space-x-2 group">
              <FaBriefcase className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Service
              </span>
            </Link>
          </li>
          <li data-scroll-nav="3" className="relative group">
            <Link to="#skill" className="flex items-center space-x-2 group">
              <FaGraduationCap className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Skills
              </span>
            </Link>
          </li>
          <li data-scroll-nav="4" className="relative group">
            <Link to="#resume" className="flex items-center space-x-2 group">
              <FaFileAlt className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Resume
              </span>
            </Link>
          </li>
          <li data-scroll-nav="5" className="relative group">
            <Link to="#portfolio" className="flex items-center space-x-2 group">
              <FaTasks className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Portfolio
              </span>
            </Link>
          </li>
          <li data-scroll-nav="6" className="relative group">
            <Link to="#blog" className="flex items-center space-x-2 group">
              <FaRss className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Blog
              </span>
            </Link>
          </li>
          <li data-scroll-nav="7" className="relative group">
            <Link to="#contact" className="flex items-center space-x-2 group">
              <FaEnvelope className="w-5 text-black dark:text-white group-[&.active]:text-theme" />
              <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <div className="pt-6 border-t border-white/10">
          <h5 className="mb-2 text-sm font-normal text-black dark:text-white">
            Social
          </h5>
          <ul className="flex gap-3 social-icons">
            <li>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <SiInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.behance.com" aria-label="Behance">
                <SiBehance />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <SiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.dribbble.com" aria-label="Dribbble">
                <SiDribbble />
              </a>
            </li>
            <li>
              <a href="https://www.github.com" aria-label="GitHub">
                <SiGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuSideBar;
