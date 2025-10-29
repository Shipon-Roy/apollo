import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ccc9c6] py-16 text-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/3 space-y-4">
            <Image
              src="/assets/footerlogo.svg"
              width={220}
              height={220}
              alt="Apollo Logo"
            />
            <p className="text-sm text-black my-5">Apollo © 2025</p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Don’t Sell My Info
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-2/3 space-y-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Get started</h3>
                <ul className="space-y-2 text-sm">
                  <li>Sign up for free</li>
                  <li>Pricing</li>
                  <li>Request a demo</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Solutions</h3>
                <ul className="space-y-2 text-sm">
                  <li>Outbound</li>
                  <li>Inbound</li>
                  <li>Data Enrichment</li>
                  <li>Deal Execution</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li>Apollo Data</li>
                  <li>Apollo AI</li>
                  <li>Integrations</li>
                  <li>Chrome Extension</li>
                  <li>Workflow Automation</li>
                  <li>Security</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Roles</h3>
                <ul className="space-y-2 text-sm">
                  <li>Sales Leaders</li>
                  <li>Account Executives</li>
                  <li>Sales Development</li>
                  <li>Founders</li>
                  <li>Marketing</li>
                  <li>Revenue Operations</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>Prospecting</li>
                  <li>Lead Management</li>
                  <li>CRM Enrichment</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>Blog</li>
                  <li>Help Center</li>
                  <li>Case Studies</li>
                  <li>API Docs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Newsroom</li>
                  <li>Partners</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Prospect anywhere</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Get verified emails and phone numbers and instantly reach out
                  while working in your favorite tools.
                </p>
                <button className="px-6 py-3 border border-gray-800 rounded-lg hover:bg-gray-300 text-gray-800 transition text-sm">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
