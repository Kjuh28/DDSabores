/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      amber_50: '#fffbeb',
      amber_100: '#fef3c7',
      amber_200: '#fde68a',
      amber_300: '#fcd34d',
      amber_400: '#fbbf24',
      amber_500: '#f59e0b',
      amber_600: '#d97706',
      amber_700: '#b45309',
      amber_800: '#92400e',
      amber_900: '#78350f',
      amber_950: '#451a03',
    },
    fontFamily:{
      'sacramento':['Sacramento', 'cursive','normal']
    }
  },
  plugins: [],
}
