"use client";
import React, { useState } from "react";
import Container from "../Container";
import Tabs from "./Tabs";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import InboundAddOn from "./Inbound";
import WhatAreCredits from "./WhatAreCredits";

const tabsData = [
  {
    title: "Outbound",
    activeIcon: "/assets/pricing/outbound.a3330a24.svg",
    inactiveIcon: "/assets/pricing/outbound.a3330a24.svg",
    bgHover: "hover:bg-yellow-100",
    bgActive: "bg-yellow-100",
  },
  {
    title: "Inbound",
    activeIcon: "/assets/pricing/inbound.b6a9330f.svg",
    inactiveIcon: "/assets/pricing/inbound.b6a9330f.svg",
    bgHover: "hover:bg-purple-200",
    bgActive: "bg-purple-200",
  },
  {
    title: "Data Enrichment",
    activeIcon: "/assets/pricing/enrichment.a0327f74.svg",
    inactiveIcon: "/assets/pricing/enrichment.a0327f74.svg",
    bgHover: "hover:hover:bg-pink-200",
    bgActive: "bg-pink-200",
  },
  {
    title: "Deal Execution",
    activeIcon: "/assets/pricing/deal-execution.280f4008.svg",
    inactiveIcon: "/assets/pricing/deal-execution.280f4008.svg",
    bgHover: "hover:bg-sky-200",
    bgActive: "bg-sky-200",
  },
];

const pricingPlans = [
  {
    title: "Free",
    description:
      "Explore the platform to find leads, manage pipeline & close deals.",
    annualPrice: "$0",
    monthlyPrice: "$0",
    billingText: "",
    credits: "1,200 credits per user per year, granted monthly",
    learnMore: true,
    features: [
      "AI Assistant",
      "AI Research",
      "2 Sequences",
      "Prospecting, Gmail & Salesforce Extensions",
      "Deliverability Suite & Email Warmup",
      "Basic Filters",
    ],
    buttons: [{ text: "Get started", className: "bg-sunbeam-60 text-black" }],
  },
  {
    title: "Basic",
    description:
      "Take prospecting, outreach & deal management to the next level.",
    annualPrice: "$49",
    monthlyPrice: "$59",
    billingText: "Per user per month",
    credits: "30,000 credits per user per year, granted upfront",
    learnMore: true,
    features: [
      "AI Assistant (Beta)",
      "AI Research & AI Lead Scoring",
      "Unlimited Sequences",
      "Prospecting, Gmail & Salesforce Extensions",
      "Deliverability Suite & Email Warmup",
      "Advanced Filters",
      "CRM Integrations",
      "Waterfall Enrichment",
    ],
    buttons: [
      { text: "Buy now", className: "bg-yellow-400 text-black" },
      { text: "Start 14-day trial", className: "text-gray-700" },
    ],
  },
  {
    title: "Professional",
    description:
      "Optimize your sales process with multi-touch outreach, AI & automation.",
    annualPrice: "$79",
    monthlyPrice: "$99",
    billingText: "Per user per month",
    credits: "48,000 credits per user per year, granted upfront",
    learnMore: true,
    highlight: true,
    features: [
      "AI Assistant (Beta)",
      "AI Research & AI Lead Scoring",
      "Unlimited Sequences & A/Z Testing",
      "Prospecting, Gmail & Salesforce Extensions",
      "Deliverability Suite & Email Warmup",
      "Advanced Filters",
      "CRM Integrations",
      "Waterfall Enrichment",
      "Unlimited Meeting Events",
      "6 Intent Topics & Intent Filters",
      "CSV, CRM & API Data Enrichment",
      "Domain & Mailbox Purchasing",
      "Projects (Beta)",
      "Unlimited Gmail & Microsoft Mailboxes",
    ],
    buttons: [
      { text: "Buy now", className: "bg-black text-white" },
      { text: "Start 14-day trial", className: "text-gray-700" },
    ],
  },
  {
    title: "Organization",
    description:
      "Transform go-to-market with advanced tools, custom solutions & expert help.",
    annualPrice: "$119",
    monthlyPrice: "$149",
    billingText: "Per user per month (min 3 users)",
    credits: "72,000 credits per user per year, granted upfront",
    learnMore: true,
    features: [
      "AI Assistant (Beta)",
      "AI Research & AI Lead Scoring",
      "Unlimited Sequences & A/Z Testing",
      "Prospecting, Gmail & Salesforce Extensions",
      "Deliverability Suite & Email Warmup",
      "Advanced Filters",
      "CRM Integrations",
      "Waterfall Enrichment",
      "Unlimited Meeting Events",
      "12 Intent Topics & Intent Filters",
      "CSV, CRM & API Data Enrichment",
      "Domain & Mailbox Purchasing",
      "Projects (Beta)",
      "Unlimited Gmail & Microsoft Mailboxes",
      "Automated Workflows",
    ],
    buttons: [
      { text: "Buy now", className: "bg-yellow-300 text-black" },
      { text: "Talk to Sales", className: "border border-black text-black" },
    ],
  },
];

export default function PromoSection() {
  const [activeTab, setActiveTab] = useState("Outbound");
  const [billing, setBilling] = useState("annual");

  return (
    <div className="bg-[#ccc9c6] pb-10">
      <Container>
        <div className="rounded-2xl bg-white ">
          {/* Heading + Subtext + Toggle */}
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row text-gray-900 p-20">
            <h3 className="antialiased text-center md:text-left text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-none tracking-tight text-gray-900 max-w-3xl">
              The all-in-one platform to grow your business
            </h3>
            <div className="flex flex-col gap-6 py-3 max-w-md">
              <p className="antialiased text-center md:text-left text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Build pipeline smarter, close deals faster, and unify your tech
                stack with an AI-powered platform.
              </p>
              <BillingToggle billing={billing} setBilling={setBilling} />
            </div>
          </div>

          {/* Tabs */}
          <div className="p-20">
            <div className="relative flex flex-col items-start gap-4 rounded-lg border border-solid border-sand-20 px-4 py-3 font-abc-diatype xl:flex-row xl:items-center xl:gap-3 mt-10  ">
              <div className="flex flex-col gap-1 text-black xl:whitespace-nowrap">
                <p className="text-[16px] tablet:text-[18px] desktop:text-[20px] desktop-xl:text-[22px] leading-[130%] font-abc-diatype text-text-body">
                  Explore features by solutions:
                </p>
                <p className="text-[14px] desktop-xl:text-[16px] text-text-body">
                  All tiers include every solution
                </p>
              </div>
              <Tabs
                tabs={tabsData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-20">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.title} plan={plan} billing={billing} />
            ))}
          </div>
          <InboundAddOn />
          <WhatAreCredits />
        </div>
      </Container>
    </div>
  );
}
