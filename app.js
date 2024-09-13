document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.grid');
    const width = 8;
    const squares = [];

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ];

    // Create Board
    function createBoard() {
        // loop 64 times
        for (let i = 0; i < width * width; i++) {
            // create a div
            const square = document.createElement('div');
            // make the div draggable
            square.setAttribute('draggable', true);
            // set the div id
            square.setAttribute('id', i);
            let randomColor = Math.floor(Math.random() * candyColors.length);
            square.style.backgroundColor = candyColors[randomColor];
            // add the div to the grid
            grid.appendChild(square);
            squares.push(square);
        }
    }
    createBoard();


})