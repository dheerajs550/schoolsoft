"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Moon, Sun } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <div className={`min-h-screen p-6 sm:p-10 transition-all duration-300 
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
    `}>
      <div className={`max-w-4xl mx-auto p-8 rounded-xl shadow-xl 
        ${darkMode ? "bg-gray-800" : "bg-white"}
      `}>

        {/* Back Button */}
        <button
          className="flex items-center gap-2 mb-6 font-medium hover:opacity-70"
          onClick={() => router.back()}
        >
          <ArrowLeft size={22} /> Back
        </button>

        <h1 className="text-3xl font-bold mb-8 text-center">
          ⚙️ Settings
        </h1>

        {/* ------------------ Profile Settings ------------------ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">👤 Profile Settings</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputBox
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Enter your name"
              darkMode={darkMode}
            />

            <InputBox
              label="Email Address"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter your email"
              darkMode={darkMode}
            />
          </div>

          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Save Profile
          </button>
        </section>

        {/* ------------------ Change Password ------------------ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">🔐 Change Password</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputBox
              label="Old Password"
              name="oldPass"
              value={passwords.oldPass}
              onChange={handlePasswordChange}
              placeholder="Enter old password"
              password
              darkMode={darkMode}
            />

            <InputBox
              label="New Password"
              name="newPass"
              value={passwords.newPass}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              password
              darkMode={darkMode}
            />

            <InputBox
              label="Confirm Password"
              name="confirmPass"
              value={passwords.confirmPass}
              onChange={handlePasswordChange}
              placeholder="Re-enter new password"
              password
              darkMode={darkMode}
            />
          </div>

          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Update Password
          </button>
        </section>

        {/* ------------------ Theme Toggle ------------------ */}
        <section>
          <h2 className="text-xl font-semibold mb-4">🌓 Theme Mode</h2>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg 
            border font-medium hover:opacity-80 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </section>

      </div>
    </div>
  );
}

/* 🔹 Input Component */
function InputBox({ label, name, value, onChange, placeholder, password, darkMode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={password ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-lg border outline-none
          ${darkMode 
            ? "bg-gray-700 border-gray-600 text-white" 
            : "bg-white border-gray-300 text-gray-900"}
          focus:ring-2 focus:ring-indigo-500`}
      />
    </div>
  );
}
