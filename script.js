//global variables
let turn = 0;
let turnWhite = 0;
let turnBlack = 0;
let whoseTurn = "black";
let somethingFlipped = false;

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

/* 27/11 */
function flip(current, neighbour, colour) {

    // somethingFlipped = false;

    let j = current;
    let k = current;
    console.log(`neighbour.fill ${current[neighbour].fill} j ${j} k ${k} colour ${colour}`)


    console.log(`in if 1 with j ${j} and neighbour ${neighbour} and ${j[neighbour].fill} `)
    while (j[neighbour] && [neighbour].fill && j[neighbour].fill !== colour) {
        console.log(`in while 1`)
        j = j[neighbour];
    }

    if (j[neighbour] && j[neighbour].fill === colour) {
        console.log(`in if 2`)
        while (k !== j) {
            console.log(`in while 2`)
            k = k[neighbour];
            k.fill = colour;
            if (colour === "black") {
                fillBlack(k);
            } else if (colour === "white") {
                fillWhite(k)
            } else {
                console.log(`something else happened`)
            }
        }
        if (colour === "black") {
            fillBlack(event.target);
        } else if (colour === "white") {
            fillWhite(event.target)
        } else {
            console.log(`and yet another unaccounted for scenario`)
        }
        //don't reassign yet - need to loop through all directions first before switching to "white"
        // whoseTurn = "white";
        // turn++
        somethingFlipped = true;
    } else {
        console.log(`whoseturn ${whoseTurn} = colour ${colour}, neighbour color correct but not bound `);
        // return;
    }

}

