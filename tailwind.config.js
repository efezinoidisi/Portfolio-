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
        'sky-blue': '#62AEEF',
        yellow: '#E5C07A',
      },
      backgroundImage: {
        dots: 'url("/dots.svg")',
        'two-dots': '[url("/dots.svg"), url("/dots.svg")]',
      },
      backgroundColor: {
        body: '#2C2833',
        gray: '#ABB2BF',
        teal: '#55B6C2',
        header: 'rgba(44 ,40, 51, 0.8)',
        bright: '#E06B74',
        'sky-blue': '#62AEEF',
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
