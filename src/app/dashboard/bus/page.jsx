"use client";

import { useState } from "react";
import { Printer } from "lucide-react";

export default function BusStudentList() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 1, name: "Aarav Sharma", class: "6th", totalFee: 6000, paidFee: 3000 },
    { id: 2, name: "Priya Verma", class: "7th", totalFee: 6000, paidFee: 6000 },
    { id: 3, name: "Rahul Kumar", class: "5th", totalFee: 5000, paidFee: 2000 },
  ];

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const printPage = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        🚍 Bus Students Fee Status
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Student..."
          className="px-4 py-2 border rounded-lg w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Print Button */}
      <div className="flex justify-end mb-3">
        <button
          onClick={printPage}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          <Printer size={18} /> Print
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-left border">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-3">Student Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Total Fee</th>
              <th className="p-3">Pending Fee</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => {
              const pending = s.totalFee - s.paidFee;
              return (
                <tr key={s.id} className="border-b">
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">{s.class}</td>
                  <td className="p-3">₹{s.totalFee}</td>
                  <td className="p-3 text-red-600">
                    {pending > 0 ? `₹${pending}` : "₹0"}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      pending > 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {pending > 0 ? "Pending" : "Paid"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
