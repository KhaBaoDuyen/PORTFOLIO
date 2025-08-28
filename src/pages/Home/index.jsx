import React from "react";
import { Link } from "react-router-dom";
import BackgroundMusic from "../../components/BackgroundMusic";

export default function Home() {
    return (
        <main className="home relative mx-auto h-screen">
            <div className="container mx-auto py-10">
                <Link to="/" className="text-4xl text-white">BaoDuyen</Link>
                <div className="flex flex-col text-9xl font-bold pt-10">
                    <h1 className="flex text-9xl font-bold pt-20">
                        {"FRONTEND".split("").map((char, i) => (
                            <span
                                key={i}
                                className="
                                inline-block text-white
                                animate-fade-in-up        
                                transition-top duration-500 ease-in-out
                                hover:relative hover:-top-2
                                cursor-pointer
                                "
                                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>

                    <h1 className="flex text-9xl font-bold ml-20">
                        {"DEVELOPER".split("").map((char, i) => (
                            <span
                                key={i}
                                className="
                                inline-block text-white
                                animate-fade-in-up
                                transition-top duration-500 ease-in-out
                                hover:relative hover:-top-2
                                cursor-pointer
                                "
                                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>


            <div className="absolute w-[30%] top-4 right-0 overflow-hidden rounded-bl-[50px]">
                <div className="bg-white/20 min-h-min">
                    <img src="/images/home/avataCv 1.png" alt="" className="w-[25rem] h-[35rem]" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            </div>


            <Link
                to="/files/CV_BaoDuyen.pdf"
                download
                className="absolute top-2/3 m-0 right-[-5rem] bg-white/20 backdrop-blur-md px-6
                 py-3 rounded-tl-[10px] rounded-tr-[10px] hover:bg-white/30 transition rotate-[270deg]
                 flex gap-2 items-center"
            >

                <p>Download CV</p>
                <span>----</span>
                <img src="/images/home/logo-dark.png" alt="" />
            </Link>
            <BackgroundMusic />
            <Link className="absolute bottom-[3rem] right-[15rem] text-white px-4 py-2 transition flex gap-4 items-center
             hover:shadow-lg rounded-md cursor-pointer"
            >
                <span>
                    <h1 className="text-3xl transition-transform hover:-translate-y-1">Open to profile</h1>
                    <span className="animate-bounce text-sm">in CanTho, VietNam.</span>
                </span>
                <img
                    src="/images/logo/logo-dark.png"
                    alt=""
                    className="p-2 rounded-full min-w-[50px] min-h-[50px] transition-transform hover:scale-110"
                />
            </Link>

        </main>
    );
}