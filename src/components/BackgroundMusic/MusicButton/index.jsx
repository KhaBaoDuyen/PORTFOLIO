import { useState } from "react";

export default function MusicButton({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="absolute lg:bottom-[6rem] lg:left-[5rem] bottom-5 left-2 cursor-pointer"
      onClick={toggleMusic}
    >
      <div className="logo-wrapper">
        <img src="/images/logo/logo-dark.png" alt="Logo" className="logo " />
        <svg viewBox="0 0 200 200" className="circle-text">
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
            />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="0%">
              Bao Duyen • Bao Duyen • Bao Duyen • Bao Duyen •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
