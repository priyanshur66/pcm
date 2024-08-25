"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ComingSoonPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#323030] text-center px-4">
      {/* Back button */}
      <div className="absolute top-4 left-4" >
      <button onClick={() => router.back()} className="text-white">
          {/* Back Arrow Icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex">
      <p className="text-white font-semibold text-lg">
          Choose payment method
        </p>
      </div>

      <div className="absolute top-20 inset-x-0 flex justify-center">
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full px-4 py-2 rounded-full bg-[#0F0F0F] text-white placeholder-gray-500"
          />
        </div>
      </div>

      <div className="mt-32">
        <div className="flex justify-center mb-6">
          <img src="/clock.svg" alt="" />

          
        </div>
        <p className="text-white font-semibold text-lg">Coming Soon</p>
        <p className="text-gray-400 mt-2">
          Please be patient while we curate these features shortly
        </p>
      </div>
    </div>
  );
}

export default ComingSoonPage;