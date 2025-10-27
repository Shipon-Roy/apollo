"use client";
import React, { useState, useRef } from "react";
import Container from "../Container";

export default function FeaturesSection() {
  const features = [
    {
      title: "Outbound",
      description:
        "Book more meetings faster with better data, smarter AI, and easier automation.",
      icon: "/assets/deals/pipeline_builder_1.svg",
    },
    {
      title: "Inbound",
      description:
        "Capture, qualify, and route every lead instantly so hot leads never go cold.",
      icon: "/assets/deals/meeting_assistant_icon2.svg",
    },
    {
      title: "Data Enrichment",
      description:
        "Cleanse and complete your records with always-fresh data that powers smarter targeting.",
      icon: "/assets/deals/data_enrichment_icon3.svg",
    },
    {
      title: "Deal Execution",
      description:
        "Keep deals moving with AI-powered prep, meeting insights, and follow-up.",
      icon: "/assets/deals/crm_icon4.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  // Handle mouse movement over the tab area
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X relative to container
    const width = rect.width;
    const sectionWidth = width / features.length;

    const index = Math.floor(x / sectionWidth);
    setActiveTab(index >= 0 && index < features.length ? index : 0);
  };

  return (
    <div className="bg-[#ccc9c6]">
      <Container>
        <div className="bg-white px-5 relative z-10">
          <div className="flex flex-col gap-10 pt-16">
            <div className="mx-auto pb-3 w-full max-w-[852px] text-center">
              <h5 className="text-4xl text-black">
                Everything you need, from finding <br /> leads to winning deals
              </h5>
              <p className="mt-4 text-md text-black">
                Powered by Apollo Data — one of the largest, most accurate
                business <br /> data networks on the planet.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-[#f7f5f2] gap-3 py-6 px-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-12 aspect-square"
                    loading="lazy"
                  />
                  <p className="text-xl text-black text-center">
                    {feature.title}
                  </p>
                  <p className="text-sm text-center text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                    activeTab === idx
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>

            {/* Scroll-linked Tab Content */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="mt-8 flex flex-col md:flex-row items-center gap-8 cursor-pointer"
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">
                  {features[activeTab].title}
                </h3>
                <p className="mt-4 text-gray-700">
                  {features[activeTab].description}
                </p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 h-[50%]">
                <img
                  src={features[activeTab].icon}
                  alt={features[activeTab].title}
                  className="w-full h-[50%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
