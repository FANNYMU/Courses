"use client"; // Menandai ini sebagai komponen klien
import Card from "@/components/card";
import React, { useRef } from "react";

const CustomVideoPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const playVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  const pauseVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div className="videoplayer mx-auto p-4 bg-white rounded-lg shadow-md">
      <iframe
        ref={iframeRef}
        width="100%"
        height="820"
        src="https://www.youtube.com/embed/QUpyv31Nyso?si=LNbLvRqwVhoMNkg2" // Mengaktifkan API JavaScript untuk kontrol
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
      <div className="controls flex justify-between items-center mt-4">
        <button
          onClick={playVideo}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Play
        </button>
        <button
          onClick={pauseVideo}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 shadow-md"
        >
          Pause
        </button>
      </div>
    </div>
  );
};

export default function Html() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Html Css js
        </h1>
        <CustomVideoPlayer />
      </div>
      <div className="container mx-auto ">
        <div className="">
          <Card />
        </div>
      </div>
    </>
  );
}
