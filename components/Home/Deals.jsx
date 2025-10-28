"use client";
import React, { useState, useRef, useEffect } from "react";
import Container from "../Container";
import Image from "next/image";
import {
  FaRegStar,
  FaTasks,
  FaNetworkWired,
  FaRegClock,
  FaBell,
} from "react-icons/fa";
import {
  MdOutlineMail,
  MdOutlineEditCalendar,
  MdScheduleSend,
  MdContacts,
  MdOutlineManageAccounts,
  MdDatasetLinked,
  MdOutlineNoteAlt,
  MdOutlinePhoneInTalk,
  MdInsertChartOutlined,
} from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
  const scrrolfeatures = [
    {
      button: "Outbound",
      title: "Fuel smarter selling with always-fresh data",
      list: {
        list1: {
          licon: <FaRegStar />,
          litext: "AI-powered, multichannel campaigns in a click",
        },
        list2: {
          licon: <MdOutlineMail />,
          litext: "Built-in email deliverability guardrails",
        },
        list3: {
          licon: <FaTasks />,
          litext: "Prioritized task lists to maximize selling",
        },
        list4: {
          licon: <FaNetworkWired />,
          litext: "Workflow automations to identify and scale what works",
        },
      },
      icon: "/assets/deals/image1.webp",
    },
    {
      button: "Inbound",
      title: "Qualify and act on inbound leads in seconds",
      list: {
        list1: {
          licon: <FaRegClock />,
          litext: "Anonymous visitor identification",
        },
        list2: {
          licon: <TfiReload />,
          litext: "Real-time form enrichment",
        },
        list3: {
          licon: <MdOutlineEditCalendar />,
          litext: "Instant routing with built-in calendar and scheduler",
        },
        list4: {
          licon: <MdScheduleSend />,
          litext: "Automated nurture & follow-up sequences",
        },
      },
      icon: "/assets/deals/image2.webp",
    },
    {
      button: "Data Enrichment",
      title: "Fuel smarter selling with always-fresh data",
      list: {
        list1: {
          licon: <MdContacts />,
          litext: "210M+ contacts and 30M+ companies",
        },
        list2: {
          licon: <IoMdCheckmarkCircleOutline />,
          litext: "Verified emails & phone numbers for faster reach",
        },
        list3: {
          licon: <MdOutlineManageAccounts />,
          litext: "Better targeting and personalization",
        },
        list4: {
          licon: <MdDatasetLinked />,
          litext: "Clean data across your entire stack and CRM",
        },
      },
      icon: "/assets/deals/image3.webp",
    },
    {
      button: "Deal Execution",
      title: "Capture every conversation, accelerate every deal",
      list: {
        list1: {
          licon: <MdOutlineNoteAlt />,
          litext: "Pre-meeting insights to prep in seconds",
        },
        list2: {
          licon: <MdOutlinePhoneInTalk />,
          litext: "AI-powered call summaries, follow-ups, and task creation",
        },
        list3: {
          licon: <FaBell />,
          litext: "Pipeline boards & real-time deal alerts",
        },
        list4: {
          licon: <MdInsertChartOutlined />,
          litext: "Conversation insights & performance dashboards for coaching",
        },
      },
      icon: "/assets/deals/image1.webp",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const scrollLock = useRef(false);

  const handleWheel = (e) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const isInView =
      rect.top <= window.innerHeight * 0.6 &&
      rect.bottom >= window.innerHeight * 0.4;

    if (!isInView) return;

    const delta = e.deltaY;
    if (Math.abs(delta) < 40) return; // ছোট scroll ignore

    const scrollingDown = delta > 0;
    const scrollingUp = delta < 0;
    const atFirst = activeTab === 0;
    const atLast = activeTab === features.length - 1;

    // edges এ normal scroll allow
    if ((scrollingDown && atLast) || (scrollingUp && atFirst)) return;

    e.preventDefault();

    // scroll lock চেক করো
    if (scrollLock.current) return;
    scrollLock.current = true;

    // scroll direction অনুযায়ী tab পরিবর্তন
    if (scrollingDown && !atLast) {
      setActiveTab((prev) => Math.min(prev + 1, features.length - 1));
    } else if (scrollingUp && !atFirst) {
      setActiveTab((prev) => Math.max(prev - 1, 0));
    }

    // 1.5 সেকেন্ড পর unlock
    setTimeout(() => {
      scrollLock.current = false;
    }, 1500);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
      scrollLock.current = false;
    };
  }, [activeTab]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#ccc9c6] min-h-screen flex flex-col justify-center overflow-hidden"
    >
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

            <div className="flex justify-center gap-4 mt-8">
              {scrrolfeatures.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-black text-white scale-105"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {feature.button}
                </button>
              ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 select-none transition-all duration-700 ease-in-out h-[400px]">
              <div className="md:w-1/2 transition-all duration-700 ease-in-out text-center md:text-left">
                <h3 className="text-4xl text-black mb-4">
                  {scrrolfeatures[activeTab].title}
                </h3>

                <div className="my-20">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-600 transition mr-10">
                    Get started for free
                  </button>
                  <button className="px-4 py-2 border border-gray-800  rounded-lg hover:bg-gray-300 text-gray-800 transition">
                    Learn more
                  </button>
                </div>

                <ul className="text-gray-700 text-md">
                  <li className="flex items-center gap-2">
                    <span>{scrrolfeatures[activeTab].list.list1.licon}</span>
                    {scrrolfeatures[activeTab].list.list1.litext}
                  </li>
                  <li className="flex items-center gap-2">
                    <span>{scrrolfeatures[activeTab].list.list2.licon}</span>
                    {scrrolfeatures[activeTab].list.list2.litext}
                  </li>
                  <li className="flex items-center gap-2">
                    <span>{scrrolfeatures[activeTab].list.list3.licon}</span>
                    {scrrolfeatures[activeTab].list.list3.litext}
                  </li>
                  <li className="flex items-center gap-2">
                    <span>{scrrolfeatures[activeTab].list.list4.licon}</span>
                    {scrrolfeatures[activeTab].list.list4.litext}
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2 flex justify-center transition-all duration-700 ease-in-out">
                <Image
                  src={scrrolfeatures[activeTab].icon}
                  width={400}
                  height={200}
                  alt={scrrolfeatures[activeTab].title}
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
