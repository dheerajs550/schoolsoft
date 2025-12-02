"use client";
import Table from "@/components/ui/Table";
import { useState } from "react";

export default function StudentsPage() {
//   const [selectedTeacher, setSelectedTeacher] = useState(null);

 const teacher = [
  {
    id: 1,
    teacherName: "Rohit Verma",
    fatherName: "Suresh Verma",
    motherName: "Kamla Verma",
    phone: "9876543210",
    aadharNo: "4567 2390 1122",
    experience: "5 Years",
    education: "B.Ed, M.A",
    designation: "Maths Teacher",
    address: "Sector 12, Jaipur"
  },
  {
    id: 2,
    teacherName: "Neha Singh",
    fatherName: "Mahesh Singh",
    motherName: "Sunita Singh",
    phone: "9988776655",
    aadharNo: "7890 1122 3344",
    experience: "3 Years",
    education: "B.Sc, B.Ed",
    designation: "Science Teacher",
    address: "Civil Lines, Agra"
  },
  {
    id: 3,
    teacherName: "Akash Yadav",
    fatherName: "Ramlal Yadav",
    motherName: "Shobha Yadav",
    phone: "9123456789",
    aadharNo: "2233 4455 6677",
    experience: "7 Years",
    education: "M.Com, B.Ed",
    designation: "Commerce Teacher",
    address: "Rajendra Nagar, Indore"
  }
];

const columns = [
  { key: "teacherName", label: "Teacher Name" },
  { key: "fatherName", label: "Father Name" },
  // { key: "motherName", label: "Mother Name" },
  { key: "phone", label: "Phone Number" },
  { key: "aadharNo", label: "Aadhar Number" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "designation", label: "Designation" },
  { key: "address", label: "Address" },
];


  return (
 <>
 <Table data={teacher} heading={"Teacher"} link={"teachers/addteacher"} columns={columns}/>
 </>
  );
}
