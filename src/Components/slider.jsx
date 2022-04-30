import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slider.css";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let images = [
    {
      src: "https://images.all-free-download.com/images/graphicwebp/food_picture_01_hd_pictures_167558.webp",
    },

    {
      src: "https://images.all-free-download.com/images/graphicwebp/food_207811.webp",
    },
    {
      src: "https://images.all-free-download.com/images/graphicwebp/food_picture_03_hd_pictures_167556.webp",
    },
  ];

  const slideLength = images.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {images.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.src} alt="slide" className="image" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
