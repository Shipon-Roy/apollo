"use client";
import React from "react";
import Image from "next/image";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex w-full flex-wrap gap-2 md:gap-2 xl:flex-1 xl:gap-1.5">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.title;
        return (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`group relative flex cursor-pointer items-start justify-start text-nowrap rounded-lg transition-all
  h-auto w-[calc(50%-4px)] flex-col gap-1 p-2 
  md:w-[calc(25%-6px)] xl:h-12 xl:flex-1 xl:flex-row xl:items-center xl:gap-2 xl:p-1.5 xl:pr-2
  ${isActive ? tab.bgActive : "bg-sand-10"} ${tab.bgHover}`}
          >
            <div className="relative mb-1 h-9 w-9 flex-shrink-0 xl:mb-0">
              <Image
                src={isActive ? tab.activeIcon : tab.inactiveIcon}
                alt={tab.title}
                width={36}
                height={36}
                className="rounded-lg transition-opacity duration-300"
              />
            </div>
            <p
              className={`text-sm md:text-base xl:text-left transition-all font-abc-diatype
                ${
                  isActive
                    ? "text-black"
                    : "text-gray-800 group-hover:text-black"
                }`}
            >
              {tab.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}
