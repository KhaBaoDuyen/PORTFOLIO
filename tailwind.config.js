/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mb: "0px",       
      tb: "640px",     
      lg: "1024px", 
      xl: "1280px", 
    }, theme: {
    extend: {
      screens: {
        mb: { max: '480px' },
        md: { min: '481px', max: '868px' },
        lg: { min: '869px' },
      },
    },
  },
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'spin-slow': 'spin 5s linear infinite',
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
