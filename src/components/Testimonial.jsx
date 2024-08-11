import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TESTIMONIALS } from '../constants/constants'; 

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div data-scroll-index="7" id="testimonial">
      <div className="testimonial-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-comment-alt-check text-theme"></i>
          TESTIMONIAL
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            What <span className="font-semibold text-theme">People Say</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute.
          </p>
        </div>
        
        <div className="mt-12 testimonial-slider">
          <Slider {...settings}>
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="text-center slider-inner md:px-5">
                  <div className="image flex-center">
                    <img src={testimonial.image} alt={`Testimonial from ${testimonial.author}`} />
                  </div>
                  <div className="mt-6 mb-3 text-center rating text-lightOrange text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <div className="text-sm md:text-[15px] leading-loose content">
                    {testimonial.content}
                  </div>
                  <div className="mt-5 text-center author">
                    <h6 className="text-lg font-medium text-black dark:text-white">{testimonial.author}</h6>
                    <p className="text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;