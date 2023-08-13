/** @type {import('tailwindcss').Config} */
const blue = 'rgba(0, 132, 255, 0.15)';
const fuschia = 'rgba(217, 70, 239, 0.2)';
const emerald = 'rgba(16, 185, 129, 0.2)';
const transitionColor = 'rgba(17, 24, 39, 0.5)';
const endColor = 'rgba(17, 24, 39, 1)';

/**
 * Creates a list of colors to use in a CSS linear gradient
 * @param {string} highlightColor Highlight color of the gradient
 * @param {string} endColor End color of the gradient
 * @param {string} neutralColor Non-highlighted color in the gradient
 * @param {number} deviation How far from the center to place the highlight
 * @param {number} strength The concentration of the highlight
 */
function ray(highlightColor, endColor, neutralColor, deviation, strength) {
	const stops = Array(strength).fill(neutralColor);

	// Fill ends of array with end color
	stops[0] = endColor;
	stops[stops.length - 1] = endColor;

	// Fill center of array with highlight color (with deviation offset)
	stops[Math.floor(stops.length / 2) + deviation] = highlightColor;

	// Join array into string
	return stops.join(',');
}

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'header-gradient': `linear-gradient(10deg, ${ray(
					blue,
					endColor,
					transitionColor,
					0,
					7
				)}), linear-gradient(-20deg, ${ray(emerald, endColor, transitionColor, 0, 9)})`,
				'section-gradient': `linear-gradient(to right, ${blue}, ${fuschia}, linear-gradient(to bottom, rgba(24, 24, 27, 1), rgba(3, 7, 18, 0.1))`
			}
		},
		fontFamily: {
			serif: ['Poppins', 'sans-serif']
		}
	},
	plugins: []
};
