import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { NAME, FB, GI, IN, LI, WHATSAPP, X } from '../../constants/constants';
import SkillsSection from '../SkillsSection';

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

  const skillsData = [
    { name: 'Salesforce', percent: 90, circleFill: '#00BC91', circleEmpty: '#777777' },
    { name: 'Apex', percent: 80, circleFill: '#00BC91', circleEmpty: '#777777' },
    { name: 'LWC', percent: 80, circleFill: '#00BC91', circleEmpty: '#777777' },
    { name: 'Web', percent: 90, circleFill: '#00BC91', circleEmpty: '#777777' },
  ];

  return (
    <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999 limitsidebar">
      <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl limitsidebar">
        <div className="mx-4 mt-12 text-center user-info lg:mx-6">
          <a href="index.html" className="w-36 h-36 mb-2.5 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full">
            <img 
              src="assets/img/b.jpg" 
              className="hidden dark:block"
              alt="Bhanu Prakash" 
            /> {/* Image for Dark Version */}
            <img 
              src="assets/img/b.jpg" 
              className="dark:hidden"
              alt="Bhanu Prakash" 
            /> {/* Image for Light Version */}
          </a>
          <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">{ NAME }</h6>
          <div className="leading-none cd-headline clip is-full-width">
            <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme font-normal">
              <b className="is-visible"> Salesforce Consultant </b>
              <b> Web Developer </b>
              <b> Finance Consultant </b>
            </h6>
          </div>
          <div className="flex gap-4 mb-2 social mt-4">
            <a href={LI}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href={GI}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="GitHub"
            >
              <FaGithub />
            </a>
            <a href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a href={FB}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={X}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex-center border border-platinum dark:border-metalBlack text-black dark:text-white hover:bg-white dark:hover:bg-metalBlack transition-all duration-300 hover:text-theme dark:hover:text-theme"
              data-title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href={IN}
              target="_blank"
              rel="noopener noreferrer"
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
              <span>Indian</span>
            </li>
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">City:</span>
              <span>Tirupati, India</span>
            </li>
            {/* 
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">Age:</span>
              <span>26</span>
            </li> 
            */}
          </ul>
        </div>
        <SkillsSection skills={skillsData} cvLink="assets/Resume.pdf" />
      </div>
    </div>
  );
};

export default Sidebar;
