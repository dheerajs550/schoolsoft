"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-51 bg-white/80 text-black shadow-lg ">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        {/* Left: School Logo / Name */}
        <div className="flex items-center gap-2">
          <img
            src="/favicon.ico" // 🟣 replace with your actual logo file
            alt="School Logo"
            className="h-10 w-10 rounded-full object-cover bg-white p-1 shadow-md"
          />
          <h1 className=" text-2xl font-bold text-purple-700">
            Sanskar Valley School
          </h1>
          
        </div>

        {/* Right: Profile */}
        <div className="flex items-center gap-3">
          <p className="text-sm text-slate-600 ">Admin</p>
          <img
            src="/favicon.ico"  // 🟣 replace with actual profile photo path
            alt="Admin Profile"
            className="h-10 w-10 rounded-full border-2 border-white object-cover cursor-pointer hover:scale-105 transition shadow-md"
          />
        </div>
      </div>
    </nav>
  );
}
