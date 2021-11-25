//global variables
let turn = 0;
let turnWhite = 0;
let turnBlack = 0;
let whoseTurn = "black";

// const Box = require('./Box');

// import { initBoard } from './Board.js';
// import './Board.js';

// let box28 = document.getElementById('box28');
// let box29 = document.getElementById('box29');

// const box1 = { num: "1", clicked: true, element: document.getElementById('box1'), boxRight: null }
// const box2 = { num: "2", clicked: true, element: document.getElementById('box2'), boxRight: null }

//new stuff
// let boxes = [{}];

/*************************** */

// initBoard()
//now in Board.js

/*************************** */

// for (let i = 0; i < 64; i++) {
//     console.log(i)
//     console.log(`${i}: ${boxes[i].num}`)
//     console.log(`${i}: boxLeft: ${boxes[i].boxLeft.name}`)
//     console.log(`${i}: boxRight: ${boxes[i].boxRight.name}`)
// }

// let box28 = { clicked: false, element: document.getElementById('box28') }
// let box29/*data*/ = { clicked: "no", element: document.getElementById('box29') }

// const div64 = document.getElementById('box64')

//new stuff
// const boxFactory = (obj, num, name) => {
//     // return {
//     obj.num = num,
//         obj.name = name,
//         obj.clicked = false,
//         obj.filled = false,
//         obj.boxTop = null,
//         obj.boxTopRight = null,
//         obj.boxRight = null,
//         obj.boxBottomRight = null,
//         obj.boxBottom = null,
//         obj.boxBottomLeft = null,
//         obj.boxLeft = null,
//         obj.boxTopLeft = null
//     // }
// }

// for (let i = 0; i < 64; i++) {

//new stuff
// boxFactory(div1, 1, 'box1');
// }

// console.log(`${div1.num}: ${div1.name}`);


let buttonStart = document.getElementById('start');

//guessing needs to toggle display: none and display: flex

function startBoard() {
    let divBoard = document.createElement('div');
    divBoard.id = "board";
    document.body.appendChild(divBoard);
}

buttonStart.addEventListener('click', startBoard);


// function fillWhite(event) {
//     event.target.style.backgroundColor = "white";
//     event.target.style.borderRadius = '50%';
//     event.target.style.border = '0px';
//     // event.target.innerHTML = `${box28data.clicked}`;
//     // event.target.textAlign = 'center';
//     if (event.target.clicked) {
//         // console.log(event.target.clicked)
//         event.target.style.backgroundColor = "black"
//         event.target.clicked = true;
//     } else {
//         event.target.style.backgroundColor = "white"
//         event.target.clicked = false;
//     }

//     console.log(`event.target.num = ${event.target.num}`)
//     console.log(`this.num = ${this.num}`)

//     console.log(`in fillWhite with event.target.boxRight.num = ${event.target.boxRight.num} `)
//     console.log(`${event.target.boxRight.name}`)
//     event.target.boxRight.click();
//     event.target.boxRight.boxRight.click();

// }

// function fillBlack(event) {
//     event.target.style.backgroundColor = "black";
//     event.target.style.borderRadius = '50%';
//     event.target.style.border = '0px';
//     if (event.target.clicked) {
//         event.target.style.backgroundColor = "white"
//         event.target.clicked = true;
//     } else {
//         event.target.style.backgroundColor = "black"
//         event.target.clicked = false;
//     }

// }

function fill(event) {
    // event.target.style.backgroundColor = "black";
    // event.target.style.borderRadius = '50%';
    // event.target.style.border = '0px';

    // if (!(event.target.boxTopLeft.fill === 'white' || event.target.boxTopLeft.fill === "black")) {
    if (!(event.target.boxTopLeft.fill)) {
        console.log(`no top left box filled`)
    } else {
        console.log(`top left box filled`)
    }

    if (!(event.target.boxTop.fill) &&
        !(event.target.boxTopRight.fill) &&
        !(event.target.boxRight.fill) &&
        !(event.target.boxBottomRight.fill) &&
        !(event.target.boxBottom.fill) &&
        !(event.target.boxBottomLeft.fill) &&
        !(event.target.boxLeft.fill) &&
        !(event.target.boxTopLeft.fill)) {
        console.log(`can't click here - no borders`);
        return;
    }

    if (whoseTurn === "black" &&
        (event.target.boxTop.fill !== "white") &&
        (event.target.boxTopRight.fill !== "white") &&
        (event.target.boxRight.fill !== "white") &&
        (event.target.boxBottomRight.fill !== "white") &&
        (event.target.boxBottom.fill !== "white") &&
        (event.target.boxBottomLeft.fill !== "white") &&
        (event.target.boxLeft.fill !== "white") &&
        (event.target.boxTopLeft.fill !== "white")) {
        console.log(`can't click here - black turn, no white borders`);
        return;
    }

    if (whoseTurn === "white" &&
        (event.target.boxTop.fill !== "black") &&
        (event.target.boxTopRight.fill !== "black") &&
        (event.target.boxRight.fill !== "black") &&
        (event.target.boxBottomRight.fill !== "black") &&
        (event.target.boxBottom.fill !== "black") &&
        (event.target.boxBottomLeft.fill !== "black") &&
        (event.target.boxLeft.fill !== "black") &&
        (event.target.boxTopLeft.fill !== "black")) {
        console.log(`can't click here - white turn, no black borders`);
        return;
    }

    if (!event.target.fill && whoseTurn === "black") {
        console.log(`turn number: ${turn}, in black whose turn ${whoseTurn}`)
        fillWhite(event.target)
        whoseTurn = "white"
        turn++;
    } else if (!event.target.fill && whoseTurn === "white") {
        console.log(`turn number: ${turn}, in white whose turn ${whoseTurn}`)
        fillBlack(event.target)
        whoseTurn = "black"
        turn++;
    } else {
        console.log(`slipped through the cracks`)
    }

    if (event.target.fill === "black" || event.target.fill === false) {
        // event.target.style.backgroundColor = "white"
        // event.target.fill = "white";
        fillWhite(event.target)
    } else {
        // event.target.style.backgroundColor = "black"
        // event.target.fill = "black";
        fillBlack(event.target)
    }
}

for (let i = 0; i < 64; i++) {
    // boxes[i].addEventListener('click', fillBlack);
    boxes[i].addEventListener('click', fill);
}

/*
let randNum = Math.floor(Math.random() * 64)
console.log(`randNum = ${randNum}`);
boxes[randNum].click();

let i = boxes[randNum];
let j = boxes[randNum];

while (i.boxTop) {
    i.boxTop.click();
    i = i.boxTop
}

while (j.boxRight) {
    j.boxRight.click();
    j = j.boxRight
}
*/

// if (boxes[randNum].boxTop) {
//     boxes[randNum].boxTop.click();
// }

// if (boxes[randNum].boxTopRight) {
//     boxes[randNum].boxTopRight.click();
// }

// if (boxes[randNum].boxRight) {
//     boxes[randNum].boxRight.click();
// }

// if (boxes[randNum].boxBottomRight) {
//     boxes[randNum].boxBottomRight.click();
// }

// if (boxes[randNum].boxBottom) {
//     boxes[randNum].boxBottom.click();
// }

// if (boxes[randNum].boxBottomLeft) {
//     boxes[randNum].boxBottomLeft.click();
// }

// if (boxes[randNum].boxLeft) {
//     boxes[randNum].boxLeft.click();
// }

// if (boxes[randNum].boxTopLeft) {
//     boxes[randNum].boxTopLeft.click();
// }

