import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from "react";

const BackgroundMusic = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

   useImperativeHandle(ref, () => audioRef.current);

  const tryPlay = () => {
    if (audioRef.current && !hasStarted) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => setHasStarted(true))
        .catch((err) => {
          console.warn("Autoplay blocked, waiting for interaction:", err);
        });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

    tryPlay();

    const startOnInteraction = () => tryPlay();
    document.body.addEventListener("click", startOnInteraction);
    document.body.addEventListener("mousemove", startOnInteraction);
    document.body.addEventListener("touchstart", startOnInteraction);

    return () => {
      document.body.removeEventListener("click", startOnInteraction);
      document.body.removeEventListener("mousemove", startOnInteraction);
      document.body.removeEventListener("touchstart", startOnInteraction);
    };
  }, [hasStarted]);

  return (
    <audio ref={audioRef} loop muted>
      <source src="/music/musicBg.mp3" type="audio/mpeg" />
    </audio>
  );
});

export default BackgroundMusic;
