import React from 'react';
import { NAME, SKILLS, COUNTERS, PHONE, EMAIL, LI, GI } from '../constants/constants';

const AboutUs = () => {
  return (
    <div data-scroll-index="1" id="about">
      <div className="about-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-user text-theme"></i>
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          Streamlining Businesses with  <span className="font-semibold text-theme"> Efficiency</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Hi, my name is <span className="text-black dark:text-white">{NAME}</span> Leveraging over 10 years of experience in building and optimizing business processes, I help companies unlock their full potential with Salesforce.  My expertise lies in
          </p>

        </div>
        <div className="mt-6 section-content">
          <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
            {SKILLS.map((skill, index) => (
              <a key={index} href="#" className="hover:text-theme dark:hover:text-white">
                {skill.name} ({skill.proficiency})
              </a>
            ))}
          </div>

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
            <li>
              <span className="flex-[0_0_6rem]">Phone</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">{ PHONE }</span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Email</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">{ EMAIL }</span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Linkedin</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">{ LI }</span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Github</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">{ GI }</span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Language</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white"> English, Hindi, Telugu</span>
            </li>
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            {COUNTERS.map((counter, index) => (
              <li key={index}>
                <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                  <span>{counter.number}</span>+
                </div>
                <div className="text-sm">{counter.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
