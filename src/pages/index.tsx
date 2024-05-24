import { useState } from "react";

import { Inter } from "next/font/google";
import fire from "@/image/fire.gif";

import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dangerMode, setDangerMode] = useState(false);

  const onSubmit = () => {
    setDangerMode(true);
  };

  return (
    <>
      {dangerMode && (
        <>
          <div className="font-bold absolute top-0 left-0 right-0 bottom-0 z-50 p-5 text-9xl uppercase h-fit w-fit m-auto flex justify-center items-center bg-red-500 rounded-xl border shadow-xl">
            <div className="animate-spin">☢️</div> This is a p0 ticket!{" "}
            <div className="animate-spin">☢️</div>
          </div>
          <div
            className="absolute bg-blue-500 w-screen h-screen z-0"
            style={{
              backgroundImage: `url(${fire.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </>
      )}
      <main
        className={`relative flex min-h-screen h-screen flex-col items-center justify-between p-24 z-25 ${inter.className}`}
      >
        <div
          className={`p-24 px-14 border rounded-xl shadow-xl w-1/2 flex flex-col h-full z-25 ${
            dangerMode
              ? "animate__animated animate__wobble animate__faster animate__infinite bg-red-500 animate-pulse"
              : ""
          }`}
        >
          <div className="font-bold text-4xl">Is it a p0?</div>
          <div className="text-xl">Let&apos;s find out!</div>

          <br />

          <div className="text-wrap">
            Describe your problem in the input box below and our super clever
            &quot;ai&quot; will tell you if its a p0 ticket.
          </div>

          <br />

          <textarea
            className="border rounded-xl p-4 w-full h-48"
            placeholder="Describe your problem here..."
          ></textarea>

          <br />

          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </main>
    </>
  );
}
