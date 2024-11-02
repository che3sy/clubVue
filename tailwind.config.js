/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["Jost", "sans-serif"],
			},
			colors: {
				color1: "hsla(163, 36%, 60%, 1)",
				color2: "hsla(39, 60%, 56%, 1)",
				color3: "hsla(28, 58%, 55%, 1)",
				color4: "hsla(16, 56%, 54%, 1)",
				color5: "hsla(26, 25%, 35%, 1)",
			},
			gridTemplateColumns: {
				16: "repeat(16, minmax(0, 1fr))",
			},
		},
	},
	variants: {},
	plugins: [],
};
