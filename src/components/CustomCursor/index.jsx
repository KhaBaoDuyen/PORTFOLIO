import { useEffect } from "react";

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

function move(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function animate(dot, circle, glow) {
  circleX += (mouseX - circleX) * 0.1;
  circleY += (mouseY - circleY) * 0.1;
  dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  circle.style.transform = `translate(${circleX - 16}px, ${circleY - 16}px)`;
  glow.style.transform = `translate(${mouseX - 300}px, ${mouseY - 300}px)`;
  requestAnimationFrame(() => animate(dot, circle, glow));
}

function handleClick() {
  const glow = document.getElementById("cursor-glow");
  glow.classList.add("scale-110", "transition-transform", "duration-300", "ease-out");
  setTimeout(() => {
    glow.classList.remove("scale-110");
  }, 300);
}

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const circle = document.getElementById("cursor-circle");
    const glow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", move);
    document.addEventListener("click", handleClick);

    animate(dot, circle, glow);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
      ></div>

      <div
        id="cursor-circle"
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998]"
      ></div>

      <div
        id="cursor-glow"
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-white/20 rounded-full opacity-30 pointer-events-none blur-[150px]"
      ></div>
    </div>
  );
}
