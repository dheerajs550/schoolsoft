"use client";
import React, { useState } from "react";
import { Check, X, Save } from "lucide-react";

export default function AttendancePage() {
  const classes = ["1st", "2nd", "3rd", "4th", "5th", "6th"];
  const sections = ["A", "B", "C"];

  // 🧑‍🎓 Demo student data
  const STUDENTS = {
    "4th-A": [
      "Aarav Sharma",
      "Priya Patel",
      "Rohan Singh",
      "Ananya Gupta",
      "Kavya Mehta",
      "Arjun Verma",
      "Isha Nair",
      "Rahul Yadav",
    ],
    "4th-B": ["Tanish", "Mihika", "Sahil", "Khushi"],
    "5th-A": ["Aditya", "Diya", "Kartik", "Sneha"],
  };

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [attendance, setAttendance] = useState({});
  const [saved, setSaved] = useState(false);

  const key = `${selectedClass}-${selectedSection}`;
  const students = STUDENTS[key] || [];

  const handleMark = (student, status) => {
    setAttendance((prev) => ({
      ...prev,
      [student]: status,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    if (!selectedClass || !selectedSection) {
      alert("Please select class and section first!");
      return;
    }
    setSaved(true);
  };

  const total = students.length;
  const present = Object.values(attendance).filter((a) => a === "present").length;
  const absent = Object.values(attendance).filter((a) => a === "absent").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-300 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-20 border border-purple-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-purple-700">
            📋 Student Attendance Management
          </h1>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md shadow"
          >
            <Save size={18} /> Save Attendance
          </button>
        </div>

        {/* Selectors */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Select Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedSection("");
                setAttendance({});
              }}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">-- Select Class --</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Select Section
            </label>
            <select
              value={selectedSection}
              onChange={(e) => {
                setSelectedSection(e.target.value);
                setAttendance({});
              }}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">-- Select Section --</option>
              {sections.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Student Table */}
        {selectedClass && selectedSection && (
          <div>
            <table className="w-full border-collapse border border-purple-200">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="p-2 border border-purple-300 text-left">Roll No</th>
                  <th className="p-2 border border-purple-300 text-left">Student Name</th>
                  <th className="p-2 border border-purple-300 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student} className="even:bg-purple-50 hover:bg-purple-100">
                    <td className="p-2 border border-purple-200">{index + 1}</td>
                    <td className="p-2 border border-purple-200 font-medium">
                      {student}
                    </td>
                    <td className="p-2 border border-purple-200 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleMark(student, "present")}
                          className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
                            attendance[student] === "present"
                              ? "bg-green-500 text-white"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          }`}
                        >
                          <Check size={14} /> Present
                        </button>
                        <button
                          onClick={() => handleMark(student, "absent")}
                          className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
                            attendance[student] === "absent"
                              ? "bg-red-500 text-white"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                          }`}
                        >
                          <X size={14} /> Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Summary */}
            <div className="mt-6 flex justify-between items-center bg-purple-50 p-4 rounded-md border border-purple-200">
              <p className="text-gray-700">
                Total Students: <strong>{total}</strong> | Present:{" "}
                <strong className="text-green-600">{present}</strong> | Absent:{" "}
                <strong className="text-red-600">{absent}</strong>
              </p>
              {saved && (
                <p className="text-green-700 font-medium">✅ Attendance Saved!</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
