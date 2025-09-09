export const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};


export const ShinyTextArray = ({ text, disabled = false, speed = 15, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`relative inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 90%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'currentColor',
                animationDuration: animationDuration,
                // color: '#b5b5b5a4',
            }}
        >
            {text.split('').map((letter, i) => (
                <span
                    key={i}
                    className="inline-block hover:text-white !hover:translate-y-2 transform transition-transform duration-500 ease-in-out  animate-fade-in-up"
                    style={{
                        animationDelay: `${i * 0.05}s`,
                        animationFillMode: 'forwards',
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </div>
    );
};

