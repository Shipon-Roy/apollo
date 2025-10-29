"use client";
import React, { useState } from "react";
import Container from "../Container";

export default function Fqa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Does Apollo.io provide a large and rich B2B contact and company database?",
      answer:
        "Apollo.io provides a large and rich B2B contact and company database by giving access to millions of verified contacts and company profiles across industries and regions, which helps sales teams identify and connect with decision-makers more efficiently.",
    },
    {
      question:
        "Can Apollo.io enable highly precise lead targeting via advanced filtering?",
      answer:
        "Apollo.io enables highly precise lead targeting with advanced filtering by letting users segment prospects using criteria like job title, seniority, company size, industry, location, and buyer intent signals, ensuring outreach efforts are focused on the most relevant opportunities.",
    },
    {
      question: "Does Apollo.io automate outreach sequences and follow-ups?",
      answer:
        "Apollo.io automates outreach sequences and follow-ups by offering built-in email sequencing, task reminders, and multi-touch campaign workflows, which save time and help sales teams maintain consistent, professional engagement with prospects.",
    },
    {
      question:
        "Does Apollo.io integrate smoothly with CRMs and existing sales tools?",
      answer:
        "Apollo.io enables highly precise lead targeting with advanced filtering by letting users segment prospects using criteria like job title, seniority, company size, industry, location, and buyer intent signals, ensuring outreach efforts are focused on the most relevant opportunities.",
    },
    {
      question:
        "Does Apollo.io offer strong analytics and reporting on outreach performance?",
      answer:
        "Apollo.io automates outreach sequences and follow-ups by offering built-in email sequencing, task reminders, and multi-touch campaign workflows, which save time and help sales teams maintain consistent, professional engagement with prospects.",
    },
  ];

  return (
    <div className="bg-[#ccc9c6] pb-10">
      <Container>
        <div className="flex  justify-between rounded-2xl bg-white p-20">
          <h1 className="text-3xl font-bold mb-10 text-gray-900 text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4 w-1/2">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-medium hover:bg-gray-200 transition"
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="p-5 border-t border-gray-300 bg-white text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
