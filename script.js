let previousElement = null;
const shadePixel = function(pixel) {
	if (pixel.id === 'canvas' || pixel === previousElement) {
		return
	}
	previousElement = pixel
	pixel.style.backgroundColor = 'black'
}

const generateGrid = function(size) {
	const canvas = document.getElementById('canvas')
	canvas.addEventListener('pointermove', (ev) => shadePixel(ev.target))
	for (i = 0; i < size * size; i++) {
		canvas.appendChild(document.createElement('div'))
	}
}

window.addEventListener('DOMContentLoaded', () => generateGrid(16))

