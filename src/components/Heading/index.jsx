export function Heading({ text, left = true, right = true }) {
  return (
    <span className="flex gap-2 items-center">
      {left && (
        <img
          src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f54bb_arrow-left.svg"
          loading="lazy"
          alt="arrow-left"
          className="badge_left w-full lg:w-[12vw]"
        />
      )}

      <p
        className="
          text-white 
          whitespace-nowrap 
          px-6 py-3 
          rounded-full 
          flex justify-center items-center
          bg-gradient-to-b from-[#0a0a0a4b] to-[#0a0a0a4b] 
          shadow-[inset_0_4px_8px_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.5)]
          border border-white/10
          transition-all duration-300 
          hover:shadow-[inset_0_6px_12px_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.7)]
            "
      >
        {text}
      </p>

      {right && (
        <img
          src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f54bd_arrow-right.svg"
          loading="lazy"
          alt="arrow-right"
          className="badge_right w-full lg:w-[12vw]"
        />
      )}
    </span>
  );
}
