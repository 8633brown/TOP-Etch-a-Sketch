let previousElement = null;
const stylePixel = function(pixel, fillStyle) {
	if (pixel === previousElement) { return }
	previousElement = pixel
	switch (fillStyle) {
		case 'black':
			fillPixel(pixel, '#000')
			break
		case 'shade':
			shadePixel(pixel)
			break
		case 'rainbow':
			rainbowPixel(pixel)
			break
		case 'random':
			randomizePixel(pixel)
			break
	}
}
const fillPixel = function(pixel, color) {
	pixel.style.backgroundColor = color
	pixel.style.opacity = 1
}

const shadePixel = function(pixel) {
	pixel.style.backgroundColor = '#000'
	const opacity = Number(pixel.style.opacity)
	if (opacity === '') {
		pixel.style.opacity = 0.1
	} else {
		pixel.style.opacity = opacity + 0.1
	}
}

let rainbow = 0
const rainbowPixel = function(pixel) {
	pixel.style.backgroundColor = `hsl(${rainbow}, 100%, 50%)`
	rainbow += 3
	if (rainbow >= 360) { rainbow = 0 }
}

const randomizePixel = function(pixel) {
	pixel.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`
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
	const fillStyle = document.getElementById('fillStyle')
	canvas.addEventListener('pointermove', (ev) => {
		if (ev.target.id === 'canvas') { return }
		stylePixel(ev.target, fillStyle.value)
	})
	generateGrid(16, canvas)

	document.getElementById('newCanvas').addEventListener('click', () => {
		const size = getUserCanvasSize()
		generateGrid(size, canvas)
	})
})

