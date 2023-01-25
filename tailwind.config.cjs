/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
		},
	},
	plugins: [],
};
