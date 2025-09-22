import React, { useRef } from "react";
import { Link } from "react-router-dom";
import BackgroundMusic from "../../components/BackgroundMusic";
import Lanyard from "../../components/CardProfile";
import { ShinyText, ShinyTextArray } from "../../components/ShinyText";
import MusicPlayerButton from "../../components/BackgroundMusic/MusicPlayerButton";
import MusicButton from "../../components/BackgroundMusic/MusicButton";

export default function Landing() {
  const musicRef = useRef(null);

  return (
    <>
      <main className="home relative mx-auto h-screen overflow-hidden">
        <img src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%202147226991.webp"
          loading="lazy" sizes="(max-width: 2088px) 100vw, 2088px" srcset="
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%25202147226991-p-500.webp 500w, 
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%25202147226991-p-800.png 800w, 
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%25202147226991-p-1080.png 1080w, 
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%25202147226991-p-1600.png 1600w, 
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%25202147226991-p-2000.png 2000w, 
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5647_Frame%202147226991.webp 2088w"
          alt="" className="img absolute bottom-0" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(233,102,142,0.15),_transparent_70%)]"></div>

        <div className="container min-w-max border-2 h-max flex flex-row items-center justify-center
         mx-auto lg:py-10 py-5 px-4">
          <div className="flex text-center mx-auto flex-col pt-[15rem] lg:pt-[8rem] space-y-5 z-50">
            <span>
              <ShinyTextArray
                text="FRONTEND"
                className="md:text-6xl mb:text-6xl lg:text-9xl text-white/60 font-bold flex"
                speed={3}
              />
            </span>

            <div className="ml-[1.5rem] lg:ml-[15rem]">
              <ShinyTextArray
                text="DEVELOPER"
                className="md:text-6xl mb:text-6xl lg:text-9xl font-bold flex 
             text-transparent 
             [-webkit-text-stroke:2px_#e9668e]"
                speed={4}
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute w-[40%] lg:w-[30%] bg-white/20 top-0 right-0">
          <Lanyard position={[0, 0, 10]} fov={30} gravity={[0, -20, 0]} className="mb:hidden" />
        </div>

        <BackgroundMusic ref={musicRef} />
        <MusicButton audioRef={musicRef} />

        <div className="absolute bottom-[0rem] lg:bottom-[1rem] right-[1rem] lg:right-[20rem] text-left">
          <Link
            to="/kha-thi-bao-duyen"
            className="text-white px-3 lg:px-4 py-2 flex flex-col gap-2 lg:gap-4 items-left rounded-md cursor-pointer relative">
            <span className="relative z-10">
              <ShinyText
                text="Chuyển đến hồ sơ"
                disabled={false}
                speed={3}
                className="custom-class text-xl sm:text-2xl lg:text-3xl font-bold hover:text-white"
              />

            </span>
            <span className="flex flex-row items-center  ">
              <span className="animate-bounce text-xs lg:text-sm">ở CanTho, VietNam.</span>
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>

          </Link>
        </div>
        <a
          href="/CVPORPOLIO.pdf"
          download={"/CVPORPOLIO.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-[20%] hidden 
          lg:block lg:right-[-3rem] 
          bg-gradient-to-r from-pink-500/20 to-pink-500/10 backdrop-blur-md 
          px-4 lg:px-6 py-2 lg:py-3 
          border-4 border-white/70
          rounded-tl-[10px] rounded-tr-[10px] 
          hover:from-pink-500/30 hover:to-pink-500/20 
          transition rotate-[270deg] flex gap-2 items-center text-sm lg:text-base 
          shadow-[0_0_20px_rgba(236,72,153,0.6)]">
          <p>Xem chi tiết CV</p>
        </a>
      </main>
    </>

  );
}
