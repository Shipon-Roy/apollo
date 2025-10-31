"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ============================
// Reusable Button Component
// ============================
const Button = ({ children, variant = "solid", ...props }) => {
  const styles = {
    solid:
      "bg-yellow-300 text-black font-semibold hover:bg-yellow-200 transition",
    outline:
      "border border-gray-800 text-gray-800 hover:bg-gray-200 transition",
    text: "text-gray-800 hover:text-gray-600 transition",
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================
// Data Arrays
// ============================
const solutions = [
  {
    href: "/solutions/outbound-sales-software",
    title: "Outbound",
    desc: "Turn hours of prospecting into minutes",
    bg: "bg-yellow-50",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 16" fill="none">
        <path
          d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    href: "/solutions/inbound-lead-conversion",
    title: "Inbound",
    desc: "Qualify and act on inbound leads in seconds",
    bg: "bg-indigo-50",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
        <path
          d="M17.7078 13.7792L10.9128 2.01439C10.0635 0.547288 7.94355 0.547288 7.09418 2.01439L0.299197 13.7792C-0.550176 15.2463 0.509785 17.0855 2.20853 17.0855H15.7915C17.4902 17.0855 18.5502 15.2463 17.7008 13.7792H17.7078Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    href: "/solutions/b2b-data-enrichment",
    title: "Data Enrichment",
    desc: "Fuel smarter selling with always-fresh data",
    bg: "bg-orange-50",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 16" fill="none">
        <path
          d="M7.90821 0.42284L5.9805 7.9966H11.0074L9.07967 0.42284C8.9388 -0.140947 8.06391 -0.140947 7.91563 0.42284H7.90821Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    href: "/solutions/sales-execution-software",
    title: "Deal Execution",
    desc: "Capture every conversation, accelerate every deal",
    bg: "bg-blue-50",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
        <path
          d="M12.1695 0.581138C11.1831 0.206457 10.1203 0 9.00385 0C5.83053 0 3.04718 1.64401 1.44141 4.12914H7.16103C9.47794 4.12914 11.4355 2.65336 12.1695 0.588785V0.581138Z"
          fill="black"
        />
      </svg>
    ),
  },
];

const platform = [
  { title: "Apollo Data", href: "/product/b2b-data" },
  { title: "Apollo AI", href: "/ai" },
  { title: "Integrations", href: "/product/integrations" },
  { title: "Chrome Extension", href: "/product/chrome-extension" },
  { title: "Workflow Automation", href: "/product/workflow-engine" },
];

// ============================
// Main Navbar Component
// ============================
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-[#ccc9c6]/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center space-x-2 ">
            {" "}
            <svg
              height="26"
              viewBox="0 0 152 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M19.5993 0.0862365L19.605 13.2568C19.6058 15.3375 17.4222 16.6715 15.6079 15.6986L2.58376 8.7153C3.57706 7.05795 4.82616 5.57609 6.27427 4.32386L16.489 13.8945C17.0303 14.4015 17.8835 13.8518 17.6605 13.1398L13.6992 0.493553C15.0326 0.17147 16.4233 0 17.8536 0C18.4428 0 19.0248 0.0296814 19.5993 0.0862365Z"
                fill="#F8FF2C"
              ></path>{" "}
              <path
                d="M16.0635 36.1087L16.0578 23.0046C16.057 20.9239 18.2407 19.5898 20.0549 20.5627L33.0838 27.5486C32.0838 29.2016 30.8289 30.6786 29.3751 31.925L19.1738 22.3668C18.6326 21.8598 17.7793 22.4095 18.0023 23.1215L21.9486 35.72C20.6338 36.0329 19.263 36.1989 17.8539 36.1989C17.2497 36.1989 16.6523 36.1683 16.0635 36.1087Z"
                fill="#F8FF2C"
              ></path>{" "}
              <path
                d="M22.0105 16.77L31.4705 6.39392C30.2362 4.92008 28.7742 3.6486 27.1384 2.63702L20.2306 15.8767C19.2709 17.716 20.5871 19.9298 22.6396 19.9288L35.6183 19.923C35.6775 19.3234 35.7082 18.7151 35.7082 18.0996C35.7082 16.6683 35.5436 15.2761 35.2338 13.9406L22.7549 17.9576C22.0526 18.1837 21.5103 17.3187 22.0105 16.77Z"
                fill="#F8FF2C"
              ></path>{" "}
              <path
                d="M0.0842758 16.3383L13.0237 16.3325C15.0764 16.3317 16.3923 18.5454 15.4327 20.3846L8.56047 33.5561C6.93095 32.547 5.47394 31.2801 4.24344 29.8121L13.653 19.4914C14.1531 18.9427 13.6107 18.0777 12.9084 18.3037L0.485078 22.3029C0.168551 20.954 0 19.5467 0 18.0994C0 17.5051 0.0290814 16.9177 0.0842758 16.3383Z"
                fill="#F8FF2C"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57.0218 3.78205H60.6172L72.556 32.4477H68.5958L64.912 23.327H52.6694L49.1387 32.4477H45.3968L57.0218 3.78205ZM58.6968 8.35018L54.052 19.9528H63.4944L58.6968 8.35018Z"
                fill="#000000"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.0131 22.4209C96.0131 16.3054 100.173 11.8668 105.904 11.8668C111.66 11.8668 115.838 16.3054 115.838 22.4209C115.838 28.5365 111.66 32.9753 105.904 32.9753C100.173 32.9753 96.0131 28.5365 96.0131 22.4209ZM99.7588 22.4209C99.7588 27.0223 102.114 29.8808 105.904 29.8808C109.721 29.8808 112.092 27.0223 112.092 22.4209C112.092 17.8197 109.721 14.9613 105.904 14.9613C102.114 14.9613 99.7588 17.8197 99.7588 22.4209Z"
                fill="#000000"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M142.109 11.8668C136.353 11.8668 132.175 16.3054 132.175 22.4209C132.175 28.5365 136.353 32.9753 142.109 32.9753C147.84 32.9753 152 28.5365 152 22.4209C152 16.3054 147.84 11.8668 142.109 11.8668ZM142.109 29.8808C138.292 29.8808 135.92 27.0223 135.92 22.4209C135.92 17.8197 138.292 14.9613 142.109 14.9613C145.9 14.9613 148.254 17.8197 148.254 22.4209C148.254 27.0223 145.9 29.8808 142.109 29.8808Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M122.206 32.4477H118.59V3.78205H122.206V32.4477Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M125.807 32.4477H129.424V3.78205H125.807V32.4477Z"
                fill="#000000"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M84.6895 32.9751C81.7329 32.9751 79.5182 31.5396 78.241 29.7601V40H74.6249V12.3935H78.241V15.1162C79.521 13.318 81.7375 11.8667 84.6895 11.8667C90.1907 11.8667 93.8867 16.1079 93.8867 22.4208C93.8867 28.7337 90.1907 32.9751 84.6895 32.9751ZM84.3427 15.0488C80.6409 15.0488 78.081 17.8451 78.081 21.8605V22.9813C78.081 26.9965 80.6409 29.7926 84.3427 29.7926C87.9732 29.7926 90.1408 27.0369 90.1408 22.4208C90.1408 17.8047 87.9732 15.0488 84.3427 15.0488Z"
                fill="#000000"
              ></path>{" "}
            </svg>{" "}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
            {/* SOLUTIONS DROPDOWN */}
            <li className="relative group">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className="px-4 py-2 text-[16px] font-medium text-black hover:text-gray-700"
              >
                Solutions
              </button>

              <div className="absolute left-[-150px] top-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-white rounded-xl shadow-xl mt-2 p-8 gap-10 w-[90vw] max-w-[1000px] flex">
                {/* Solutions Section */}
                <div className="flex-1">
                  <p className="uppercase text-xs text-gray-500 font-mono mb-4">
                    Apollo Solutions
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solutions.map((s, i) => (
                      <li key={i}>
                        <Link
                          href={s.href}
                          className="flex items-center gap-3 hover:text-black transition"
                        >
                          <div
                            className={`grid place-items-center h-10 w-10 rounded-lg ${s.bg}`}
                          >
                            {s.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-[18px]">
                              {s.title}
                            </p>
                            <p className="text-sm text-gray-500">{s.desc}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Platform Section */}
                <div>
                  <p className="uppercase text-xs text-gray-500 font-mono mb-4">
                    Platform
                  </p>
                  <ul className="space-y-3">
                    {platform.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="text-[15px] text-gray-700 hover:text-black"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's New Section */}
                <div>
                  <p className="uppercase text-xs text-gray-500 font-mono mb-4">
                    What’s New
                  </p>
                  <Link href="/next">
                    <Image
                      src="/assets/navber/image (1).webp"
                      alt="Apollo Next"
                      width={196}
                      height={140}
                      loading="lazy"
                      className="rounded-lg hover:scale-105 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </li>

            {/* ROLES DROPDOWN */}
            <li className="relative group">
              <button className="px-4 py-2 text-[16px] font-medium text-black hover:text-gray-700">
                Roles
              </button>

              <div className="absolute left-[-250px] top-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-white rounded-xl shadow-xl mt-2 p-8 gap-10 w-[90vw] max-w-[1000px] flex">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Roles
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      Discover tools tailored to your role and goals
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Sales Leaders",
                        "Account Executives",
                        "Sales Development",
                        "Revenue Operations",
                        "Marketers",
                        "Founders",
                      ].map((role, i) => (
                        <li key={i}>
                          <Link
                            href={`/personas/${role
                              .toLowerCase()
                              .replace(/\s/g, "-")}`}
                            className="hover:text-gray-500"
                          >
                            {role}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Image
                      src="/assets/navber/image.webp"
                      width={296}
                      height={240}
                      alt="Apollo routing accuracy"
                      className="rounded-lg object-cover hover:scale-105 transition-transform"
                    />
                    <div>
                      <p className="text-xs uppercase text-gray-400">
                        Apollo Platform
                      </p>
                      <p className="text-sm text-gray-600">
                        How Apollo Improved Routing Accuracy by 300% While
                        Boosting Inbound Conversions
                      </p>
                      <Link
                        href="/magazine/routing-accuracy-inbound-conversions"
                        className="text-sm hover:text-gray-500"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group">
              <button className="px-4 py-2 text-[16px] font-medium text-black hover:text-gray-700">
                Resources
              </button>

              <div className="absolute left-[-350px] top-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-white rounded-xl shadow-xl mt-2 p-8 gap-10 w-[90vw] max-w-[1100px] flex">
                <div className="relative flex  gap-6 ">
                  {/* === Learn Section === */}
                  <div className="flex flex-col gap-6 w-full">
                    <div>
                      <h3 className="font-founders-grotesk text-[24px] desktop-s:text-[26px] text-text-header">
                        Learn
                      </h3>
                      <p className="text-[14px] text-gray-500 text-sand-60">
                        Level up your sales mastery and Apollo know-how
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { href: "/academy", label: "Academy" },
                        { href: "/magazine", label: "Magazine" },
                        { href: "/academy/guides", label: "Books & Guides" },
                        { href: "/academy/templates", label: "Templates" },
                        { href: "/academy/webinars", label: "Webinars" },
                        {
                          href: "https://www.youtube.com/c/apolloio",
                          label: "Videos",
                          external: true,
                        },
                        {
                          href: "https://knowledge.apollo.io/hc/en-us",
                          label: "Knowledge Base",
                          external: true,
                        },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            className="block text-[14px] text-text-body hover:text-sand-60"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* === Connect Section === */}
                  <div className="flex flex-col gap-6 w-full desktop-s:w-[194px]">
                    <div>
                      <h3 className="font-founders-grotesk text-[24px] desktop-s:text-[26px] text-text-header">
                        Connect
                      </h3>
                      <p className="text-[14px] text-gray-500 text-sand-60">
                        Find out how others are driving growth with Apollo
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { href: "/community", label: "Join the Community" },
                        {
                          href: "/magazine/articles/customer-stories",
                          label: "Customer Stories",
                        },
                        { href: "/wall-of-love", label: "Reviews" },
                        { href: "/startups", label: "Apollo for Startups" },
                        {
                          href: "/partners/advocates",
                          label: "Apollo Advocates",
                        },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block text-[14px] text-text-body hover:text-sand-60"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* === Partner Section === */}
                  <div className="flex flex-col gap-6 w-full desktop-s:w-[194px]">
                    <div>
                      <h3 className="font-founders-grotesk text-[24px] desktop-s:text-[26px] text-text-header">
                        Partner
                      </h3>
                      <p className="text-[14px] text-gray-500 text-sand-60">
                        Explore opportunities to partner and grow together
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        {
                          href: "/partners/affiliates",
                          label: "Affiliate Partners",
                        },
                        {
                          href: "/partners/agencies",
                          label: "Agency Partners",
                        },
                        {
                          href: "/partners/technology",
                          label: "Technology Partners",
                        },
                        {
                          href: "/partners/startup-ecosystem",
                          label: "Startup Ecosystem",
                        },
                        {
                          href: "/certified-agency-partners",
                          label: "Find an Agency",
                        },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block text-[14px] text-text-body hover:text-sand-60"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* === Careers Section === */}
                  <div className="flex flex-col gap-6 w-full desktop-s:w-[194px]">
                    <div>
                      <h3 className="font-founders-grotesk text-[24px] desktop-s:text-[26px] text-text-header">
                        Careers
                      </h3>
                      <p className="text-[14px] text-gray-500 text-sand-60">
                        Build your career helping transform B2B sales
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { href: "/careers", label: "See Open Positions" },
                        { href: "/our-story", label: "Our Story" },
                        { href: "/life-at-apollo", label: "Life at Apollo" },
                        { href: "/our-teams", label: "Teams" },
                        { href: "/tech-blog", label: "Tech Blog" },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block text-[14px] text-text-body hover:text-sand-60"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col w-full gap-3">
                    <Image
                      src="/assets/navber/image (2).webp"
                      width={296}
                      height={240}
                      alt="Apollo routing accuracy"
                      className="rounded-lg object-cover hover:scale-105 transition-transform h-full w-full"
                    />
                    <div>
                      <p className="text-xs uppercase text-gray-400">
                        Apollo Platform
                      </p>
                      <p className="text-sm text-gray-600">
                        How Apollo Improved Routing Accuracy by 300% While
                        Boosting Inbound Conversions
                      </p>
                      <Link
                        href="/magazine/routing-accuracy-inbound-conversions"
                        className="text-sm hover:text-gray-500"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-3">
                    <Image
                      src="/assets/navber/image (3).webp"
                      width={296}
                      height={240}
                      alt="Apollo routing accuracy"
                      className="rounded-lg object-cover hover:scale-105 transition-transform bg-gray-600  h-full w-full"
                    />
                    <div>
                      <p className="text-xs uppercase text-gray-400">
                        Apollo Platform
                      </p>
                      <p className="text-sm text-gray-600">
                        How Apollo Improved Routing Accuracy by 300% While
                        Boosting Inbound Conversions
                      </p>
                      <Link
                        href="/magazine/routing-accuracy-inbound-conversions"
                        className="text-sm hover:text-gray-500"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-700">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="text">Sign in</Button>
          </Link>
          <Button variant="outline">Get Demo</Button>
          <Link href="/signup">
            <Button variant="solid">Sign up for free</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-200 border-t border-gray-300"
          >
            <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-800">
              {["Solutions", "Roles", "Resources", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3 px-6 pb-6">
              <Link href="/login">
                <Button variant="text">Sign in</Button>
              </Link>
              <Button variant="outline">Get Demo</Button>
              <Button variant="solid">Sign up free</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
