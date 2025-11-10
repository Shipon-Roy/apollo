"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function BrandSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0, // Start immediately
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Keeps scrolling even on hover
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" mx-auto bg-white p-3">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s1.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Add more slides here */}
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s2.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s3.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s4.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s5.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s6.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-[200px] h-[200px]">
              <Image
                src="/assets/demo/s7.svg"
                alt="Client image"
                width={30}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
