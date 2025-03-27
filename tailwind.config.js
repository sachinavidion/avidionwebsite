/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f0f1a',
        secondary: '#14142B',
        accent: '#8B5CF6',
        'accent-glow': '#A78BFA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(139, 92, 246, 0.3)',
        'glow-md': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 35px -7px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [],
};