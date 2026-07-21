"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "@/components/TaskForm";
import { RootState } from "@/redux/store";
import { setTasks } from "@/redux/taskSlice";

export default function Dashboard() {
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [editingTask] = useState<any>(null);

  async function fetchTasks() {
    const response = await fetch("/api/tasks");
    const data = await response.json();

    dispatch(setTasks(data));
  }

  useEffect(() => {
    fetchTasks();
  }, [dispatch]);

  async function handleDelete(id: number) {
    const confirmDelete = confirm("Yakin ingin menghapus task ini?");

    if (!confirmDelete) return;

    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Task berhasil dihapus!");
      fetchTasks();
    } else {
      alert("Gagal menghapus task.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-700">
        Student Task Manager
      </h1>

      <p className="text-gray-600 mt-2">
        Kelola seluruh tugas kuliah Anda.
      </p>

      {/* Statistik */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Total Task</h2>
          <p className="text-4xl font-bold mt-3">{tasks.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Selesai</h2>
          <p className="text-4xl font-bold text-green-600 mt-3">
            {tasks.filter((task) => task.status === "Selesai").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Belum</h2>
          <p className="text-4xl font-bold text-red-500 mt-3">
            {tasks.filter((task) => task.status === "Belum").length}
          </p>
        </div>
      </div>

      {/* Form Tambah Task */}
      <TaskForm />

      {/* Daftar Task */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-5">
          Daftar Task
        </h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500">Belum ada task.</p>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="border rounded-lg p-4"
              >
                <h3 className="font-bold text-lg">
                  {task.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {task.description}
                </p>

                <span
                  className={`inline-block mt-3 px-3 py-1 rounded ${
                    task.status === "Selesai"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.status}
                </span>

                <div className="mt-4">
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tombol Kembali */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}