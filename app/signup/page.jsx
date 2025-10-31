"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export default function Signup() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* === Left: Form Section === */}
          <div className="w-full max-w-full bg-white rounded-xl shadow-lg  md:p-10">
            <div className="w-md mx-auto">
              {/* Header */}
              <div className="mb-6 space-y-3 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Sign up for Apollo — <br />
                  free forever
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Find, contact, and close your ideal buyers with over{" "}
                  <strong>210M+ verified contacts</strong> in one powerful AI
                  sales platform.
                </p>
              </div>

              {/* === Signup Form === */}
              <form className="space-y-5">
                <p className="text-[13px] bg-blue-100 rounded p-2 text-gray-800 text-center ">
                  By signing up, you agree to Apollo’s{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <div className="flex flex-col items-center sm:flex-row gap-3">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@company.com"
                      required
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:flex-shrink-0 sm:w-40 mt-1 sm:mt-6">
                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-700 transition font-medium"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </form>

              {/* === Divider === */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-grow border-t border-gray-300" />
                <p className="text-sm text-gray-500">or</p>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              {/* === Social Buttons === */}
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-400 text-center mb-4">
                  Verify your business email with Google or Microsoft
                </p>
                <button className="w-full h-12 px-5 flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
                  <FcGoogle className="text-xl" />
                  <span>Sign up with Google</span>
                </button>

                <button className="w-full h-12 px-5 flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
                  <TfiMicrosoftAlt className="text-xl" />
                  <span>Sign up with Microsoft</span>
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  ⭐ 4.7/5 based on 9,015 reviews • GDPR Compliant
                </p>
              </div>
            </div>
          </div>

          {/* === Right: Video Section === */}
          <div className="w-full md:w-1/2   ">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md">
              <video
                src="/assets/video.de0748f5.webm"
                className="w-full h-auto object-cover"
                controls
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
