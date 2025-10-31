"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export default function Login() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* === Left: Form Section === */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            {/* Social Sign-In Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button className="w-full h-12 px-5 flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
                <FcGoogle className="text-xl" />
                <span>Sign up with Google</span>
              </button>

              <button className="w-full h-12 px-5 flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
                <TfiMicrosoftAlt className="text-xl" />
                <span>Sign up with Microsoft</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-grow border-t border-gray-300" />
              <p className="text-sm text-gray-500">or</p>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Login Form */}
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-500 cursor-pointer"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Sign in
              </button>

              <p className="text-sm text-gray-500 text-center">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign up
                </a>
              </p>

              <p className="text-xs text-gray-400 text-center mt-4">
                © 2025 All Rights Reserved. <br />
                Privacy & Terms.
              </p>
            </form>
          </div>

          {/* === Right: Image + Info Section === */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left space-y-6">
            <Image
              src="/assets/loginimg.png"
              alt="Login illustration"
              width={450}
              height={500}
              className="object-contain"
              priority
            />

            <div className="space-y-4 max-w-sm">
              <h1 className="text-3xl font-bold text-gray-900">800,000+</h1>
              <p className="text-gray-600 leading-relaxed">
                Salespeople and marketers use our extension to prospect,
                connect, and convert leads faster.
              </p>
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white rounded-lg font-medium transition">
                Get Apollo Chrome Extension
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
