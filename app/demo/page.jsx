import BrandSlider from "@/components/Demo/BrandSlider";
import React from "react";

export default function Demo() {
  return (
    <>
      <div className="bg-white py-20">
        <div className="flex w-full mx-auto max-w-[480px] flex-col gap-2 rounded-xl px-8 ">
          <div className="space-y-2 text-center">
            <h6 className="antialiased text-3xl  tracking-[-0.28px] leading-none font-founders-grotesk text-text-header text-gray-800 ">
              See Apollo in action
            </h6>
            <p className="antialiased text-gray-500 text-[16px] leading-[130%] font-abc-diatype text-text-body __variable_7121de">
              We'd love to show how Apollo can help you sell better.
            </p>
          </div>
          <div style={{ visibility: "hidden", position: "fixed" }}>
            <button type="button" className="intercom-demo-chat-bot"></button>
          </div>
          <div className="space-y-8 py-6">
            <div className="relative flex w-full flex-col">
              <div className="flex items-center rounded-lg text-gray-400 h-[48px] px-3 border border-sand-50 focus-within:border-black hover:border-sand-70 hover:focus-within:border-black">
                <input
                  placeholder="Company email"
                  className="w-full bg-transparent focus:outline-none text-[16px] leading-[130%] font-abc-diatype text-text-body leading-none placeholder-sand-60"
                  type="email"
                  required=""
                  name="email"
                />
              </div>
            </div>
            <button
              type="button"
              className="group rounded-lg transition-all h-12 px-5 bg-black text-white disabled:bg-sand-50 hover:bg-sand-70 active:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black w-full"
            >
              <div className="flex items-center justify-center gap-2">
                <p className="text-[16px] leading-[130%] font-abc-diatype text-inherit __variable_7121de">
                  Get a demo
                </p>
                <span className="right-icon transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M14.4911 9.62505L9.55806 14.5581L10.4419 15.442L16.8839 9.00005L10.4419 2.55811L9.55806 3.44199L14.4911 8.37505L1 8.37505L1 9.62505L14.4911 9.62505Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
          <div>
            <p className="antialiased  text-gray-500 text-[14px] leading-[130%] font-abc-diatype tracking-normal text-center text-text-placeholder __variable_7121de">
              By submitting this form, you will receive information, tips, and
              promotions from Apollo. To learn more, see our{" "}
              <a className="underline" target="_blank" href="/privacy-policy">
                <span>Privacy Statement</span>
              </a>
              .
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 max-tablet:flex-col">
            <div className="flex">
              <svg
                width="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                width="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                width="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                width="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                width="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <p className="antialiased text-gray-500 text-[14px] leading-[130%] font-abc-diatype text-text-body tracking-normal __variable_7121de">
              4.7/5 based on 9,015 reviews{" "}
            </p>
          </div>
        </div>
      </div>
      <BrandSlider />
    </>
  );
}
