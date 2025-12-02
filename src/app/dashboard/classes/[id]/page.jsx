"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Edit, Trash2, Users, BookOpen, Calendar } from "lucide-react";

const allClassData = {
  lkg: {
    className: "LKG",
    teacher: "Ms. Nisha",
    schedule: "9:00 AM - 12:00 PM",
    subjects: ["Rhymes", "Drawing", "Games"],
    students: [
      { id: 1, name: "Ria Sharma", roll: 1, attendance: "96%" },
      { id: 2, name: "Karan Patel", roll: 2, attendance: "92%" },
    ],
  },
  "10": {
    className: "10th Grade",
    teacher: "Mr. Rajesh Kumar",
    schedule: "8:00 AM - 2:00 PM",
    subjects: ["Math", "Science", "English", "History", "Computer"],
    students: [
      { id: 1, name: "Aarav Sharma", roll: 12, attendance: "95%" },
      { id: 2, name: "Isha Patel", roll: 8, attendance: "92%" },
      { id: 3, name: "Rohan Mehta", roll: 5, attendance: "97%" },
    ],
  },
  // Add similar data for 1–12
};

export default function ClassDetail() {
  const { id } = useParams();
  const classData = allClassData[id];

  const [students, setStudents] = useState(classData?.students || []);

  if (!classData) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        Class not found 😕
      </div>
    );
  }

  const handleDelete = (student) => {
    if (confirm(`Delete ${student.name}?`)) {
      setStudents(students.filter((s) => s.id !== student.id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-emerald-100 p-8">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/40">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Link href="/dashboard/classes" className="text-indigo-600 hover:text-indigo-800">
              <ArrowLeft size={22} />
            </Link>
            <h1 className="text-3xl font-bold text-indigo-700">{classData.className}</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-1">
              <Edit size={16} /> Edit
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-1">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-5 bg-indigo-50 rounded-2xl flex items-center gap-3">
            <Users className="text-indigo-600" size={28} />
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-lg font-semibold text-gray-800">{students.length}</p>
            </div>
          </div>
          <div className="p-5 bg-emerald-50 rounded-2xl flex items-center gap-3">
            <BookOpen className="text-emerald-600" size={28} />
            <div>
              <p className="text-gray-600 text-sm">Class Teacher</p>
              <p className="text-lg font-semibold text-gray-800">{classData.teacher}</p>
            </div>
          </div>
          <div className="p-5 bg-orange-50 rounded-2xl flex items-center gap-3">
            <Calendar className="text-orange-600" size={28} />
            <div>
              <p className="text-gray-600 text-sm">Schedule</p>
              <p className="text-lg font-semibold text-gray-800">{classData.schedule}</p>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Subjects</h2>
          <div className="flex flex-wrap gap-2">
            {classData.subjects.map((sub, i) => (
              <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Roll</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Attendance</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr
                  key={s.id}
                  className={`hover:bg-indigo-50 transition ${i % 2 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-4 py-3">{s.roll}</td>
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3">{s.attendance}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => alert(`Viewing ${s.name}`)}
                      className="px-2 py-1 text-indigo-600 hover:bg-indigo-100 rounded-lg mx-1"
                    >
                      View
                    </button>
                    <button
                      onClick={() => alert(`Editing ${s.name}`)}
                      className="px-2 py-1 text-green-600 hover:bg-green-100 rounded-lg mx-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s)}
                      className="px-2 py-1 text-red-600 hover:bg-red-100 rounded-lg mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
