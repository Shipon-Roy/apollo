"use client";
import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: (
      <>
        <b>Website Visitors (Company):</b> Identify up to 50,000 companies per
        month
      </>
    ),
  },
  {
    title: (
      <>
        <b>Form Enrichment:</b> Enrich up to 5,000 form contacts per month
      </>
    ),
  },
  {
    title: (
      <>
        <b>Form Builder:</b> Custom-branded forms that autofill, shorten, and
        enrich in real-time
      </>
    ),
    tag: "COMING SOON",
  },
  {
    title: (
      <>
        <b>Website Visitor (Contacts):</b> Identify individual people visiting
        your website
      </>
    ),
    tag: "COMING SOON",
  },
];

const companyLogos = [
  { src: "/assets/productive/customerio.2172e150.svg", alt: "Customer.io" },
  { src: "/assets/productive/census-black.160d0c58.svg", alt: "Census" },
  { src: "/assets/productive/gtm-ops.6dc41a81.svg", alt: "GTM Ops" },
  { src: "/assets/productive/census-black.160d0c58.svg", alt: "Census" },
  { src: "/assets/productive/customerio.2172e150.svg", alt: "Customer.io" },
];

export default function InboundAddOn() {
  return (
    <div>
      <div className="flex p-20 gap-6 my-20">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center gap-3 text-left w-1/3">
          <h2 className="text-[24px] leading-[110%] font-bold text-gray-900 mobile:text-center tablet:text-left desktop-s:text-[26px] desktop:text-[32px] desktop-xl:text-[40px]">
            Enhance any paid plan with the Inbound add-on
          </h2>
          <p className="text-[16px] leading-[130%] text-gray-500 font-normal mobile:text-center tablet:text-left desktop-xl:text-[18px]">
            The Inbound add-on increases your form contacts enriched from 10 to
            5,000 per month, and website visitors identified from 100 to 50,000
            per month, allowing you to capture more leads and insights to grow
            your business.
          </p>
        </div>

        {/* Right Card Section */}
        <div
          className="flex flex-col rounded-xl border border-gray-200 p-4 w-2/3 "
          style={{
            background:
              "linear-gradient(280deg, rgb(250, 248, 254) -5.1%, rgb(255, 255, 255) 77.62%)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between gap-4 border-b border-gray-200 pb-5 ">
            <div>
              <p className="uppercase text-[10px] tablet:text-[12px] font-mono text-indigo-600">
                ADD-ON
              </p>
              <h3 className="text-[24px] font-bold text-gray-900 desktop-s:text-[26px] desktop:text-[32px] desktop-xl:text-[40px]">
                Inbound
              </h3>
            </div>

            <div className="text-left tablet:text-right">
              <p className="text-[20px] font-semibold text-gray-900 desktop-s:text-[24px] desktop-xl:text-[28px]">
                $119
              </p>
              <p className="text-[12px] text-gray-500">Per team, per month</p>
              <p className="text-[12px] text-gray-500">Billed annually</p>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4 py-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 tablet:items-center"
              >
                <Check className="w-4 h-4 text-gray-700 flex-shrink-0" />
                <div className="flex flex-1  gap-2">
                  <span className="text-[14px] text-gray-700 leading-[130%]">
                    {item.title}
                  </span>
                  {item.tag && (
                    <span className="text-[10px] tablet:text-[12px] uppercase font-mono rounded-full border border-orange-200 bg-orange-50 px-1 py-0.5 text-orange-600">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-[12px] text-gray-400">
            Select your paid plan first, then add this add-on in-app.
            Introductory pricing — features and pricing may change.
          </p>
        </div>
      </div>
      <p className="text-center text-gray-500 my-10">
        Prices exclude any applicable taxes.
      </p>
      <div className="bg-[#f7f5f2] p-10 ">
        <div className="text-center w-full gap-4 md:gap-6 lg:gap-8 px-10">
          <span className="text-sm uppercase font-founders-grotesk-mono text-gray-500 text-center md:text-left ">
            Join over 500,000 companies using Apollo
          </span>

          <div className="flex flex-wrap items-center mt-10 gap-5 border-b border-gray-200 justify-center  ">
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
      </div>
    </div>
  );
}
