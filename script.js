let previousElement = null;
const shadePixel = function(pixel) {
	if (pixel.id === 'canvas' || pixel === previousElement) {
		return
	}
	previousElement = pixel
	pixel.style.backgroundColor = 'black'
}

const generateGrid = function(size, canvas) {
	canvas.innerHTML = ''
	for (i = 0; i < size * size; i++) {
		canvas.appendChild(document.createElement('div'))
	}
	canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
	canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

const getUserCanvasSize = function() {
	const size = Number(prompt('canvas size (must be between 16 and 64)'))
	// fierfox seems to crash around 90, chrome can handle more.
	if (!size || size < 16 || size > 64) {
		return getUserCanvasSize()
	}
	return size
}

window.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('canvas')
	canvas.addEventListener('pointermove', (ev) => shadePixel(ev.target))
	generateGrid(16, canvas)

	document.getElementById('newCanvas').addEventListener('click', () => {
		const size = getUserCanvasSize()
		generateGrid(size, canvas)
	})
})

