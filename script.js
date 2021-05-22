const shadePixel = function(pixel) {
	console.log(pixel)
}

const generateGrid = function(size) {
	const canvas = document.getElementById('canvas')
	canvas.addEventListener('pointermove', (ev) => shadePixel(ev))
	for (i = 0; i < size * size; i++) {
		canvas.appendChild(document.createElement('div'))
	}
}

window.addEventListener('DOMContentLoaded', () => generateGrid(16))

