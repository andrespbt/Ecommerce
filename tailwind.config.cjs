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
        sm: ['.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.25rem', '1.75rem'],
        xl: ['1.5rem', '2rem'],
      },
      screens: {
        xs: '375px',
        sm: '640px',
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
        roll: {
          '0%': {
            transform: 'rotate(360deg)',
            transform: 'translateX(-100%)',
          },

          '50%': {
            transform: 'translateX(100px)',
            transform: 'rotate(-180deg)',
          },

          '100%': {
            transform: 'translateX(0%)',
          },
        },

        spin: {
          '0%': {
            transform: 'rotate(-360deg)',
          },

          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite',
        roll: 'roll 3s',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
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