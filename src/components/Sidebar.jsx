"use client";
import React from "react";

export default function Sidebar() {
  const navLinks = [
    { name: "Overview", link: "/dashboard" },
    { name: "Students", link: "/dashboard/students" },
    { name: "Teachers", link: "/dashboard/teachers" },
    { name: "Classes", link: "/dashboard/classes" },
    { name: "Attendance", link: "/dashboard/attendance" },
    { name: "Fees", link: "/dashboard/fees" },
    { name: "Paper", link: "/dashboard/paper" },
    { name: "Exam", link: "/dashboard/exam" },
    { name: "certificate", link: "/dashboard/certificate" },
    { name: "ICard", link: "/dashboard/icard" },
    { name: "Bus", link: "/dashboard/bus" },
    { name: "Settings", link: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Fixed Sidebar */}
      <aside className="z-9 fixed left-0 top-0 h-screen w-55 p-6 bg-white/80 backdrop-blur-md border-r border-indigo-100 shadow-lg flex flex-col justify-between">
        <div>
          {/* Logo Section */}
          {/* <a href="/dashboard">
            <h1 className="text-2xl font-bold text-indigo-700 mb-1">
              Sanskar Valley
            </h1>
          </a>
          <p className="text-sm text-slate-600 mb-8">Admin Dashboard</p> */}

          {/* Navigation Links */}
          <nav className="space-y-1 pt-10">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block p-2 rounded-lg text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Section */}
        <div className="text-xs text-slate-500 mt-6 border-t border-gray-200 pt-4">
          Logged in as <strong>Principal</strong>
        </div>
      </aside>
    </>
  );
}
