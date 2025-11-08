"use client";
import React from "react";

export default function PricingCard({ plan, billing }) {
  const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div className="rounded-2xl p-6 shadow-sm transition hover:shadow-md bg-white border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{plan.description}</p>

      <div className="mt-6">
        <h2 className="text-4xl font-bold text-gray-900">{price}</h2>
        <p className="text-sm text-gray-500 mt-1">{plan.billingText}</p>
      </div>

      {/* Credits */}
      {plan.credits && (
        <div className="mt-4">
          <p className="text-gray-700 text-base">{plan.credits}</p>
          {plan.learnMore && (
            <button className="text-gray-500 underline text-sm mt-1 hover:text-gray-700">
              Learn more
            </button>
          )}
        </div>
      )}

      {/* CTA Buttons */}
      {plan.buttons && (
        <div className="mt-6 flex flex-col gap-2">
          {plan.buttons.map((btn, idx) => (
            <button
              key={idx}
              className={`${btn.className} py-3 rounded-lg w-full transition`}
              onClick={btn.onClick}
            >
              {btn.text}
            </button>
          ))}
        </div>
      )}

      {/* Features */}
      {plan.features && (
        <ul className="mt-6 space-y-3 border-t border-gray-200 pt-4 text-gray-800 text-sm">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  d="M16.44 4.44L15.56 3.56L6.5 12.62L2.44 8.56L1.56 9.44L6.5 14.38L16.44 4.44Z"
                  fill="#3F3F3F"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
