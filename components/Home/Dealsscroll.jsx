import React, { useState, useRef, useEffect } from "react";
import Container from "../Container";
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
import Image from "next/image";

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

export default function Dealsscroll() {
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
    if (Math.abs(delta) < 40) return;

    const scrollingDown = delta > 0;
    const scrollingUp = delta < 0;
    const atFirst = activeTab === 0;
    const atLast = activeTab === scrrolfeatures.length - 1;

    if ((scrollingDown && atLast) || (scrollingUp && atFirst)) return;

    e.preventDefault();

    if (scrollLock.current) return;
    scrollLock.current = true;

    if (scrollingDown && !atLast) {
      setActiveTab((prev) => Math.min(prev + 1, scrrolfeatures.length - 1));
    } else if (scrollingUp && !atFirst) {
      setActiveTab((prev) => Math.max(prev - 1, 0));
    }

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
      className=" flex flex-col justify-center overflow-hidden"
    >
      <Container>
        <div>
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
              <h3
                data-aos="fade-up"
                data-aos-duration="3000"
                className="text-4xl text-black mb-4"
              >
                {scrrolfeatures[activeTab].title}
              </h3>

              <div
                className="my-20"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-600 transition mr-10">
                  Get started for free
                </button>
                <button className="px-4 py-2 border border-gray-800  rounded-lg hover:bg-gray-300 text-gray-800 transition">
                  Learn more
                </button>
              </div>

              <ul
                data-aos="fade-up"
                data-aos-duration="3000"
                className="text-gray-700 text-md"
              >
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
      </Container>
    </div>
  );
}
