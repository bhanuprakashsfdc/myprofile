import React from 'react';
import { SECTION_NAMES, TITLES, SUBTITLES, SERVICE_DETAILS } from '../constants/constants';

const Services = () => {
  return (
    <div data-scroll-index="2" id="service">
      <div className="service-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-briefcase text-theme"></i>
          {SECTION_NAMES.SERVICES}
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {TITLES.SERVICES}
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            {SUBTITLES.SERVICES}
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 service-card-wrapper sm:grid-cols-2 lg:gap-7 2xl:gap-8">
          {SERVICE_DETAILS.map((service) => (
            <div key={service.id} className="card-item group hover:border-theme dark:hover:border-theme bordthe">
              <div className="absolute transition duration-300 md:top-10 icon right-6 top-7 md:right-8 group-hover:-rotate-45 lg:top-11"></div>
              <div className="text-5xl font-extrabold transition duration-300 md:text-6xl number lg:text-7xl text-greyBlack opacity-30 group-hover:opacity-100">
                {service.id}
              </div>
              <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl">
                {service.title}
              </h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
