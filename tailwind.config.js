const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#000000",
			gray: colors.blueGray,
			purple: colors.indigo,
			blue: colors.cyan,
			green: colors.emerald,
			red: colors.rose,
			yellow: colors.amber,
		},
		extend: {
			fontFamily: {
				sans: ["Montserrat"],
				body: ["'Nunito Sans'"],
			},
		},
	},
	variants: {},
	plugins: [],
};
