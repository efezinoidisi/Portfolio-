/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sl: '500px',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        'ubuntu-mono': 'var(--font-ubuntu-mono)',
        'fira-code': 'var(--font-fira-code)',
      },
      colors: {
        gray: '#B4BAC6',
        purple: '#C778DD',
        'sky-blue': '#62AEEF',
        yellow: '#E5C07A',
        body: '#282C33',
        teal: '#55B6C2',
        header: 'rgba(44 ,40, 51, 0.8)',
        bright: '#E06B74',
        'sky-blue': '#62AEEF',
        yellow: '#E5C07A',
      },
      backgroundImage: {
        dots: 'url("/dots.svg")',
        'two-dots': '[url("/dots.svg"), url("/dots.svg")]',
        shine:
          'linear-gradient(270deg, #C778DD -7.86%, rgba(201, 0, 193, 0.00) 91.6%)',
      },
      backgroundSize: {
        small: '10rem 100%',
        smallest: '4rem 50%',
        normal: '50%',
      },
      boxShadow: {
        ml: '-3px -3px 3px #C778DD',
      },
      animation: {
        nav: 'slide 0.5s ease-in-out forwards 1',
        move: 'button 1s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { left: '20%', right: '30%' },
          '50%': { left: '10%', right: '20%' },
          '100%': { left: '5%', right: '5%' },
        },
        button: {
          '0%': { borderLeftColor: '#E5C07A' },
          '50%': { borderRightColor: '#E5C07A' },
          '75%': { borderTopColor: '#E5C07A' },
          '100%': { borderBottomColor: '#E5C07A' },
        },
      },
    },
  },
  plugins: [],
};
