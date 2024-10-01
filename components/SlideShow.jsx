"use client";
import { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const SlideShow = (params) => {
  const images = params.image;
  const [slideImg, setSlideImg] = useState(images[0]);
  const switchToNextImage = () => {
    const currentIndex = images.indexOf(slideImg);
    console.log(currentIndex);
    const nextIndex = (currentIndex + 1) % images.length;
    setSlideImg(images[nextIndex]);
  };

  const switchToPreviousImage = () => {
    const currentIndex = images.indexOf(slideImg);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSlideImg(images[previousIndex]);
  };

  useEffect(() => {
    const interval = setInterval(switchToNextImage, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [slideImg]);
  return (
    <section className='w-full relative px-32 py-10'>
      <img src={slideImg} className="w-full h-[750px] rounded-3xl" alt="" />
      <MdNavigateNext onClick={switchToNextImage} className="md:w-10 md:h-10 absolute top-1/2 bg-[var(--CT03)] right-2 rounded-full"/>
      <MdNavigateBefore onClick={switchToPreviousImage} className="md:w-10 md:h-10 absolute top-1/2 bg-[var(--CT03)] left-2 rounded-full"/>
    </section>
  );
};

export default SlideShow;