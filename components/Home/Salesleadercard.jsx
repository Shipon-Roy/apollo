import Image from "next/image";
import React from "react";

const leaders = [
  {
    role: "Sales Leaders",
    name: "Nicole Coetzer",
    about: "Head of Sales Development",
    author: "@ Kinsta",
    hoverdes: {
      number: "36%",
      title: "connection rate",
    },
    img: "/assets/deals/image.webp",
  },
  {
    role: "Sales Leaders",
    name: "John Smith",
    about: "VP of Sales",
    author: "@ Webflow",
    hoverdes: {
      number: " ",
      title: " ",
    },
    img: "/assets/deals/image (1).webp",
  },
  {
    role: "Sales Leaders",
    name: "Emily Johnson",
    about: "Director of Growth",
    author: "@ Notion",
    hoverdes: {
      number: "50%",
      title: "SQL increase",
    },
    img: "/assets/deals/image (2).webp",
  },
];

export default function Salesleadercard() {
  return (
    <div className="mt-20">
      {/* Header Section */}
      <div className="text-black flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full">
          <h1 className="text-4xl text-black leading-tight">
            The fastest growing <br /> businesses use Apollo
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Over 500,000 companies use Apollo to stay ahead of the competition.
          </p>
        </div>
        <h1 className="text-7xl md:text-9xl font-bold w-full text-gray-800 text-right">
          500K+
        </h1>
      </div>

      {/* Card Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Front side */}
            <div className="flex flex-col p-6 h-full">
              <p className="text-xs uppercase font-mono text-gray-500">
                {leader.role}
              </p>

              <Image
                src={leader.img}
                alt={leader.name}
                width={140}
                height={140}
                className="mt-6 rounded-lg"
              />

              <p className="mt-4 text-xl font-semibold text-gray-900">
                {leader.name}
              </p>
              <p className="text-gray-600 text-sm">{leader.about}</p>
              <p className="text-gray-600 text-sm">{leader.author}</p>

              <div className="mt-auto pt-6">
                <svg
                  width="83"
                  viewBox="0 0 83 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6"
                >
                  <path
                    d="M0 21.0754H3.63727V14.4685H10.1214C10.9297 14.4685 11.3339 14.8624 11.3339 15.6502V21.0754H14.9711V16.3792C14.9711 15.1667 14.7588 14.2127 14.3342 13.5144C13.9096 12.8186 13.2241 12.3071 12.2726 11.9848C13.1423 11.5806 13.8073 10.9002 14.2728 9.93849C14.7384 8.97929 14.9686 7.81291 14.9686 6.43934V6.04543H11.3313V6.74117C11.3313 8.25542 10.9988 9.37832 10.3312 10.1048C9.66358 10.8312 8.62253 11.197 7.2106 11.197H3.63471V3.28806H0V21.0754Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gray-100 flex flex-col justify-end p-6 rounded-2xl transition-all duration-500 translate-y-full group-hover:translate-y-0">
              <p className="text-xs uppercase font-mono text-gray-500">
                {leader.role}
              </p>

              <p className="mt-6 text-sm text-gray-700 leading-snug">
                As {leader.name}’s first Head of Sales Development, they built
                outbound sales from scratch using Apollo. Their team now hits a
                consistent {leader.hoverdes.number} {leader.hoverdes.title}.
              </p>

              <div className="mt-auto">
                <h1 className="text-5xl font-bold text-gray-900">
                  {leader.hoverdes.number}
                </h1>
                <p className="text-gray-600 text-sm">{leader.hoverdes.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
