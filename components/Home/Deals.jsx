"use client";

import Container from "../Container";
import Image from "next/image";

import Salesleadercard from "./Salesleadercard";
import Dealsscroll from "./Dealsscroll";

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

  return (
    <div className="bg-[#ccc9c6] min-h-screen flex flex-col justify-center overflow-hidden">
      <Container>
        <div className="bg-white px-5 py-12 rounded-xl shadow-sm">
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <div className="mx-auto pb-3 w-full max-w-[852px] text-center">
              <h5 className="text-4xl text-black font-semibold">
                Everything you need, from finding <br /> leads to winning deals
              </h5>
              <p className="mt-4 text-md text-black">
                Powered by Apollo Data — one of the largest, most accurate
                business <br /> data networks on the planet.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 transition-all duration-500 text-center bg-[#f7f5f2] hover:bg-gray-200 text-black`}
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.icon}
                      width={80}
                      height={80}
                      alt={item.title}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl  mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>

            <Dealsscroll />
          </div>

          <Salesleadercard />
        </div>
      </Container>
    </div>
  );
}
