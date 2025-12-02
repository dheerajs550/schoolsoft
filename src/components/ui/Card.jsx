import React from 'react'

function Card(data) {
//      const stats = [
//     { label: "Students", value: "1,248" },
//     { label: "Teachers", value: "84" },
//     { label: "Classes", value: "32" },
//     { label: "Attendance (today)", value: "92%" },
//   ];

  return (
    <>
       {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {data.data.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-2xl bg-white/80 border border-white/30 shadow-sm"
            >
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className="text-2xl font-bold text-slate-800">{s.value}</div>
            </div>
          ))}
        </section>

    </>
  )
}

export default Card
