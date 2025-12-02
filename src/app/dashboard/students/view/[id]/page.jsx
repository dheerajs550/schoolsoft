"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import students from "@/data/students";
import { ArrowLeft } from "lucide-react";

export default function StudentDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="p-10 text-center text-red-600 text-xl font-semibold">
        ❌ Student Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-emerald-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-white/50">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-indigo-700 hover:text-indigo-900 font-medium"
        >
          <ArrowLeft size={22} /> Back
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Student Image */}
          <div className="w-25 h-25 rounded-full overflow-hidden shadow-md border">
            <Image
              src={"/pic.webp"}
              alt={student.name}
              width={130}
              height={130}
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-indigo-700">
              {student.name}
            </h1>
            <p className="text-gray-600 text-lg">
              Class: {student.class} — Roll No: {student.roll}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">

          <Detail label="Father Name" value={student.father} />
          <Detail label="Mother Name" value={student.mother} />
          <Detail label="Category" value={student.category} />
          <Detail label="SSSM No." value={student.sssmNo} />
          <Detail label="SCH No." value={student.schNo} />
          <Detail label="PEN No." value={student.penNo} />
          <Detail label="APAN ID" value={student.apanId} />
          <Detail label="Aadhar No." value={student.aadharNo} />
          <Detail label="Mobile No." value={student.phone} />
          <Detail label="Account No." value={student.accountNo} />
          <Detail label="Attendance" value={student.attendance} />
          <Detail label="Age" value={student.age} />

          <div className="col-span-1 sm:col-span-2 mt-4">
            <p className="font-semibold text-gray-900">Address:</p>
            <p className="text-gray-700">{student.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Component */
function Detail({ label, value }) {
  return (
    <p className="bg-gray-50 py-3 px-4 rounded-lg shadow-sm border">
      <span className="font-semibold text-gray-900">{label}: </span>
      {value}
    </p>
  );
}
