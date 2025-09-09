import { useState, useEffect } from "react";

export default function MusicPlayerButton({ audioRef }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

useEffect(() => {
  if (!audioRef.current || !audioRef.current.el) return;

  const el = audioRef.current.el;

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  el.addEventListener("play", handlePlay);
  el.addEventListener("pause", handlePause);
  el.addEventListener("ended", handleEnded);

  return () => {
    el.removeEventListener("play", handlePlay);
    el.removeEventListener("pause", handlePause);
    el.removeEventListener("ended", handleEnded);
  };
}, [audioRef]);


    return (
        <div className="playButtonMusic min-w-max" onClick={toggleMusic}>
            <div className="loader">
                <div className="song flex flex-col">
                    <span className="name m-0 p-0 text-xl">Move Your Body</span>
                    <span className="artist m-0 p-0 text-sm">Öwnboss & Sevek</span>
                </div>
                <div className="albumcover"></div>
                <div className="loading">
                    {isPlaying ? (
                        <>
                            <div className="load"></div>
                            <div className="load"></div>
                            <div className="load"></div>
                            <div className="load"></div>
                        </>
                    ) : (
                        <div className="play"></div>
                    )}
                </div>
            </div>
        </div>
    );
}
