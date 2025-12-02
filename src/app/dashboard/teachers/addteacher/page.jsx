"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function AddTeacher() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    teacherName: "",
    fatherName: "",
    motherName: "",
    phone: "",
    aadharNo: "",
    experience: "",
    education: "",
    designation: "",
    address: "", // ➤ Address Added
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher Data:", formData);

    setSuccess(true);

    setFormData({
      teacherName: "",
      fatherName: "",
      motherName: "",
      phone: "",
      aadharNo: "",
      experience: "",
      education: "",
      designation: "",
      address: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 p-4 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-10 border border-purple-200">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-indigo-700 hover:text-indigo-900 font-medium"
        >
          <ArrowLeft size={22} /> Back
        </button>

        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          👨‍🏫 Add Teacher Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Grid Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputField
              label="Teacher Name"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              placeholder="Enter teacher name"
            />

            <InputField
              label="Father Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's full name"
            />

            <InputField
              label="Mother Name"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Mother's full name"
            />

            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />

            <InputField
              label="Aadhar Number"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              placeholder="Enter Aadhar number"
            />

            <InputField
              label="Experience (Years)"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Ex: 1, 3, 5"
            />

            <InputField
              label="Education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Ex: B.Ed, M.Ed, MA"
            />

            <InputField
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Teacher / Lecturer / PTI"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter complete address"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition duration-300"
          >
            Add Teacher
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-600 text-center font-medium animate-pulse">
            ✅ Teacher details submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

/* 🔹 Reusable Input Component */
function InputField({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />
    </div>
  );
}
