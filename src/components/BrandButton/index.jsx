export default function BrandButton({ icon, text }) {
    return (
        <span className="text-white 
                        whitespace-nowrap 
                        lg:px-6 lg:py-3 px-4 py-2 
                        rounded-full 
                        flex justify-center items-center gap-2
                        bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] 
                        shadow-[inset_0_6px_8px_rgba(255,255,255,0.1),0_2px_2px_rgba(0,0,0,0.5)]
                        border border-white/10">
            {icon && (
                <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <span className="text-black">{icon}</span>
                </span>
            )}

            <p className="font-bold lg:text-xl text-md">
                {text}
            </p>
        </span>
    );
}
