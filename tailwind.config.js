/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'bgcolor': '#355070',
				'primarycolor': '#EAAC8B',
				'secondarycolor': '#E88C7D',
				'boardcolor': '#6D597A'
			},
			fontFamily: {
				'rajdhani': ['Rajdhani', 'sans-serif']
			},
			keyframes:{
				gameover:{
					'0%': {top: '50%', left:'50%', width: '0%', height: '0%',opacity: '0' ,transfrom: 'translate(-50%, -35%)'},
					'50%': {top: '25%', left:'25%', width: '50%', height: '50%',opacity:'0', transfrom: 'translate(-25%, -25%)'},
					'100%': {top: '0%', left:'0%', width: '100%', height: '100%', opacity:'1' ,transfrom: 'translate(0%, 0%)'}
				},
				shake:{
					'0%': {transform: 'translateX(0)'},
					'33%': {transform: 'translateX(-5px)'},
					'66%': {transform: 'translateX(5px)'},
					'100%': {transform: 'translateX(0px)'}
				}
			},
			animation:{
				gameover: 'gameover 0.7s linear forwards',
				shake: 'shake 0.5s linear forwards'
			}
		}	
	},
	plugins: [],
}
