import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const ContactSection = () => {
  return (
    <div data-scroll-index="8" id="contact">
      <div className="contact-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <FontAwesomeIcon icon={faEnvelope} className="text-theme" />
          CONTACT
        </div>
        <div className="mb-10 mt-7 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Contact <span className="font-semibold text-theme">Me.</span>
          </h2>
          <p className="mt-3.5 md:mt-5 subtitle max-w-sectionTitle">
            I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute
          </p>
        </div>

        <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="contact-info space-y-6 md:space-y-10 2xl:space-y-12 flex flex-wrap items-center gap-5">
              <li>
                <div className="flex justify-center w-12 icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-theme" />
                </div>
                <div className="flex-1">
                  <h6 className="text-lg text-black dark:text-white">Location</h6>
                  <p className="text-sm">Melbourne Street. No 20</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center w-12 icon">
                  <FontAwesomeIcon icon={faEnvelope} className="text-theme" />
                </div>
                <div className="flex-1">
                  <h6 className="text-lg text-black dark:text-white">E-mail</h6>
                  <p className="text-sm">smith@gmail.com</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center w-12 icon">
                  <FontAwesomeIcon icon={faPhone} className="text-theme" />
                </div>
                <div className="flex-1">
                  <h6 className="text-lg text-black dark:text-white">Phone</h6>
                  <p className="text-sm">+123 456 7890</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
