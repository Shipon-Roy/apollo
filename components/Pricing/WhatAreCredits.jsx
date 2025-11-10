"use client";
import Image from "next/image";

export default function WhatAreCredits() {
  return (
    <div
      id="what-are-credits"
      className="flex w-full rounded-2xl gap-12 overflow-hidden bg-white p-20"
    >
      {/* Left Side */}
      <div className="flex w-full flex-col items-center gap-8 min-[1250px]:max-w-md min-[1250px]:flex-1 min-[1250px]:items-start">
        <div className="flex w-full flex-col items-center gap-4 min-[1250px]:items-start">
          <h3 className="antialiased text-[40px] tracking-[-0.8px] leading-none font-founders-grotesk text-text-header text-center min-[1250px]:text-left  text-gray-800">
            What are Apollo credits?
          </h3>
          <p className="antialiased text-[16px] leading-[130%] font-abc-diatype text-text-body text-center min-[1250px]:text-left text-gray-700">
            Credits give you access to emails, phone numbers, and enriched data,
            helping you connect with prospects and enhance your CRM.
          </p>
        </div>

        <button
          type="button"
          className="group rounded-lg transition-all h-10 px-4 bg-transparent border border-black text-black disabled:bg-transparent disabled:border-sand-60 disabled:text-sand-60 hover:bg-sand-30 hover:border-black hover:text-black active:bg-sand-40 active:border-black active:text-black focus:border-black focus:text-black w-max"
        >
          Need more credits?
        </button>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-between min-[1250px]:flex-1">
        <div className="relative hidden flex-shrink-0 tablet:flex">
          <div className="flex items-center justify-center">
            <Image
              alt="Coin"
              src="/_next/static/media/coin.7087d4ad.svg"
              width={109}
              height={155}
            />
          </div>
          <div className="absolute top-0 right-0">
            <Image
              alt="Connections"
              src="/_next/static/media/connections.c01ce8ba.svg"
              width={67}
              height={235}
            />
          </div>
        </div>

        {/* Info Boxes */}
        <div className="flex-1">
          <div className="flex flex-col justify-between gap-2">
            {/* Email */}
            <div className="flex items-start gap-3 rounded-md bg-sand-10 p-3 hover:bg-sand-20 transition bg-gray-200">
              <div className="mt-0.5 flex flex-shrink-0 items-center justify-center p-1.5 text-black">
                {/* Mail Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  fill="currentColor"
                >
                  <path d="M17.889 12.502c0 .92-.746 1.666-1.666 1.666H1.778c-.92 0-1.666-.746-1.667-1.666V6.609l1.389.946v4.947c0 .153.125.277.278.277h14.445a.278.278 0 0 0 .277-.277V7.506l1.389-.946v5.942ZM16.223.835c.92 0 1.666.747 1.666 1.667v2.04l-6.16 4.197-1.418.947a2.362 2.362 0 0 1-2.62 0l-4.859-3.24-2.72-1.854v-2.09c0-.92.746-1.667 1.666-1.667h14.445Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-black">Email</h3>
                  <div className="flex w-max items-center gap-1 rounded-full bg-sand-30 px-2">
                    <p className="text-[12px] text-gray-600 bg-gray-300 px-2 rounded-2xl font-medium text-sand-70">
                      1 credit
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Access verified emails to connect with the right prospects.
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-3 rounded-md bg-sand-10 p-3 hover:bg-sand-20 transition bg-gray-200">
              <div className="mt-0.5 flex flex-shrink-0 items-center justify-center p-1.5 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  fill="currentColor"
                >
                  <path d="M5.56 1.619a2.245 2.245 0 0 1 2.2 1.32l.78 1.713c.362.792.232 1.732-.391 2.356L6.667 8.49a9.306 9.306 0 0 0 5.345 5.345l1.482-1.481c.623-.624 1.564-.753 2.356-.392l1.713.782c.846.386 1.392 1.267 1.32 2.199l-.152 1.975a2.574 2.574 0 0 1-2.241 2.375c-2.285.304-4.338-.115-6.223-.955a16.314 16.314 0 0 1-6.901-6.886c-.177-.338-.667-1.731-.853-3.229a10.882 10.882 0 0 1 .016-2.816 2.57 2.57 0 0 1 2.374-2.241l1.976-.153Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-black">Phone number</h3>
                  <div className="flex w-max items-center gap-1 rounded-full bg-sand-30 px-2">
                    <p className="text-[12px] text-gray-600 bg-gray-300 px-2 rounded-2xl font-medium text-sand-70">
                      8 credits
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Access verified phone numbers and directly connect with your
                  prospects.
                </p>
              </div>
            </div>

            {/* Enrich Data */}
            <div className="flex items-start gap-3 rounded-md bg-sand-10 p-3 hover:bg-sand-20 transition bg-gray-200">
              <div className="mt-0.5 flex flex-shrink-0 items-center justify-center p-1.5 text-black">
                <svg
                  width="20"
                  viewBox="0 0 33 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.889 12.502c0 .92-.746 1.666-1.666 1.666H1.778c-.92 0-1.666-.746-1.667-1.666V6.609l1.389.946v4.947c0 .153.125.277.278.277h14.445a.278.278 0 0 0 .277-.277V7.506l1.389-.946v5.942ZM16.223.835c.92 0 1.666.747 1.666 1.667v2.04l-6.16 4.197-1.418.947a2.362 2.362 0 0 1-2.62 0l-4.859-3.24-2.72-1.854v-2.09c0-.92.746-1.667 1.666-1.667h14.445Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-black">Enrich data</h3>
                  <div className="flex w-max items-center gap-1 rounded-full bg-sand-30 px-2">
                    <p className="text-[12px] text-gray-600 bg-gray-300 px-2 rounded-2xl font-medium text-sand-70">
                      1–8 credits
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Enhance your contact profiles with enriched data for better
                  targeting.
                </p>
              </div>
            </div>

            {/* AI Research */}
            <div className="flex items-start gap-3 rounded-md bg-sand-10 p-3 hover:bg-sand-20 transition bg-gray-200">
              <div className="mt-0.5 flex flex-shrink-0 items-center justify-center p-1.5 text-black">
                <svg width="20" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M5.56 1.619a2.245 2.245 0 0 1 2.2 1.32l.78 1.713c.362.792.232 1.732-.391 2.356L6.667 8.49a9.306 9.306 0 0 0 5.345 5.345l1.482-1.481c.623-.624 1.564-.753 2.356-.392l1.713.782c.846.386 1.392 1.267 1.32 2.199l-.152 1.975a2.574 2.574 0 0 1-2.241 2.375c-2.285.304-4.338-.115-6.223-.955a16.314 16.314 0 0 1-6.901-6.886c-.177-.338-.667-1.731-.853-3.229a10.882 10.882 0 0 1 .016-2.816 2.57 2.57 0 0 1 2.374-2.241l1.976-.153Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-black">AI research</h3>
                  <div className="flex w-max items-center gap-1 rounded-full bg-sand-30 px-2">
                    <p className="text-[12px] text-gray-600 bg-gray-300 px-2 rounded-2xl font-medium text-sand-70">
                      1 credit per run
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Get insights with AI: identify prospects' pain points, engage
                  contacts, and refine filters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
