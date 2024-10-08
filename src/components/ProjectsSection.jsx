import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Salesforce Field Service Implementation',
    imgSrc: 'assets/img/portfolio/portfolio-img1.png',
    link: '#',
    tags: ['Salesforce'],
  },
  {
    id: 2,
    title: 'Salesforce Einstein Analytics aka Tableau CRM',
    imgSrc: 'assets/img/portfolio/portfolio-img1.png',
    link: '#',
    tags: ['Salesforce'],
  },
  {
    id: 3,
    title: 'Web Design Implementation',
    imgSrc: 'assets/img/portfolio/portfolio-img1.png',
    link: '#',
    tags: ['Web Development'],
  },
  {
    id: 4,
    title: 'SEO Implementation',
    imgSrc: 'assets/img/portfolio/portfolio-img1.png',
    link: '#',
    tags: ['SEO'],
  },
];

const ProjectsSection = () => {
  return (
    <div data-scroll-index="5" id="portfolio">
      <div className="portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-tasks-alt text-theme"></i>
          PORTFOLIO
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Featured <span className="font-semibold text-theme">Projects</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            Proven ability to transform business processes and digital experiences through successful Salesforce implementations and engaging website designs.
          </p>
        </div>

        <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5 *:relative *:z-1">
          {projects.map((project) => (
            <div key={project.id} className="item group">
              <a
                href={project.link}
                className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
              >
                <div className="img-wrapper">
                  <img
                    src={project.imgSrc}
                    className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  {project.title}
                </div>
              </a>
              <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                {project.tags.map((tag, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                    >
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center more-blogs md:mt-13">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
          >
            More Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
