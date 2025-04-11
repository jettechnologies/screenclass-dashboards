"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const WhatsAppPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Team members data
  const teamMembers = [
    {
      name: "Customer care",
      title: "Customer care",
      phoneNumber: "+2347043303000",
      logo: "/icons/whatsapp.png",
    },
    {
      name: "Technical support",
      title: "Technical support",
      phoneNumber: "+2347043303000",
      logo: "/icons/whatsapp.png",
    },
  ];

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={popoverRef}>
      {/* Popover Content */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-72 overflow-hidden rounded-lg bg-white shadow-xl md:w-[25rem]">
          {/* Header */}
          <div className="bg-SC-Brand-Blue p-4 text-white">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/whatsapp-icon.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <h3 className="text-lg font-medium">Start a Conversation</h3>
            </div>
            <p className="mt-1 text-sm">
              Hi! Click one of our member below to chat on
              <span className="font-medium"> WhatsApp</span>
            </p>
          </div>

          {/* Team response time */}
          <div className="border-b border-gray-200 px-4 py-2 text-sm text-gray-500">
            The team typically replies in a few minutes.
          </div>

          {/* Team members */}
          <div className="max-h-60 overflow-y-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="border-l-4 border-SC-Light-Blue hover:bg-gray-50"
              >
                <a
                  href={`https://wa.me/${member.phoneNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.title}</p>
                    </div>
                  </div>
                  <div className="h-8 w-8 shrink-0">
                    <Image
                      src={member.logo}
                      alt={member.name}
                      width={32}
                      height={32}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-white"
            aria-label="Close popover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl ${
          isOpen ? "" : "animate-bounce hover:animate-none"
        }`}
        aria-label="Open WhatsApp chat"
      >
        <Image
          src="/icons/whatsapp-icon-blue.png"
          alt="Chat on WhatsApp"
          width={45}
          height={45}
        />
      </button>
    </div>
  );
};
