"use client";
import React from "react";

export default function BillingToggle({ billing, setBilling }) {
  return (
    <ul className="flex w-max gap-1 rounded-full border border-gray-300 p-1">
      {/* Annual billing */}
      <li>
        <button
          type="button"
          onClick={() => setBilling("annual")}
          className={`group relative h-10 px-4 rounded-full font-semibold text-sm sm:text-base transition-all ${
            billing === "annual"
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span>Annual billing</span>
          {billing === "annual" && (
            <span className="absolute -top-2 right-2 text-[10px] sm:text-xs font-bold bg-yellow-100 text-gray-900 px-2 py-0.5 rounded-md">
              Save 20%
            </span>
          )}
        </button>
      </li>

      {/* Monthly billing */}
      <li>
        <button
          type="button"
          onClick={() => setBilling("monthly")}
          className={`group relative h-10 px-4 rounded-full font-semibold text-sm sm:text-base transition-all ${
            billing === "monthly"
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Monthly billing
        </button>
      </li>
    </ul>
  );
}
