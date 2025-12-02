"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  PlusCircle,
  X,
  CheckCircle2,
  AlertCircle,
  Users,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function FeesPage() {
  const [fees, setFees] = useState([
    { id: 1, name: "Aarav Sharma", class: "10A", phone: "9876543210", total: 20000, paid: 18000, pending: 2000, status: "Pending" },
    { id: 2, name: "Isha Patel", class: "9B", phone: "9123456780", total: 20000, paid: 20000, pending: 0, status: "Paid" },
    { id: 3, name: "Rohan Mehta", class: "11C", phone: "9988776655", total: 25000, paid: 20000, pending: 5000, status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);

  const [form, setForm] = useState({
    name: "",
    class: "",
    phone: "",
    total: "",
    paid: "",
  });

  const openModal = (type, data = null) => {
    setModal(type);
    setSelected(data);
    if (data) setForm(data);
    else setForm({ name: "", class: "", phone: "", total: "", paid: "" });
  };

  const closeModal = () => {
    setModal(null);
    setSelected(null);
  };

  const handleAdd = () => {
    if (!form.name || !form.class || !form.total || !form.phone)
      return alert("Please fill all fields");

    const pending = form.total - form.paid;
    const newFee = {
      id: fees.length + 1,
      ...form,
      total: Number(form.total),
      paid: Number(form.paid),
      pending,
      status: pending > 0 ? "Pending" : "Paid",
    };
    setFees([...fees, newFee]);
    closeModal();
  };

  const handleEdit = () => {
    const updated = fees.map((f) =>
      f.id === selected.id
        ? {
            ...form,
            id: f.id,
            total: Number(form.total),
            paid: Number(form.paid),
            pending: form.total - form.paid,
            status: form.total - form.paid > 0 ? "Pending" : "Paid",
          }
        : f
    );
    setFees(updated);
    closeModal();
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setFees(fees.filter((f) => f.id !== id));
    }
  };

  const filteredData = fees.filter((f) => {
    return (
      (classFilter === "All" || f.class === classFilter) &&
      (statusFilter === "All" || f.status === statusFilter) &&
      f.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalCollected = fees.reduce((sum, f) => sum + f.paid, 0);
  const totalPending = fees.reduce((sum, f) => sum + f.pending, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-emerald-100 p-8">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/40">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">Fees Management</h1>
          <button
            onClick={() => openModal("add")}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition"
          >
            <PlusCircle size={18} /> Add Fees
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard icon={<Users />} label="Total Students" value={fees.length} color="indigo" />
          <SummaryCard icon={<CheckCircle2 />} label="Fees Collected" value={`₹${totalCollected.toLocaleString()}`} color="emerald" />
          <SummaryCard icon={<AlertCircle />} label="Pending Fees" value={`₹${totalPending.toLocaleString()}`} color="red" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-indigo-600" />
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="All">All Classes</option>
              <option value="9B">9B</option>
              <option value="10A">10A</option>
              <option value="11C">11C</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Class</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Paid</th>
                <th className="px-4 py-3 text-left">Pending</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((f, i) => (
                <tr
                  key={f.id}
                  className={`hover:bg-indigo-50 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="px-4 py-3 font-medium">{f.name}</td>
                  <td className="px-4 py-3">{f.class}</td>
                  <td className="px-4 py-3">{f.phone}</td>
                  <td className="px-4 py-3">₹{f.total}</td>
                  <td className="px-4 py-3 text-emerald-600">₹{f.paid}</td>
                  <td className="px-4 py-3 text-red-500">₹{f.pending}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        f.status === "Paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {f.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex justify-center gap-2">
                    <a href={`tel:${f.phone}`} className="p-2 hover:bg-green-100 rounded-lg text-green-600" title="Call">
                      <Phone size={16} />
                    </a>
                    <a href={`sms:${f.phone}`} className="p-2 hover:bg-blue-100 rounded-lg text-blue-600" title="Message">
                      <MessageSquare size={16} />
                    </a>
                    <button onClick={() => openModal("view", f)} className="p-2 hover:bg-indigo-100 rounded-lg text-indigo-600">
                      <Eye size={16} />
                    </button>
                    <button onClick={() => openModal("edit", f)} className="p-2 hover:bg-yellow-100 rounded-lg text-yellow-600">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => handleDelete(f.id)} className="p-2 hover:bg-red-100 rounded-lg text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modals */}
        {modal && (
          <Modal onClose={closeModal}>
            {modal === "view" ? (
              <ViewModal data={selected} />
            ) : (
              <FormModal
                type={modal}
                form={form}
                setForm={setForm}
                onSubmit={modal === "add" ? handleAdd : handleEdit}
                onCancel={closeModal}
              />
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

const SummaryCard = ({ icon, label, value, color }) => (
  <div className={`p-6 bg-${color}-50 rounded-2xl flex items-center gap-3 shadow-sm`}>
    <div className={`text-${color}-600`}>{icon}</div>
    <div>
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="text-xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg relative p-6">
      <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
        <X size={20} />
      </button>
      {children}
    </div>
  </div>
);

const FormModal = ({ type, form, setForm, onSubmit, onCancel }) => (
  <div>
    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
      {type === "add" ? "Add New Fees" : "Edit Fees"}
    </h2>
    <div className="space-y-3">
      <input className="w-full border rounded-lg p-2" placeholder="Student Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="w-full border rounded-lg p-2" placeholder="Class" value={form.class} onChange={(e) => setForm({ ...form, class: e.target.value })} />
      <input className="w-full border rounded-lg p-2" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input className="w-full border rounded-lg p-2" type="number" placeholder="Total Fees" value={form.total} onChange={(e) => setForm({ ...form, total: e.target.value })} />
      <input className="w-full border rounded-lg p-2" type="number" placeholder="Paid Amount" value={form.paid} onChange={(e) => setForm({ ...form, paid: e.target.value })} />
      <div className="flex justify-end gap-3 mt-4">
        <button onClick={onCancel} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Cancel</button>
        <button onClick={onSubmit} className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white">
          {type === "add" ? "Add" : "Save"}
        </button>
      </div>
    </div>
  </div>
);

const ViewModal = ({ data }) => (
  <div>
    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Fees Details</h2>
    <div className="space-y-2 text-gray-700">
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Class:</strong> {data.class}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Total Fees:</strong> ₹{data.total}</p>
      <p><strong>Paid:</strong> ₹{data.paid}</p>
      <p><strong>Pending:</strong> ₹{data.pending}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${data.status === "Paid" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
          {data.status}
        </span>
      </p>
      <div className="flex gap-4 mt-4">
        <a href={`tel:${data.phone}`} className="flex items-center gap-1 text-green-600 hover:text-green-800"><Phone size={16}/>Call</a>
        <a href={`sms:${data.phone}`} className="flex items-center gap-1 text-blue-600 hover:text-blue-800"><MessageSquare size={16}/>Message</a>
      </div>
    </div>
  </div>
);
