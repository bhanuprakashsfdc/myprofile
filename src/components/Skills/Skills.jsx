import React from 'react';
import './Skills.css';
import { SECTION_NAMES, TITLES, SUBTITLES, SKILLS_DATA } from '../../constants/constants';

const Skills = () => {
  return (
    <div data-scroll-index="3" id="skill">
      <div className="service-section relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-graduation-cap text-theme"></i>
          {SECTION_NAMES.SKILLS}
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {TITLES.SKILLS}
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            {SUBTITLES.SKILLS}
          </p>
        </div>

        <div className="skills-container mt-12 xl:mt-16">
          {SKILLS_DATA.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.percent}%` }}
                >
                  {skill.percent}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