function fill(event) {

    // no border squares - get rid of
    if (!(event.target.boxTop && event.target.boxTop.fill) &&
        !(event.target.boxTopRight && event.target.boxTopRight.fill) &&
        !(event.target.boxRight && event.target.boxRight.fill) &&
        !(event.target.boxBottomRight && event.target.boxBottomRight.fill) &&
        !(event.target.boxBottom && event.target.boxBottom.fill) &&
        !(event.target.boxBottomLeft && event.target.boxBottomLeft.fill) &&
        !(event.target.boxLeft && event.target.boxLeft.fill) &&
        !(event.target.boxTopLeft && event.target.boxTopLeft.fill)) {
        console.log(`can't click here - no borders`);
        return;
    }

    // black, no white borders, or, white, not black borders - get rid of
    if (whoseTurn === "black" &&
        ((event.target.boxTop && event.target.boxTop.fill === "white") ||
            (event.target.boxTopRight && event.target.boxTopRight.fill === "white") ||
            (event.target.boxRight && event.target.boxRight.fill === "white") ||
            (event.target.boxBottomRight && event.target.boxBottomRight.fill === "white") ||
            (event.target.boxBottom && event.target.boxBottom.fill === "white") ||
            (event.target.boxBottomLeft && event.target.boxBottomLeft.fill === "white") ||
            (event.target.boxLeft && event.target.boxLeft.fill === "white") ||
            (event.target.boxTopLeft && event.target.boxTopLeft.fill === "white"))) {
        console.log(`semi-legit move`)
        // } else {
        //     console.log(`can't click here - black turn, no white borders`);
        //     return;
    }

    else if (whoseTurn === "white" &&
        ((event.target.boxTop && event.target.boxTop.fill === "black") ||
            (event.target.boxTopRight && event.target.boxTopRight.fill === "black") ||
            (event.target.boxRight && event.target.boxRight.fill === "black") ||
            (event.target.boxBottomRight && event.target.boxBottomRight.fill === "black") ||
            (event.target.boxBottom && event.target.boxBottom.fill === "black") ||
            (event.target.boxBottomLeft && event.target.boxBottomLeft.fill === "black") ||
            (event.target.boxLeft && event.target.boxLeft.fill === "black") ||
            (event.target.boxTopLeft && event.target.boxTopLeft.fill === "black"))) {
        console.log(`semi-legit move`)
    } else {
        console.log(`can't click here ${whoseTurn}`)
        return;
        // console.log(`can't click here - white turn, no black borders`);
        // return;
    }

    // console.log(`${event.target.num} ${event.target.boxRight.fill} ${whoseTurn}`)


    /* 27/11 */

    /* 26/11 */
    // let j = event.target;
    // let k = event.target;

    if (event.target.fill === false && whoseTurn === "black") {
        //black - boxTop
        if (event.target.boxTop && event.target.boxTop.fill === "white") {
            flip(event.target, "boxTop", "black")
        } else {
            console.log("black turn, white square but not bound by  black - box top")
        }

        //black - boxTopRight
        if (event.target.boxTopRight && event.target.boxTopRight.fill === "white") {
            flip(event.target, "boxTopRight", "black")
        } else {
            console.log("black turn, white square but not bound by black - box top right")
        }

        //black - boxRight
        if (event.target.boxRight && event.target.boxRight.fill === "white") {
            flip(event.target, "boxRight", "black")
        } else {
            console.log("black turn, white square but not bound by black - box right")
        }

        //black - boxBottomRight
        if (event.target.boxBottomRight && event.target.boxBottomRight.fill === "white") {
            flip(event.target, "boxBottomRight", "black")
        } else {
            console.log("black turn, white square but not bound by black - box bottom right")
        }

        //black - boxBottom
        if (event.target.boxBottom && event.target.boxBottom.fill === "white") {
            flip(event.target, "boxBottom", "black")
        } else {
            console.log("black turn, white square but not bound by black - box bottom")
        }

        //black - boxBottomLeft
        if (event.target.boxBottomLeft && event.target.boxBottomLeft.fill === "white") {
            flip(event.target, "boxBottomLeft", "black")
        } else {
            console.log("black turn, white square but not bound by black - box bottom left")
        }

        //black - boxLeft
        if (event.target.boxLeft && event.target.boxLeft.fill === "white") {
            flip(event.target, "boxLeft", "black")
        } else {
            console.log("black turn, white square but not bound by black - box left")
        }

        //black - boxTopLeft
        if (event.target.boxTopLeft && event.target.boxTopLeft.fill === "white") {
            flip(event.target, "boxTopLeft", "black")
        } else {
            console.log("black turn, white square but not bound by black - box top left")
        }
    } else if (event.target.fill === false && whoseTurn === "white") {
        //white - boxTop
        if (event.target.boxTop && event.target.boxTop.fill === "black") {
            flip(event.target, "boxTop", "white")
        } else {
            console.log("white turn, black square but not bound by white - box top")
        }

        //white - boxTopRight
        if (event.target.boxTopRight && event.target.boxTopRight.fill === "black") {
            flip(event.target, "boxTopRight", "white")
        } else {
            console.log("white turn, black square but not bound by white - box top right")
        }

        //white - boxRight
        if (event.target.boxRight && event.target.boxRight.fill === "black") {
            flip(event.target, "boxRight", "white")
        } else {
            console.log("white turn, black square but not bound by white - box right")
        }

        //white - boxBottomRight
        if (event.target.boxBottomRight && event.target.boxBottomRight.fill === "black") {
            flip(event.target, "boxBottomRight", "white")
        } else {
            console.log("white turn, black square but not bound by white - box bottom right")
        }

        //white - boxBottom
        if (event.target.boxBottom && event.target.boxBottom.fill === "black") {
            flip(event.target, "boxBottom", "white")
        } else {
            console.log("white turn, black square but not bound by white - box bottom")
        }

        //white - boxBottomLeft
        if (event.target.boxBottomLeft && event.target.boxBottomLeft.fill === "black") {
            flip(event.target, "boxBottomLeft", "white")
        } else {
            console.log("white turn, black square but not bound by white - box bottom left")
        }

        //white - boxLeft
        if (event.target.boxLeft && event.target.boxLeft.fill === "black") {
            flip(event.target, "boxLeft", "white")
        } else {
            console.log("white turn, black square but not bound by white - box left")
        }

        //white - boxTopLeft
        if (event.target.boxTopLeft && event.target.boxTopLeft.fill === "black") {
            flip(event.target, "boxTopLeft", "white")
        } else {
            console.log("white turn, black square but not bound by white - box top left")
        }
    } else {
        console.log(`really hope we don't get here`)
    }

    if (whoseTurn === "black" && somethingFlipped) {
        console.log(`1. before whose turn ${whoseTurn}`)
        whoseTurn = "white";
        console.log(`1. after whose turn ${whoseTurn}`)
        turn++;
        somethingFlipped = false;
    } else if (whoseTurn === "white" && somethingFlipped) {
        console.log(`2. before whose turn ${whoseTurn}`)
        whoseTurn = "black";
        console.log(`2. after whose turn ${whoseTurn}`)
        turn++;
        somethingFlipped = false;
    } else {
        console.log(`some other scenario`)
    }
}

for (let i = 0; i < 64; i++) {
    // boxes[i].addEventListener('click', fillBlack);
    boxes[i].addEventListener('click', fill);
}

/*
let randNum = Math.floor(Math.random() * 64)
console.log(`randNum = ${ randNum } `);
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

