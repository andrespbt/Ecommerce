/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        orange: '#ff7d1a',
        paleOrange: '#ffede0',
        darkPaleOrange: '#ffb987',
        darkBlue: '#1d2025',
        darkGrayBlue: '#68707d',
        grayBlue: '#b6bcc8',
        lightGrayBlue: '#f7f8fd',
        white: '#fff',
      },
      boxShadow: {
        '3xl': '-3px 10px 24px 0px rgba(0,0,0,0.69);',
      },
      keyframes: {
        roller: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-roll': 'roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
      transformOrigin: {
        spin: '40px 40px',
      },
      animationDelay: {
        1: '-0.036s',
        2: '-0.072s',
        3: '-0.108s',
        4: '-0.144s',
        5: '-0.18s',
        6: '-0.216s',
        7: '-0.252s',
        8: '-0.288',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
