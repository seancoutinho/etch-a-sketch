const sizeOfGrid = 106;
const container = document.querySelector('.container');
const board = document.querySelector('.board');

const createGrid = (numberofGrids) => {
    //create rows using a for-loop
    for (var i=0; i<numberofGrids; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        //This for-loop will create a single square 'numberofGrids' times and add it to the gridRow
        for (var j=0; j<numberofGrids; j++) {
            const squareDimensions = 500/sizeOfGrid
            const square = document.createElement('div')
            square.style.width = `${squareDimensions}px`;
            square.style.height = `${squareDimensions}px`;
            square.classList.add('square')
            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
            })

            gridRow.appendChild(square)
        }
        board.appendChild(gridRow)
    }
}


createGrid(sizeOfGrid);
