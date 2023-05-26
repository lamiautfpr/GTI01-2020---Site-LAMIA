/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
       primary: {
        100: '#CCE1EB',
        200: '#B3D1E1',
        300: '#99C2D7',
        400: '#80B3CC',
        500: '#66A4C2',
        600: '#4D95B8',
        700: '#3385AE',
        800: '#1A76A4',
        900: '#00679A',
       }
      }
    },
  },
  plugins: [],
}
