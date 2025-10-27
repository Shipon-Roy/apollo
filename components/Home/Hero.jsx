import Image from "next/image";
import Container from "../Container";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export default function HeroSection() {
  return (
    <section className="bg-[#ccc9c6]">
      <Container>
        <div className="rounded-t-xl p-10 sm:px-7 md:px-9 lg:px-14 xl:px-20 flex flex-col gap-10 md:gap-16 lg:gap-20 bg-white ">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h1 className="antialiased text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight text-gray-900  ">
              The AI sales platform for <br /> smarter, faster revenue growth
            </h1>

            <p className="text-base text-gray-600 max-w-[550px]">
              Build pipeline smarter, close deals faster, and simplify your tech
              stack with a unified platform built for modern sales and marketing
              teams.
            </p>

            {/* Signup Form */}
            <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
              <div className="flex flex-col mx-auto  sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="w-full  h-12 px-4 border text-black rounded-lg focus:outline-none focus:border-black"
                />
                <button className="w-sm px-4 py-2 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-gray-300 transition">
                  Sign up for free
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-grow border-t border-gray-300" />
                <p className="text-sm text-gray-500">or</p>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              <div className="flex flex-col mx-auto w-full sm:flex-row gap-3">
                <button className="w-full h-12 px-5 flex items-center justify-center gap-2 border border-black rounded-lg bg-gray-100 text-black hover:bg-gray-300 transition">
                  <FcGoogle />

                  <span>Sign up with Google</span>
                </button>

                <button className="w-full h-12 px-5 flex items-center justify-center gap-2 border border-black rounded-lg bg-gray-100 text-black hover:bg-gray-300 transition">
                  <TfiMicrosoftAlt />

                  <span>Sign up with Microsoft</span>
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                By signing up, I agree to Apollo’s{" "}
                <a
                  href="/terms"
                  target="_blank"
                  className="underline hover:text-black"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="underline hover:text-black"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          <div className="w-full mx-auto mt-12">
            <div className="relative aspect-2/1 rounded-xl overflow-hidden">
              <Image
                src="/assets/image.webp"
                alt="Create a multi-channel campaign"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
