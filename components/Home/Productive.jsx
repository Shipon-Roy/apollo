import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function Productive() {
  const companyLogos = [
    { src: "/assets/productive/customerio.2172e150.svg", alt: "Customer.io" },
    { src: "/assets/productive/census-black.160d0c58.svg", alt: "Census" },
    { src: "/assets/productive/gtm-ops.6dc41a81.svg", alt: "GTM Ops" },
    { src: "/assets/productive/census-black.160d0c58.svg", alt: "Census" },
    { src: "/assets/productive/customerio.2172e150.svg", alt: "Customer.io" },
  ];

  const stats = [
    {
      value: "70%",
      text: "70% increase in sales leads",
      logo: "/assets/productive/customerio.2172e150.svg",
    },
    {
      value: "4x",
      text: "4X SDR efficiency",
      logo: "/assets/productive/gtm-ops.6dc41a81.svg",
    },
    {
      value: "64%",
      text: "64% lower tech stack costs",
      logo: "/assets/productive/census-black.160d0c58.svg",
    },
  ];

  return (
    <div className="bg-[#ccc9c6] ">
      <Container>
        <section className="pt-12 bg-[#f7f5f2] ">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-6 lg:gap-8 px-10">
            <span className="text-sm uppercase font-founders-grotesk-mono text-gray-500 text-center md:text-left">
              Join over 500,000 companies using Apollo
            </span>

            <div className="flex flex-wrap items-center gap-5 border-b border-gray-200 justify-center md:justify-start">
              {companyLogos.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  width={120}
                  height={40}
                  alt={logo.alt}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row items-center  gap-6 md:gap-8 px-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-founders-grotesk leading-tight text-gray-900 max-w-xl md:max-w-2xl lg:max-w-3xl text-center md:text-left">
              “Every rep is more productive with Apollo. We booked 75% more
              meetings while cutting manual work in half.”
            </h1>

            <div className="flex flex-col items-center  md:items-start gap-1">
              <p className="text-sm uppercase font-founders-grotesk-mono text-gray-500 text-center md:text-left">
                Andrew Froning <br /> BDR Leader
              </p>
              <Image
                src="/assets/productive/census-black.160d0c58.svg"
                width={120}
                height={40}
                alt="Census"
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 md:p-8 flex flex-col justify-between h-full shadow"
              >
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-2">
                  <p className="text-sm text-gray-500 font-founders-grotesk max-w-[140px]">
                    {stat.text}
                  </p>
                  <Image
                    src={stat.logo}
                    width={120}
                    height={30}
                    alt={stat.text}
                    className="object-contain"
                  />
                </div>
                <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  {stat.value}
                </h2>
              </div>
            ))}
          </div>
          <div className="mt-12 w-full relative ">
            <Image
              src="/assets/productive/bgbtm.svg"
              width={900}
              height={300}
              alt="Background bottom"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
