/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Asturian earthy palette
        stone: {
          50:  '#f6f5f0',
          100: '#e8e6de',
          200: '#d0ccc0',
          300: '#b5ae9f',
          400: '#9a9184',
          500: '#7d7568',
          600: '#635d52',
          700: '#4e4940',
          800: '#3a362f',
          900: '#282520',
        },
        forest: {
          50:  '#f0f4ee',
          100: '#d9e5d4',
          200: '#b2ccaa',
          300: '#85ad7a',
          400: '#5e9050',
          500: '#3f7234',
          600: '#2e5826',
          700: '#224019',
          800: '#182d10',
          900: '#0f1d0a',
        },
        cream: '#faf8f3',
        bark:  '#8b6f47',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
