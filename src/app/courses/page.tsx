import React from "react";
import Link from "next/link";
import Image from "next/image"; // Impor komponen Image dari Next.js

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-10">
      <title>Courses List</title>
      <h1 className="text-3xl font-bold text-center mb-6">
        Kursus Belajar Koding
      </h1>
      <p className="text-lg text-center mb-8">
        Temukan berbagai kursus menarik untuk meningkatkan keterampilan koding
        Anda!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Contoh Kursus 1: HTML */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-2xl">Basic Coding</h1>
          <Image
            src="data:image/png;base64,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"
            alt="Kursus HTML"
            width={400} // Lebar gambar
            height={250} // Tinggi gambar
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Kursus HTML</h2>
          <p className="text-gray-700 mb-4">
            Pelajari dasar-dasar HTML dan cara membuat struktur halaman web.
          </p>
          <Link href="/courses/html">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Lihat Detail
            </button>
          </Link>
        </div>
        {/* Contoh Kursus 2: NODE JS */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-2xl">Medium Coding</h1>
          <Image
            src="data:image/png;base64,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"
            alt="Kursus HTML"
            width={400} // Lebar gambar
            height={250} // Tinggi gambar
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Kursus HTML</h2>
          <p className="text-gray-700 mb-4">
            Pelajari dasar-dasar HTML dan cara membuat struktur halaman web.
          </p>
          <Link href="/courses/comingSoon">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Lihat Detail
            </button>
          </Link>
        </div>

        {/* Tambahkan lebih banyak kursus sesuai kebutuhan */}
      </div>
    </div>
  );
}
