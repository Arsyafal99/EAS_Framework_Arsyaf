import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full">

        {/* Judul */}
        <h1 className="text-4xl font-bold text-green-700 text-center">
          About Student Task Manager
        </h1>

        {/* Teknologi */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Teknologi yang Digunakan
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Next.js</li>
            <li>React Hooks</li>
            <li>Redux Toolkit</li>
            <li>Prisma ORM</li>
            <li>SQLite Database</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Tentang Aplikasi */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Tentang Aplikasi
          </h2>

          <p className="text-gray-700 leading-7">
            Student Task Manager merupakan aplikasi web sederhana yang dibuat
            sebagai proyek UAS mata kuliah Pemrograman Berbasis Framework.
            Aplikasi ini bertujuan untuk membantu mahasiswa dalam mengelola
            tugas kuliah agar lebih terorganisir. Pengguna dapat menambahkan,
            melihat, dan menghapus daftar tugas sehingga aktivitas perkuliahan
            menjadi lebih mudah dipantau.
          </p>
        </div>

        {/* Video Presentasi */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Video Presentasi
          </h2>

          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Uis88ZgeXag"
              title="Video Presentasi UAS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Video presentasi aplikasi Student Task Manager sebagai bagian dari
            tugas UAS Mata Kuliah Pemrograman Berbasis Framework.
          </p>
        </div>

        {/* Informasi Pembuat */}
        <div className="border-t mt-10 pt-6 text-center text-gray-600">
          <p>
            <strong>Nama :</strong> Arsyaf Dwi Nur Prasetyo
          </p>

          <p>
            <strong>NIM :</strong> 310700012410001
          </p>

          <p>
            <strong>Program Studi :</strong> Informatika
          </p>
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

      </div>
    </main>
  );
}