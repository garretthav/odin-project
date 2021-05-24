const clearButton = document.querySelector('#clear');
const etchASketchContainer = document.querySelector('.etch');

function createGrid(size) {
	for (let i = 0; i < size * size; i++) {
		let cell = document.createElement('div');
		cell.className = 'cell';
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = 'black';
		});
		etchASketchContainer.appendChild(cell);
	}
	etchASketchContainer.setAttribute(
		'style',
		`grid-template-rows: repeat(${size}, auto); grid-template-columns: repeat(${size}, auto);`
	);
}

function clearGrid() {
	while (etchASketchContainer.firstChild) {
		etchASketchContainer.removeChild(etchASketchContainer.lastChild);
	}
	let newGridSize = parseInt(prompt('Please enter a new grid size'), 10);
	console.log(newGridSize);
	if (typeof newGridSize == 'number') {
		createGrid(newGridSize);
	}
}

clearButton.addEventListener('click', clearGrid);
createGrid(32);
