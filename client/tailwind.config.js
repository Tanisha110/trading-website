/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '22': '5.5rem',  //88px
        '24': '6rem',     // 96px
        '28': '7rem',     // 112px 
      },
       fontFamily: {
        'inria-sans': ['"Inria Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

