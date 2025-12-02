"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function StudentAdmission() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    sssmNo: "",
    name: "",
    father: "",
    mother: "",
    category: "",
    schNo: "",
    penNo: "",
    apanId: "",
    aadharNo: "",
    phone: "",
    fees:"",
    class:"",
    accountNo: "",
    address: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student Data:", formData);

    setSuccess(true);
    setFormData({
      sssmNo: "",
      name: "",
      father: "",
      mother: "",
      category: "",
      schNo: "",
      penNo: "",
      apanId: "",
      aadharNo: "",
      phone: "",
      fees:"",
      class:"",
      accountNo: "",
      address: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 p-4 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-10 border border-purple-200">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-indigo-700 hover:text-indigo-900 font-medium"
        >
          <ArrowLeft size={22} /> Back
        </button>
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          📋 Student Admission Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputField
              label="SSSM No"
              name="sssmNo"
              value={formData.sssmNo}
              onChange={handleChange}
              placeholder="Enter SSSM number"
            />
            <InputField
              label="Student Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student's full name"
            />
            <InputField
              label="Father's Name"
              name="father"
              value={formData.father}
              onChange={handleChange}
              placeholder="Enter father's name"
            />
            <InputField
              label="Mother's Name"
              name="mother"
              value={formData.mother}
              onChange={handleChange}
              placeholder="Enter mother's name"
            />
            <InputField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="GEN / OBC / SC / ST"
            />
            <InputField
              label="SCH No"
              name="schNo"
              value={formData.schNo}
              onChange={handleChange}
              placeholder="Enter SCH number"
            />
            <InputField
              label="PEN No"
              name="penNo"
              value={formData.penNo}
              onChange={handleChange}
              placeholder="Enter PEN number"
            />
            <InputField
              label="APAN ID"
              name="apanId"
              value={formData.apanId}
              onChange={handleChange}
              placeholder="Enter APAN ID"
            />
            <InputField
              label="Aadhar No"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              placeholder="Enter Aadhar number"
            />
            <InputField
              label="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter contact number"
            />
            <InputField
              label="Class"
              name="Class"
              value={formData.class}
              onChange={handleChange}
              placeholder="Enter class"
            />
            <InputField
              label="A/C No"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              placeholder="Enter bank account number"
            />
             <InputField
              label="Fees"
              name="Fees"
              value={formData.fees}
              onChange={handleChange}
              placeholder="Enter Fees"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              rows="3"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition duration-300"
          >
            Submit Admission
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-600 text-center font-medium animate-pulse">
            ✅ Student admission submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

/* 🔹 Reusable Input Field Component */
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
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />
    </div>
  );
}
