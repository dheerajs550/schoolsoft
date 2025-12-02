"use client";

import { useRef, useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CertificateGenerator() {
  const router = useRouter();
  const canvasRef = useRef(null);

  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#f8f8f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // School Name
    ctx.fillStyle = "#4c1d95";
    ctx.font = "bold 36px serif";
    ctx.textAlign = "center";
    ctx.fillText("Sanskar Valley School", canvas.width / 2, 80);

    // Title
    ctx.font = "40px serif";
    ctx.fillText("Certificate of Achievement", canvas.width / 2, 140);

    // Student Name
    ctx.font = "bold 50px serif";
    ctx.fillStyle = "#000";
    ctx.fillText(name || "Student Name", canvas.width / 2, 230);

    // Activity Line
    ctx.font = "24px serif";
    ctx.fillText(
      `has successfully completed the activity: ${activity || "Activity Name"}`,
      canvas.width / 2,
      280
    );

    // Date
    ctx.font = "22px serif";
    ctx.fillText(`Date: ${date || "DD/MM/YYYY"}`, canvas.width / 2, 320);

    // Description
    ctx.font = "20px serif";
    ctx.fillText(description || "Activity Description", canvas.width / 2, 360);

    // Footer – Principal Signature
    ctx.font = "22px serif";
    ctx.fillText("Principal Signature", canvas.width / 2, 480);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 120, 450);
    ctx.lineTo(canvas.width / 2 + 120, 450);
    ctx.stroke();
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-4 text-purple-600 font-medium"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        🎓 Certificate Generator
      </h1>

      <div className="flex flex-col items-center space-y-5">
        <input
          type="text"
          placeholder="Enter Student Name"
          className="px-4 py-2 border rounded-lg w-80"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Activity Name"
          className="px-4 py-2 border rounded-lg w-80"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <input
          type="date"
          className="px-4 py-2 border rounded-lg w-80"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Enter Description"
          className="px-4 py-2 border rounded-lg w-80 h-20"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={generateCertificate}
          className="px-5 py-2 bg-purple-600 text-white rounded-lg"
        >
          Generate Certificate
        </button>

        <button
          onClick={downloadImage}
          className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-lg"
        >
          <Download size={18} /> Download PNG
        </button>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={900}
          height={600}
          className="border rounded-lg shadow-md"
        ></canvas>
      </div>
    </div>
  );
}
