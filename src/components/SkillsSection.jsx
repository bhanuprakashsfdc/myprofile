import React from "react";
import { FiDownload } from "react-icons/fi";

const SkillsSection = ({ skills, cvLink }) => {
  return (
    <div className="px-4 py-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
      <div className="text-sm font-medium text-black dark:text-white">Skills</div>
      <div className="flex items-center justify-between my-4 space-x-4 skills_circle text-center">
        {skills.map((skill, index) => (
          <div className="progressCircle" key={index}>
            <div
              className="relative w-12 h-12 circle"
              data-percent={skill.percent}
              data-circlefill={skill.circleFill}
              data-circleempty={skill.circleEmpty}
            >
              <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                {skill.percent}%
              </div>
            </div>
            <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href={cvLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover"
        >
          DOWNLOAD CV
          <FiDownload className="animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;
