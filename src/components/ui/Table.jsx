"use client";
import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StudentTable({ data,link, heading = "Student Management",columns }) {
  const router = useRouter();

  const handleView = (student) => {
    router.push(`/dashboard/students/view/${student.id}`);
  };

  const handleEdit = (student) => alert(`✏️ Editing ${student.name}`);
  const handleDelete = (student) => {
    if (confirm(`Are you sure you want to delete ${student.name}?`)) {
      alert(`🗑️ Deleted ${student.name}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-emerald-100 p-8">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/40">
        
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">{heading}</h1>
          <a
            href={`/dashboard/${link}`}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            + Add {heading}
          </a>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 text-white">
            <tr>
            {columns?.map((col, i) => (
              <th key={i} className="px-3 py-3 text-left">
                {col.label}
              </th>
            ))}

            {/* Last column "Actions" fix rahega */}
            <th className="px-3 py-3 text-center">Actions</th>
          </tr>

            </thead>

            <tbody>
              {data?.length > 0 ? (
                data.map((item, i) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-indigo-50 transition ${
                      i % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-3 py-3">{item.roll||item.teacherName}</td>
                    <td className="px-3 py-3 font-medium">{item.name|| item.fatherName }</td>
                    <td className="px-3 py-3">{item.class||item.phone}</td>
                    <td className="px-3 py-3">{item.section  ||item.aadharNo||"A"}</td>
                    <td className="px-3 py-3">{item.age ||item.experience}</td>
                    <td className="px-3 py-3">{item.guardian||item.education }</td>
                    <td className="px-3 py-3">{item.contact|| item.designation}</td>
                    <td className="px-3 py-3">{item.attendance||item.address}</td>
                    {/* <td className="px-4 py-3">{}</td> */}


                    <td className="px-4 py-3 flex justify-center gap-3">
                      {/* 👁️ View Button */}

                     
                      <button
                        onClick={() => handleView(item)}
                        className="p-2 rounded-full hover:bg-indigo-100 text-indigo-600 transition"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>

                      {/* ✏️ Edit Button */}
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded-full hover:bg-green-100 text-green-600 transition"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>

                      {/* 🗑️ Delete Button */}
                      <button
                        onClick={() => handleDelete(item)}
                        className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="text-center py-6 text-gray-500">
                    No students found 😢
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
