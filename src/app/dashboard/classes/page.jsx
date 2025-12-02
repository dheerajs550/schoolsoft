"use client";
import { useRouter } from "next/navigation";
import { Users, BookOpen, Calendar } from "lucide-react";

export default function ClassesPage() {
  const router = useRouter();

  // 🌟 List of Classes (Nursery to 12th)
  const classes = [
    { id: "nursery", name: "Nursery", teacher: "Ms. Rekha Sharma", students: 25, schedule: "8:00 AM - 11:00 AM" },
    { id: "lkg", name: "LKG", teacher: "Ms. Sunita Mehta", students: 28, schedule: "8:00 AM - 11:00 AM" },
    { id: "ukg", name: "UKG", teacher: "Ms. Kavita Singh", students: 26, schedule: "8:00 AM - 11:00 AM" },
    { id: "1", name: "Class 1", teacher: "Mr. Ramesh Kumar", students: 30, schedule: "8:00 AM - 1:00 PM" },
    { id: "2", name: "Class 2", teacher: "Ms. Neha Verma", students: 32, schedule: "8:00 AM - 1:00 PM" },
    { id: "3", name: "Class 3", teacher: "Mr. Anil Mehta", students: 29, schedule: "8:00 AM - 1:00 PM" },
    { id: "4", name: "Class 4", teacher: "Ms. Pooja Sharma", students: 27, schedule: "8:00 AM - 1:00 PM" },
    { id: "5", name: "Class 5", teacher: "Mr. Rahul Jain", students: 30, schedule: "8:00 AM - 1:00 PM" },
    { id: "6", name: "Class 6", teacher: "Ms. Priya Kapoor", students: 33, schedule: "8:00 AM - 2:00 PM" },
    { id: "7", name: "Class 7", teacher: "Mr. Dinesh Tiwari", students: 31, schedule: "8:00 AM - 2:00 PM" },
    { id: "8", name: "Class 8", teacher: "Ms. Swati Sharma", students: 35, schedule: "8:00 AM - 2:00 PM" },
    { id: "9", name: "Class 9", teacher: "Mr. Vinod Kumar", students: 34, schedule: "8:00 AM - 2:00 PM" },
    { id: "10", name: "Class 10", teacher: "Ms. Anjali Singh", students: 36, schedule: "8:00 AM - 2:00 PM" },
    { id: "11", name: "Class 11", teacher: "Mr. Manoj Patel", students: 32, schedule: "8:00 AM - 2:00 PM" },
    { id: "12", name: "Class 12", teacher: "Ms. Seema Gupta", students: 29, schedule: "8:00 AM - 2:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-8">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          🏫 Class Overview (Nursery to 12th)
        </h1>

        {/* Grid Layout for Classes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.id}
              onClick={() => router.push(`/dashboard/classes/${cls.id}`)}
              className="cursor-pointer group bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-2xl shadow-md border border-white/60 p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-indigo-700 mb-2 group-hover:text-emerald-700 transition">
                {cls.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Teacher:</strong> {cls.teacher}
              </p>

              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Users size={18} className="text-indigo-500" />
                <span>{cls.students} Students</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <BookOpen size={18} className="text-emerald-500" />
                <span>Subjects: 5</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={18} className="text-orange-500" />
                <span>{cls.schedule}</span>
              </div>

              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
