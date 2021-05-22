const generateGrid = function(size) {
	const canvas = document.getElementById('canvas')
	for (i = 0; i < size * size; i++) {
		canvas.appendChild(document.createElement('div'))
	}
}

window.addEventListener('DOMContentLoaded', () => generateGrid(16))

