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
        black: {
          100: '#ECECEC',
          200: '#C7C7C7',
          300: '#B5B5B5',
          400: '#A3A3A3',
          500: '#909090',
          600: '#6B6B6B',
          700: '#7E7E7E',
          800: '#595959',
          900: '#464646',
         },
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
       },
       secondary: {
        200: '#FFC299',
        400: '#FFC299',
        600: '#FFA366',
        900: '#FF6600',
       },
       tertiary: {
        200: '#CCF2F7',
        400: '#9AE6EF',
        600: '#67D9E8',
        900: '#02C0D8',
       }
      },
      fontFamily: {
        sans: '--font-montserrat',
      },
    },
  },
  plugins: [],
}
