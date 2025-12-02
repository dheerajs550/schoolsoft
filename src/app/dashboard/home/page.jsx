"use client";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/ui/Card";
import React from "react";

export default function Page() {
  const stats = [
    { label: "Students", value: "1,248" },
    { label: "Teachers", value: "84" },
    { label: "Classes", value: "32" },
    { label: "Attendance (today)", value: "92%" },
  ];

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(16,185,129,0.04)), repeating-linear-gradient(135deg, rgba(99,102,241,0.06) 0px, rgba(99,102,241,0.06) 8px, rgba(16,185,129,0.03) 8px, rgba(16,185,129,0.03) 16px)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Sidebar */}
      {/* <aside className="w-72 p-6 bg-white/70 backdrop-blur-md border-r border-white/30">
        <h1 className="text-2xl font-bold text-indigo-700 mb-1">SchoolSoft</h1>
        <p className="text-sm text-slate-600 mb-8">Admin Dashboard</p>

        <nav className="space-y-2">
          {["Overview", "Students", "Teachers", "Classes", "Attendance", "Settings"].map((item) => (
            <a
              key={item}
              href="#"
              className="block p-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-8 text-xs text-slate-500">
          Logged in as <strong>Principal</strong>
        </div>
      </aside> */}
      <Sidebar/>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-3">
          <div>
            <h2 className="text-3xl font-semibold">Overview</h2>
            <p className="text-sm text-slate-600">
              Welcome back — here's what's happening today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="px-3 py-2 rounded-lg border border-white/40 bg-white/60 backdrop-blur-sm text-sm"
              placeholder="Search students, classes..."
            />
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700">
              Create
            </button>
          </div>
        </div>

        {/* Stats */}
        {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-2xl bg-white/80 border border-white/30 shadow-sm"
            >
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className="text-2xl font-bold text-slate-800">{s.value}</div>
            </div>
          ))}
        </section> */}
        <Card data={stats}/>
          
        {/* Activity + Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white/80 rounded-2xl p-6 border border-white/30 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="p-3 rounded-lg hover:bg-slate-50">
                Attendance updated for Class 10A
              </li>
              <li className="p-3 rounded-lg hover:bg-slate-50">
                New student registered: Asha R.
              </li>
              <li className="p-3 rounded-lg hover:bg-slate-50">
                Exam results uploaded for Grade 8
              </li>
            </ul>
          </div>

          <div className="bg-white/80 rounded-2xl p-6 border border-white/30 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Add student
              </button>
              <button className="py-2 rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Mark attendance
              </button>
              <button className="py-2 rounded-lg border border-slate-600 text-slate-600 hover:bg-slate-50">
                Export report
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} SchoolSoft
        </footer>
      </main>
    </div>
  );
}
