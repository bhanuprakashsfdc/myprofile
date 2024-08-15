import React from 'react';

const SidebarNav = () => {
  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">

      {/* Site Logo Start */}
      <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack">
        <a href="index.html">
          <img src="assets/img/loader.png" alt="Bhanu Prakash" />
        </a>
      </div>
      {/* Site Logo End */}

      {/* Main Menu/Navigation Start */}
      <div className="my-4 menu">
        <ul className="space-y-2 text-center *:relative">
          <li data-scroll-nav="0" className="group active">
            <a
              href="#home"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Home"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-home"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="1" className="group">
            <a
              href="#about"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="About"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-user"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="2" className="group">
            <a
              href="#service"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Service"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-briefcase"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="3" className="group">
            <a
              href="#skill"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Skills"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-graduation-cap"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="4" className="group">
            <a
              href="#resume"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Resume"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-file-alt"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="5" className="group">
            <a
              href="#portfolio"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Portfolio"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-tasks-alt"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="6" className="group">
            <a
              href="#blog"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Blog"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-blog"></i>
              </span>
            </a>
          </li>
          <li data-scroll-nav="7" className="group">
            <a
              href="#contact"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Contact"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-envelope"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* Main Menu/Navigation End */}

      {/* Social Media Links Start 
      <div className="flex gap-4 mb-2 social">
        <a
          href="#!"
          className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
          data-title="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#!"
          className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
          data-title="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#!"
          className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
          data-title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="#!"
          className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
          data-title="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      */}
      {/* Social Media Links End */}

    </div>
  );
};

export default SidebarNav;
