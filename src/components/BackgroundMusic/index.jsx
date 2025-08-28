import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleFirstClick = () => {
    if (audioRef.current && !hasStarted) {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      });
    }
  };

  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.volume = 0.3
    }
  })
  useEffect(() => {
    document.addEventListener("click", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, [hasStarted]);

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
    <>
      <audio ref={audioRef} loop muted volume={0.3}>
        <source src="/music/musicBg.mp3" type="audio/mpeg" />
      </audio>

      <div
        className="absolute bottom-[6rem] left-[5rem] cursor-pointer"
        onClick={toggleMusic}
      >
        <div className="logo-wrapper">
          <img
            src="/images/logo/logo-dark.png"
            alt="Logo"
            className="logo"
          />
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
    </>
  );
}
