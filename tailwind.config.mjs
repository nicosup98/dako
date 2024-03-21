/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
			{
				dako: {

					"primary": "#7fffd4",

					"secondary": "#d6d3d1",

					"accent": "#6366f1",

					"neutral": "#010b00",

					"base-100": "#1f2937",

					"info": "#00b9ff",

					"success": "#34d399",

					"warning": "#fde047",

					"error": "#ff3471",
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
