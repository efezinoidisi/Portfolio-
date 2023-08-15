/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#ABB2BF',
        purple: '#C778DD',
        blue: '#62AEEF',
        yellow: '#E5C07A',
      },
      backgroundImage: {
        dots: 'url("/dots.svg")',
      },
      backgroundColor: {
        body: '#282C33',
        gray: '#ABB2BF',
        teal: '#55B6C2',
        header: 'rgba(40 ,44, 51, 0.8)',
        bright: '#E06B74',
        blue: '#62AEEF',
        yellow: '#E5C07A',
      },
      borderColor: {
        gray: '#ABB2BF',
      },
      backgroundSize: {
        small: '10rem 100%',
        smallest: '4rem 50%',
        normal: '50%',
      },
      animation: {
        nav: 'slide 0.5s ease-in-out forwards 1',
      },
      keyframes: {
        slide: {
          '0%': { left: '20%', right: '30%' },
          '50%': { left: '10%', right: '20%' },
          '100%': { left: '0', right: '0' },
        },
      },
    },
  },
  plugins: [],
};
