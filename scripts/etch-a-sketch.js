const sizeOfGrid = 5;
const container = document.querySelector('.container');
const board = document.querySelector('.board');

const createGrid = (numberofGrids) => {
    //create rows using a for-loop
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (var i=0; i<numberofGrids; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        //This for-loop will create a single square 'numberofGrids' times and add it to the gridRow
        for (var j=0; j<numberofGrids; j++) {
            const squareDimensions = 500/numberofGrids
            const square = document.createElement('div')
            square.style.width = `${squareDimensions}px`
            square.style.height = `${squareDimensions}px`
            square.classList.add('square')
            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
            })

            gridRow.appendChild(square)
        }
        wrapper.appendChild(gridRow)
    }
    board.appendChild(wrapper);
}

createGrid(sizeOfGrid);

const resetButton = document.querySelector('#numberOfSquares')

resetButton.addEventListener('click', () => {
    let userSize = parseInt(prompt('Enter grid size: '));
    while (userSize>100) {
        userSize = parseInt(prompt('Choose a number below 100'));
    }
    wrapper = document.querySelector('.wrapper');

    if (!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
        createGrid(userSize)
    }

})

