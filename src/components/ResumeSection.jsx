import React from 'react';

const ResumeSection = () => {
  return (
    <div data-scroll-index="4" id="resume">
      <div className="resume-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        {/* Resume Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-folder-open text-theme"></i>
          RESUME
        </div>

        {/* Work Experience Section */}
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Work <span className="font-semibold text-theme">Experience</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
          Performed functional and technical system activities, including business process configuration, coordinate testing, work with offshore team and Onshore team and vendor on development activities, manage project queue and scheduled releases, etc.
          </p>
        </div>

        {/* Experience Items */}
        <div className="experience-timeline">
          <div className="experience-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                Confidental
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                Dec, 2021 - Current
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                Salesforce Solution Architect
              </h4>
              <li>
                Design and lead technical implementations and work with cross-functional teams to ensure successful deployment of Salesforce solutions.
              </li>
              <li>
                Identify solutions and help build services offerings to support rapid time to value for Salesforce implementations.
              </li>
              <li>
                Work with management in analyzing problems, providing solutions, or recommending corrective action and implementing solutions.
              </li>
              <li>
                Manage the requirements gathering, code review and development of updates to and the creation of pages using aura in working with developer and SMEs.
              </li>
            </div>
          </div>

          <div className="experience-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                Shell India, Bangalore, India
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                Jul 19 - Dec 21
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
               Salesforce Technical Lead
              </h4>
              <li>
                Ownership of the architectural strategy and solution design of our client's Salesforce Platform Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.
              </li>
              <li>
                Managed team of 10 employees, overseeing hiring, training, and professional growth of employees.
              </li>
              <li>
                Conducted workload assessments and devised new operational processes that led to a 40% increase in productivity.
              </li>
              <li>
                Develop Lightning Components, CSS Styling and UI Design to enhance look and feel of the Lighting apps and Leveraged Server-side apex Controllers to retrieve data from various API's and display on the Lightning Components.
              </li>
            </div>
          </div>

          <div className="experience-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                Larsen & Toubro InfoTech Ltd, Bangalore, India
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                Aug 18 - Jun 19
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                Salesforce Senior Consultant
              </h4>
              <li>
                Worked on Migration of visual force pages into lightning using Aura Framework Design new lightning components based on client requirements.
              </li>
              <li>
              Knowledge on copado tool to continuous deployment and migration
              </li>
            </div>
          </div>
          <div className="experience-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                Brillio, Bangalore, India
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                Jan 18 - Aug 18
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
               Business Technology Analyst
              </h4>
              <li>
                Involved in daily scrum and sprint planning meetings and ran daily agile status calls with the project manager and development team.
              </li>
              <li>
              Designed POC on Implementing Einstein Bot to communities.
              </li>
              <li>
              Responsible for coding, code Review, debugging and involving in business, end users to understand requirements and deployment team.
              </li>
            </div>
          </div>
          <div className="experience-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                Infosys BPM Limited, Bangalore, India
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                Jul 16 - Jan 18
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                 Senior Process Executive
              </h4>
              <li>
                Experienced Salesforce.com Developer and Administrator in the organization. Also Participated in translating and documentation of business requirements into functional requirements.
              </li>
              <li>
                Analyzed the business requirements and customize standard CRM functionality and developed new custom functionality.
              </li>
              <li>
              Exported data from legacy system and imported into SFDC through Apex data loader for data migration.
              </li>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Education</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            
          </p>
        </div>

        {/* Education Items */}
        <div className="education-timeline">
          <div className="education-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                JNTU University
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                2013 - 2015
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                 Master of Business Administration
              </h4>
            </div>
          </div>

          <div className="education-item mb-8">
            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
              <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                SKU Anantapur
              </h6>
              <p className="text-[13px] md:text-sm text-theme">
                2010 - 2013
              </p>
            </div>
            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                 Bachelor of Electronics
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
