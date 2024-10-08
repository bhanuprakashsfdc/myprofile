import React from 'react';
import Slider from 'react-slick'; // Import react-slick

// Slick slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Hero = () => {
  return (
    <div data-scroll-index="0" id="home">
      <div className="hero-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-home text-theme"></i>
          INTRODUCE
        </div>
        <div className="items-center gap-6 hero-content md:flex xl:gap-10">
          <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
            <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
             Save Time, Save Money <br />
              <span className="text-theme">Streamline Your Business Now</span>
            </h1>
            <p>
              I am a <span className="font-medium text-black dark:text-white/90">Salesforce Consultant</span> with expertise in crafting tailored solutions that align with business goals and drive success.
            </p>
            <p className="">
          Are you using Salesforce in your business ? Looking for expert to stream line your business priorities for in pipeline ? <br/>
          Then you reached correct person. I would like to bring my Salesforce expertise in your company to resolve your issues. <br/>
          With decade  of Salesforce experience, I’m an unconventional, ambitious, and determined professional who specializes in helping organisations maximize their potential with Salesforce. I am a certified Salesforce Administrator who is passionate about making a positive impact on businesses through my expertise and knowledge of the platform. <br/>
          My mission is to help organizations make the most of their data and Salesforce investments, and I strive to help companies achieve their goals through creative solutions and innovative approaches. I'm a big believer in utilizing the power of Salesforce to create efficient, user-friendly solutions that add value to organizations.<br/>
          Let's take this to the next level! With my unique, authentic, quirky, bold, personable, energetic, and playful approach, I'm here to help you maximize the potential of Salesforce and unlock new opportunities for your business. Together we can find the right solutions to keep your organization moving forward. Let's get started!<br/>
          Connect us to resolve your queries and free consultant services.
          </p>
            <ul className="flex items-center mt-4 -mx-3 lg:mt-5">
              <li>
                <i className="mr-2 fal fa-check-double text-theme"></i>
                Available for work
              </li> <br/>
              <li>
                <i className="mr-2 fal fa-check-double text-theme"></i>
                Full Time Job
              </li>
            </ul>
            <ul className="mt-7 buttons">
              <li data-scroll-nav="8">
                <a
                  href="#contact"
                  className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
                >
                  <i className="fal fa-paper-plane"></i>
                  HIRE ME
                </a>
              </li>
            </ul>
          </div>
          {/* 
          <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
            <img
              src="assets/img/hero-img-1.png"
              className="dark:hidden"
              alt="Hero Image - Light Mode"
            />
            <img
              src="assets/img/hero-img-2.png"
              className="hidden dark:block"
              alt="Hero Image - Dark Mode"
            />
          </div>
          */}
        </div>
        <div className="mb-2 mt-14 xl:mb-0 xl:mt-20">
          <div className="items-center grid-cols-12 overflow-hidden md:grid">
            <div className="hidden col-span-2 md:inline-block">
              <h6 className="font-medium text-black dark:text-white/80 text-sm md:max-w-[8rem] border-l border-theme pl-4">
                Trusted companies
              </h6>
            </div>
            <div className="col-span-10 logo-slider">
              <Slider {...settings}>
                <div>
                  <a href="#" className="transition duration-200 flex-center">
                    <img src="assets/img/clients/infosys.png" alt="Partner Name" />
                  </a>
                </div>
                <div>
                  <a href="#" className="transition duration-200 flex-center">
                    <img src="assets/img/clients/brillio.png" alt="Partner Name" />
                  </a>
                </div>
                <div>
                  <a href="#" className="transition duration-200 flex-center">
                    <img src="assets/img/clients/LTI.png" alt="Partner Name" />
                  </a>
                </div>
                <div>
                  <a href="#" className="transition duration-200 flex-center">
                    <img src="assets/img/clients/shell.png" alt="Partner Name" />
                  </a>
                </div>
                {/* Repeat as needed */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
