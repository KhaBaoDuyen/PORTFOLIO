export default function Heading({ text }) {
    return (
       <span className="flex gap-2">
                <img src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f54bb_arrow-left.svg"
                    loading="lazy" alt="" class="badge_right w-full lg:w-[12vw]" />
                <p
                    className="
                  text-white 
                    whitespace-nowrap 
                    px-6 py-3 
                    rounded-full 
                    flex justify-center items-center
                    bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] 
                    shadow-[inset_0_4px_8px_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.5)]
                    border border-white/10"
                >
                  {text}
                </p>

                <img src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f54bd_arrow-right.svg"
                    loading="lazy" alt="" class="badge_right w-full lg:w-[12vw]" />
            </span>
    );
}