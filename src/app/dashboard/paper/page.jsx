"use client";

import React, { useState } from "react";
import { Plus, Printer, Eye, X, Pencil, Trash2, Save } from "lucide-react";

const QUESTION_TYPES = [
  "Objective",
  "Match the Column",
  "Fill in the Blank",
  "Short",
  "Long",
];

export default function ExamPaperBuilder() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Editable Header Fields
  const [schoolName, setSchoolName] = useState("Sanskar Valley School");
  const [examName, setExamName] = useState("Unit Test - 1");
  const [className, setClassName] = useState("Class 4th");
  const [subjectName, setSubjectName] = useState("Science");
  const [examDate, setExamDate] = useState("12/02/2025");
  const [examTime, setExamTime] = useState("2 Hours");
  const [totalMarks, setTotalMarks] = useState("50 Marks");

  // Add Question
  const [newQText, setNewQText] = useState("");
  const [newQType, setNewQType] = useState("Objective");

  // Edit Mode
  const [editIndex, setEditIndex] = useState(null);
  const [editQText, setEditQText] = useState("");
  const [editQType, setEditQType] = useState("");

  // Preview
  const [previewOpen, setPreviewOpen] = useState(false);

  const addQuestion = () => {
    if (!newQText.trim()) return alert("Write a question first");

    setSelectedQuestions([
      ...selectedQuestions,
      { type: newQType, text: newQText },
    ]);

    setNewQText("");
  };

  const deleteQuestion = (index) => {
    const updated = selectedQuestions.filter((_, i) => i !== index);
    setSelectedQuestions(updated);
  };

  const startEdit = (index) => {
    const q = selectedQuestions[index];
    setEditIndex(index);
    setEditQText(q.text);
    setEditQType(q.type);
  };

  const saveEdit = () => {
    if (!editQText.trim()) return alert("Write something");

    const updated = [...selectedQuestions];
    updated[editIndex] = { type: editQType, text: editQText };

    setSelectedQuestions(updated);
    setEditIndex(null);
  };

  const buildSections = () => {
    const sections = {};
    QUESTION_TYPES.forEach((t) => (sections[t] = []));
    selectedQuestions.forEach((q) => sections[q.type].push(q.text));
    return sections;
  };

  const printPaper = () => {
    if (selectedQuestions.length === 0)
      return alert("Add at least one question");

    const sections = buildSections();

    const html = `
      <html>
      <head>
        <style>
          body { font-family: serif; padding: 40px; }
          .center { text-align:center; }
          h1 { margin: 0; font-size: 28px; }
          .meta { font-size: 14px; margin-top: 6px; }
          hr { margin: 20px 0; }
          .section-title { font-size: 18px; font-weight: bold; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="center">
          <h1>${schoolName}</h1>
          <h2>${examName}</h2>
          <div class="meta">${className} • ${subjectName} • Date: ${examDate} • ${examTime} • ${totalMarks}</div>
        </div>

        <hr />

        ${QUESTION_TYPES.map((type) => {
          const qs = sections[type];
          if (!qs.length) return "";
          return `
            <div>
              <div class="section-title">${type}</div>
              <ol>${qs.map((q) => `<li>${q}</li>`).join("")}</ol>
            </div>
          `;
        }).join("")}
      </body>
      </html>
    `;

    const w = window.open("", "_blank");
    w.document.write(html);
    w.document.close();
    w.print();
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-emerald-50">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-xl">

        <h1 className="text-2xl font-bold text-indigo-700 mb-4">
          Exam Paper Builder
        </h1>

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input className="p-2 border rounded" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
          <input className="p-2 border rounded" value={examName} onChange={(e) => setExamName(e.target.value)} />
          <input className="p-2 border rounded" value={className} onChange={(e) => setClassName(e.target.value)} />
          <input className="p-2 border rounded" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
          <input className="p-2 border rounded" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
          <input className="p-2 border rounded" value={examTime} onChange={(e) => setExamTime(e.target.value)} />
          <input className="p-2 border rounded" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} />
        </div>

        {/* ADD QUESTION */}
        <div className="p-4 border rounded bg-gray-50 mb-6">
          <h2 className="font-semibold mb-2 text-indigo-700">Add Question</h2>

          <div className="flex flex-col md:flex-row gap-2">
            <select className="p-2 border rounded" value={newQType} onChange={(e) => setNewQType(e.target.value)}>
              {QUESTION_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>

            <input className="p-2 border rounded flex-1" value={newQText}
              onChange={(e) => setNewQText(e.target.value)} placeholder="Write your question..." />

            <button onClick={addQuestion} className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <Plus size={16}/> Add
            </button>
          </div>
        </div>

        {/* QUESTIONS LIST */}
        <div>
          {selectedQuestions.map((q, i) => (
            <div key={i} className="border p-3 rounded mb-3 bg-gray-50">
              {editIndex === i ? (
                <div className="flex flex-col gap-2">
                  <select className="p-2 border rounded" value={editQType} onChange={(e) => setEditQType(e.target.value)}>
                    {QUESTION_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>

                  <input className="p-2 border rounded" value={editQText}
                    onChange={(e) => setEditQText(e.target.value)} />

                  <button onClick={saveEdit} className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-2">
                    <Save size={14}/> Save
                  </button>
                </div>
              ) : (
                <div className="flex justify-between">
                  <div>
                    <b>{q.type}</b>: {q.text}
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => startEdit(i)} className="p-2 bg-yellow-200 rounded">
                      <Pencil size={16}/>
                    </button>

                    <button onClick={() => deleteQuestion(i)} className="p-2 bg-red-200 rounded">
                      <Trash2 size={16}/>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={() => setPreviewOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded flex items-center gap-2">
            <Eye size={16}/> Preview
          </button>

          <button onClick={printPaper} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
            <Printer size={16}/> Print
          </button>
        </div>
      </div>

      {/* PREVIEW */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-start p-6 z-50">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl p-6 max-h-[90vh] overflow-auto">

            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold">Paper Preview</h2>
              <button onClick={() => setPreviewOpen(false)} className="p-2 bg-gray-200 rounded"><X/></button>
            </div>

            <div className="text-center">
              <h1 className="text-xl font-bold">{schoolName}</h1>
              <p>{examName}</p>
              <p className="text-sm">{className} • {subjectName} • {examDate} • {examTime} • {totalMarks}</p>
            </div>

            <hr className="my-3"/>

            {buildSections() &&
              QUESTION_TYPES.map((type) => {
                const list = selectedQuestions.filter((q) => q.type === type);
                if (!list.length) return null;
                return (
                  <div key={type} className="mt-3">
                    <h3 className="font-semibold">{type}</h3>
                    <ol className="list-decimal pl-6">
                      {list.map((q, i) => <li key={i}>{q.text}</li>)}
                    </ol>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
