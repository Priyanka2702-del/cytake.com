"use client";

import { useState } from "react";

type Member = {
  name: string;
  role: string;
  desc: string;
  image: string;
};

export default function TeamCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = member.desc.length > 160;
  const displayDesc = expanded ? member.desc : member.desc.slice(0, 160);

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-[0_30px_60px_rgba(56,189,248,0.3)] hover:-translate-y-2 transition-all duration-500 border border-blue-50">

      {/* Top gradient bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      <div className="flex flex-col sm:flex-row">
        {/* Image — left side */}
        <div className="relative sm:w-[42%] h-72 sm:h-[340px] overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Social icons — slide in on hover */}
          <div className="absolute top-4 left-4 flex gap-2 -translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
            <a href="#" className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-blue-600 flex items-center justify-center transition-colors shadow-lg group/icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-blue-600 group-hover/icon:fill-white transition-colors">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-blue-600 flex items-center justify-center transition-colors shadow-lg group/icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-blue-600 group-hover/icon:fill-white transition-colors">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Content — right side */}
        <div className="p-6 flex flex-col justify-center sm:w-[58%]">
          <h3 className="text-gray-900 font-black text-xl mb-1 group-hover:text-blue-600 transition-colors">
            {member.name}
          </h3>
          <p className="text-sky-600 text-sm font-semibold mb-3">{member.role}</p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 mb-3 scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Description with Read More */}
          <p className="text-slate-500 text-sm leading-relaxed">
            {displayDesc}
            {isLong && !expanded && "... "}
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                {expanded ? " Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}