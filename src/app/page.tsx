"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Link from "next/link"; // Import Link dari Next.js

export default function Home() {
  return (
    <>
      <title>Welcome🤗</title>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Koding dengan Mudah,{" "}
          <Highlight className="text-black dark:text-white">
            Berkarya Tanpa Batas!
          </Highlight>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mt-4 text-lg px-4 text-neutral-600 dark:text-gray-300 text-center"
        >
          Portal Coding adalah tempat bagi para pengembang untuk{" "}
          <Highlight className="text-black dark:text-white">belajar</Highlight>,{" "}
          <Highlight className="text-black dark:text-white">berbagi</Highlight>,
          dan{" "}
          <Highlight className="text-black dark:text-white">
            berkolaborasi
          </Highlight>{" "}
          dalam dunia pemrograman. Temukan tutorial, proyek, dan komunitas yang
          mendukung perjalanan koding Anda!
        </motion.p>
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mt-6 text-xl font-semibold text-neutral-700 dark:text-white text-center"
        >
          Mewujudkan Ide Menjadi{" "}
          <Highlight className="text-black dark:text-white">
            Kode yang Bermanfaat.
          </Highlight>
        </motion.h2>

        {/* Tombol untuk menuju ke halaman /courses */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center"
        >
          <Link href="/courses">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Lihat Kursus Kami
            </button>
          </Link>
        </motion.div>
      </HeroHighlight>
    </>
  );
}
