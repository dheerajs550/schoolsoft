"use client";
import React, { useEffect, useState } from "react";

/*
  Simple exam calendar list. Persist in localStorage.
*/

export default function ExamCalendar(){
  const [events, setEvents] = useState(()=> {
    const ls = typeof window !== "undefined" && localStorage.getItem("sv_exams");
    return ls ? JSON.parse(ls) : [{id:1,title:"Half Yearly", date:"2025-12-10", desc:"Subjects: All major"}];
  });
  const [form, setForm] = useState({title:"", date:"", desc:""});

  useEffect(()=> localStorage.setItem("sv_exams", JSON.stringify(events)), [events]);

  const addEvent = (e) => {
    e.preventDefault();
    const ev = {...form, id: Date.now()};
    setEvents(prev=>[...prev, ev]);
    setForm({title:"",date:"",desc:""});
  };
  const remove = (id)=> setEvents(prev=>prev.filter(x=>x.id!==id));

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Exam Calendar</h3>
      <form onSubmit={addEvent} className="flex gap-2">
        <input required value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Exam title" className="px-2 py-1 border rounded" />
        <input required type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="px-2 py-1 border rounded" />
        <input value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} placeholder="short desc" className="px-2 py-1 border rounded" />
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Add</button>
      </form>

      <div className="bg-white p-4 rounded shadow">
        <ul className="space-y-2">
          {events.sort((a,b)=> a.date.localeCompare(b.date)).map(ev=>(
            <li key={ev.id} className="flex justify-between items-start border-b pb-2">
              <div>
                <div className="font-semibold">{ev.title} <span className="text-sm text-gray-400">({ev.date})</span></div>
                <div className="text-sm text-gray-600">{ev.desc}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={()=>remove(ev.id)} className="text-red-600">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
