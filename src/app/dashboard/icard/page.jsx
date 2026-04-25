"use client";
import { useState } from "react";
import {
  CheckSquare,
  Square,
  Printer,
  ArrowLeft,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import schoolData from "@/data/schoolData";

export default function ICardPage() {
  const router = useRouter();

  const [students] = useState([
    {
      id: "ST001",
      name: "Aarav Sharma",
      roll: 12,
      class: "10A",
      dob: "2009-04-21",
      bloodGroup: "B+",
      guardian: "Rajesh Sharma",
      contact: "9876543210",
      photo: "/student-photo.png",
      issueDate: "2025-04-01",
    },
    {
      id: "ST002",
      name: "Isha Patel",
      roll: 8,
      class: "9B",
      dob: "2010-02-15",
      bloodGroup: "A+",
      guardian: "Meena Patel",
      contact: "9998877766",
      photo: "/student-photo.png",
      issueDate: "2025-04-03",
    },
    {
      id: "ST003",
      name: "Rohan Mehta",
      roll: 5,
      class: "11C",
      dob: "2008-07-10",
      bloodGroup: "O+",
      guardian: "Vikas Mehta",
      contact: "9812345678",
      photo: "/student-photo.png",
      issueDate: "2025-04-05",
    },
    {
      id: "ST004",
      name: "Simran Kaur",
      roll: 9,
      class: "8C",
      dob: "2011-08-20",
      bloodGroup: "B+",
      guardian: "Harpreet Kaur",
      contact: "9811122233",
      photo: "/student-photo.png",
      issueDate: "2025-04-02",
    },
     {
      id: "ST004",
      name: "Simran Kaur",
      roll: 9,
      class: "8C",
      dob: "2011-08-20",
      bloodGroup: "B+",
      guardian: "Harpreet Kaur",
      contact: "9811122233",
      photo: "/student-photo.png",
      issueDate: "2025-04-02",
    },
    
  ]);

  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelected(
      selected.length === students.length ? [] : students.map((s) => s.id)
    );
  };

  const handlePrint = () => {
    if (selected.length === 0) {
      alert("Please select at least one student to print I-Cards.");
      return;
    }
    window.print();
  };

  const handleGenerate = (student) => {
    alert(`Generating I-Card for ${student.name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-emerald-100 p-8 print:p-0">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/40 print:shadow-none print:border-none">

        {/* Header - hidden in print */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
            >
              <ArrowLeft size={20} /> Back
            </button>
            <h1 className="text-3xl font-bold text-indigo-700">
              Student I-Card Management
            </h1>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md"
          >
            <Printer size={18} /> Print Selected I-Cards
          </button>
        </div>

        {/* Table - hidden in print */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md mb-10 print:hidden">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white">
              <tr>
                <th
                  className="px-4 py-3 text-center cursor-pointer"
                  onClick={selectAll}
                >
                  {selected.length === students.length ? (
                    <CheckSquare className="inline" size={18} />
                  ) : (
                    <Square className="inline" size={18} />
                  )}
                </th>
                <th className="px-4 py-3 text-left">Roll No</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Class</th>
                <th className="px-4 py-3 text-left">DOB</th>
                <th className="px-4 py-3 text-left">Guardian</th>
                <th className="px-4 py-3 text-left">Contact</th>
                <th className="px-4 py-3 text-left">Issue Date</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className={`hover:bg-indigo-50 transition ${
                    index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                  }`}
                >
                  <td
                    className="px-4 py-3 text-center cursor-pointer"
                    onClick={() => toggleSelect(student.id)}
                  >
                    {selected.includes(student.id) ? (
                      <CheckSquare
                        className="text-indigo-600 mx-auto"
                        size={18}
                      />
                    ) : (
                      <Square className="text-gray-400 mx-auto" size={18} />
                    )}
                  </td>
                  <td className="px-4 py-3">{student.roll}</td>
                  <td className="px-4 py-3 font-medium">{student.name}</td>
                  <td className="px-4 py-3">{student.class}</td>
                  <td className="px-4 py-3">{student.dob}</td>
                  <td className="px-4 py-3">{student.guardian}</td>
                  <td className="px-4 py-3">{student.contact}</td>
                  <td className="px-4 py-3">{student.issueDate}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleGenerate(student)}
                      className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-xs flex items-center gap-1 mx-auto"
                    >
                      <IdCard size={14} /> Generate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Printable I-Cards */}
        <div className="print-area grid grid-cols-3 gap-4 justify-items-center print:grid-cols-3">
          {students
            .filter((s) => selected.includes(s.id))
            .map((student) => (
              <div
                key={student.id}
                className="border-2 border-indigo-600 rounded-2xl overflow-hidden w-[240px] h-[340px] bg-white shadow-lg text-center print:shadow-none print:w-[240px] print:h-[340px]"
              >
                <div className="bg-indigo-600 text-white p-2 text-center">
                  <h2 className="text-sm font-bold leading-tight">
                      {schoolData.name}
                  </h2>
                  <p className="text-[10px] text-indigo-100 leading-tight">
                    Knowledge | Discipline | Growth
                  </p>
                </div>

                <div className="flex justify-center mt-3">
                  <div className="h-20 w-20 rounded-md overflow-hidden border-2 border-indigo-500">
                    <Image
                      src={student.photo}
                      alt={student.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="p-3 text-xs text-gray-800">
                  <p className="font-semibold text-sm">{student.name}</p>
                  <p className="text-gray-600 text-[11px] mb-2">
                    Class {student.class} | Roll {student.roll}
                  </p>
                  <div className="text-left text-[11px] leading-tight">
                    <p><strong>ID:</strong> {student.id}</p>
                    <p><strong>DOB:</strong> {student.dob}</p>
                    <p><strong>Guardian:</strong> {student.guardian}</p>
                    <p><strong>Blood:</strong> {student.bloodGroup}</p>
                    <p><strong>Contact:</strong> {student.contact}</p>
                    <p><strong>Issue:</strong> {student.issueDate}</p>
                  </div>
                </div>

                <div className="bg-indigo-600 text-white py-1 text-[10px] font-medium">
                  Valid for Academic Year 2025-26
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
