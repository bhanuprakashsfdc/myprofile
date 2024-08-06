import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Sidebar = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.cd-words-wrapper b');
      const current = Array.from(elements).find(el => el.classList.contains('is-visible'));
      const next = current.nextElementSibling || elements[0];

      current.classList.remove('is-visible');
      next.classList.add('is-visible');
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999 limitsidebar">
      <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl limitsidebar">
        <div className="mx-4 mt-12 text-center user-info lg:mx-6">
          <a href="index.html" className="w-36 h-36 mb-2.5 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full">
            <img 
              src="assets/img/user-sidebar-thumb.png" 
              className="hidden dark:block"
              alt="Bhanu" 
            /> {/* Image for Dark Version */}
            <img 
              src="assets/img/user-sidebar-thumb-light.png" 
              className="dark:hidden"
              alt="Brown Reddick" 
            /> {/* Image for Light Version */}
          </a>
          <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">Brown Reddick</h6>
          <div className="leading-none cd-headline clip is-full-width">
            <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme font-normal">
              <b className="is-visible">Web Developer</b>
              <b>Photographer</b>
              <b>Web Designer</b>
            </h6>
          </div>
          <div className="flex gap-4 mb-2 social mt-4">
            <a
              href="#!"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#!"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#!"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#!"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
          <ul className="space-y-3 text-sm">
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">Residence:</span>
              <span>Canada</span>
            </li>
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">City:</span>
              <span>Toronto</span>
            </li>
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">Age:</span>
              <span>26</span>
            </li>
          </ul>
        </div>
        <div className="px-4 py-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
          <div className="text-sm font-medium text-black dark:text-white">Skills</div>
          <div className="flex items-center justify-between my-4 space-x-4 skills_circle text-center">
            <div className="progressCircle">
              <div className="relative w-12 h-12 circle" data-percent="90" data-circlefill="#00BC91" data-circleempty="#777777">
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">90%</div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">HTML</p>
            </div>
            <div className="progressCircle">
              <div className="relative w-12 h-12 circle" data-percent="80" data-circlefill="#00BC91" data-circleempty="#777777">
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">80%</div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">CSS</p>
            </div>
            <div className="progressCircle">
              <div className="relative w-12 h-12 circle" data-percent="80" data-circlefill="#00BC91" data-circleempty="#777777">
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">80%</div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">JS</p>
            </div>
            <div className="progressCircle">
              <div className="relative w-12 h-12 circle" data-percent="90" data-circlefill="#00BC91" data-circleempty="#777777">
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">90%</div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">PHP</p>
            </div>
          </div>
          <div className="mt-6">
            <a href="mycv.pdf" download target="_blank" className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover">
              DOWNLOAD CV
              <FiDownload className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
