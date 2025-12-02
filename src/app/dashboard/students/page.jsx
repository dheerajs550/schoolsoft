"use client";
import Table from "@/components/ui/Table";
import { useState } from "react";

export default function StudentsPage() {
//   const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: "Aarav Sharma",
      class: "10A",
      roll: 12,
      age: 15,
      attendance: "95%",
      guardian: "Rajesh Sharma",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Isha Patel",
      class: "9B",
      roll: 8,
      age: 14,
      attendance: "92%",
      guardian: "Meena Patel",
      contact: "9898989898",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      class: "11C",
      roll: 5,
      age: 16,
      attendance: "97%",
      guardian: "Vikas Mehta",
      contact: "9123456789",
    },
  ];
const columns = [
  { key: "roll", label: "Roll No" },
  { key: "name", label: "Name" },
  { key: "class", label: "Class" },
  { key: "section", label: "Section" },
  { key: "age", label: "Age" },
  { key: "guardian", label: "Guardian" },
  { key: "contact", label: "Contact" },
  { key: "attendance", label: "Attendance" },
];
  return (
 <>
 <Table data={students} heading={"Students"} link={"students/addstudent"} columns={columns}/>
 </>
  );
}
