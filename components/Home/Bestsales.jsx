"use client";
import React from "react";
import Container from "../Container";

export default function Bestsales() {
  return (
    <div className="bg-[#ccc9c6] py-10">
      <Container>
        <div
          className="relative bg-cover bg-center h-[700px] rounded-2xl bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/assets/bestsalesbg.webp')" }}
        >
          <div className="absolute inset-0 " />

          <div className="relative z-10 flex flex-col justify-between h-full p-10">
            <div>
              <h1 className="text-4xl text-black leading-tight max-w-3xl">
                The best AI sales platform in the world, <br /> at a price you
                just can’t beat
              </h1>
            </div>

            <div className="max-w-3xl">
              <p className="text-base text-gray-600 mb-8 max-w-[400px]">
                You don’t have to spend a fortune to run a world-class
                revenue-generating machine. Replace ZoomInfo, Outreach,
                Salesloft, Gong, Chili Piper, and more with Apollo to save a
                fortune and get better results.
              </p>

              <div
                className="flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-600 transition">
                  Get started for free
                </button>
                <button className="px-6 py-3 border border-gray-800 rounded-lg hover:bg-gray-300 text-gray-800 transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
