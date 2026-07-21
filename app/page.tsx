import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Student Task Manager
        </h1>

        <p className="text-gray-600 mt-4">
          Aplikasi sederhana untuk membantu mahasiswa mengelola tugas kuliah.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            Dashboard
          </Link>

          <Link
            href="/about"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
}