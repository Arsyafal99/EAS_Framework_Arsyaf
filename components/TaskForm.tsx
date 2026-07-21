"use client";

import { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Belum");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        status,
      }),
    });

    if (response.ok) {
      alert("Task berhasil ditambahkan!");

      setTitle("");
      setDescription("");
      setStatus("Belum");
    } else {
      alert("Gagal menambahkan task.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 mt-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Tambah Task
      </h2>

      <input
        type="text"
        placeholder="Judul Task"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Deskripsi"
        rows={4}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Belum">Belum</option>
        <option value="Selesai">Selesai</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition"
      >
        Simpan
      </button>
    </form>
  );
}