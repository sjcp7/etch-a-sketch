const createGridBtn = document.querySelector('#new-grid');
const gridOptions = document.querySelectorAll('#grid-options input');
createGridBtn.addEventListener('click', createGrid);
gridOptions.forEach(option => option.addEventListener('click', setGridOption));

let gridOption = 'default';
createGrid();

function createGrid() {    
    clearGrid();

    const grid = document.querySelector('#grid');
    const gridSize = Number(document.querySelector('#grid-size').value);
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;    

    for (let i = 0; i < gridSize ** 2; i++) {
        const gridItem = document.createElement('div');        
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll('.grid-item');    
    gridItems.forEach(item => item.addEventListener('mouseover', changeColor));
    
    
}

function changeColor() {
    let currentColor = getRandColor();
    if (gridOption === 'default') {
        this.style.backgroundColor = 'black';
    }
    else if (gridOption === 'rainbow') {
        this.style.backgroundColor = currentColor;
    }
    else if (gridOption === 'eraser') {
        this.style.backgroundColor = 'white';
    }
    else if (gridOption === 'more-bright') {
        increaseLight(this, currentColor);
    }
    else if (gridOption === 'less-bright') {
        reduceLight(this, currentColor);
    }
    
}

// Helper Functions

function clearGrid() {
    const grid = document.querySelector('#grid');
    grid.innerHTML = '';
}

function getRandNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

function getRandColor() {
    const H = getRandNumber(360);
    const S = getRandNumber(100) + '%';
    const L = '50%';
    
    return `hsl(${H}, ${S}, ${L})`;
    
}

// Grid options functions

function setGridOption() {
    if (this.type === 'radio') {
        if (this.checked === true) gridOption = this.value;
    }    
}

function increaseLight(gridItem, color) {
    
    

    
}

function reduceLight(gridItem, color) {
    
}





