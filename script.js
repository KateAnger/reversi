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
    // don't need
    // if (!(event.target.boxTopLeft.fill)) {
    //     console.log(`no top left box filled`)
    // } else {
    //     console.log(`top left box filled`)
    // }

    // no border squares - get rid of
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

    // black, no white borders, or, white, not black borders - get rid of
    if (whoseTurn === "black" &&
        ((event.target.boxTop.fill === "white") ||
            (event.target.boxTopRight.fill === "white") ||
            (event.target.boxRight.fill === "white") ||
            (event.target.boxBottomRight.fill === "white") ||
            (event.target.boxBottom.fill === "white") ||
            (event.target.boxBottomLeft.fill === "white") ||
            (event.target.boxLeft.fill === "white") ||
            (event.target.boxTopLeft.fill === "white"))) {
        console.log(`semi-legit move`)
        // } else {
        //     console.log(`can't click here - black turn, no white borders`);
        //     return;
    }

    else if (whoseTurn === "white" &&
        ((event.target.boxTop.fill === "black") ||
            (event.target.boxTopRight.fill === "black") ||
            (event.target.boxRight.fill === "black") ||
            (event.target.boxBottomRight.fill === "black") ||
            (event.target.boxBottom.fill === "black") ||
            (event.target.boxBottomLeft.fill === "black") ||
            (event.target.boxLeft.fill === "black") ||
            (event.target.boxTopLeft.fill === "black"))) {
        console.log(`semi-legit move`)
    } else {
        console.log(`can't click here ${whoseTurn}`)
        return;
        // console.log(`can't click here - white turn, no black borders`);
        // return;
    }

    console.log(`${event.target.num} ${event.target.boxRight.fill} ${whoseTurn}`)

    /* 26/11 */
    let j = event.target;
    let k = event.target;

    //black - boxTop
    if (whoseTurn === "black" && event.target.fill === false && event.target.boxTop.fill === "white") {
        console.log(`in if 1`)
        while (j.boxTop.fill && j.boxTop.fill !== "black") {
            console.log(`in while 1`)
            j = j.boxTop;
        }

        if (j.boxTop.fill === "black") {
            console.log(`in if 2`)
            while (k !== j) {
                console.log(`in while 2`)
                k = k.boxTop;
                k.fill = "black";
                fillBlack(k);
            }
            fillBlack(event.target);
            //don't reassign yet - need to loop through all directions first before switching to "white"
            whoseTurn = "white";
            turn++
        }
    } else {
        console.log("black turn, white square but not bound by black - box top")
    }

    j = event.target;
    k = event.target;

    //black - boxTopRight
    if (whoseTurn === "black" && event.target.fill === false && event.target.boxTopRight.fill === "white") {
        console.log(`in if 1`)
        while (j.boxTopRight.fill && j.boxTopRight.fill !== "black") {
            console.log(`in while 1`)
            j = j.boxTopRight;
        }

        if (j.boxTopRight.fill === "black") {
            console.log(`in if 2`)
            while (k !== j) {
                console.log(`in while 2`)
                k = k.boxTopRight;
                k.fill = "black";
                fillBlack(k);
            }
            fillBlack(event.target);
            whoseTurn = "white";
            turn++;
        } else {
            console.log(`last square is not black`)
        }
    } else {
        console.log("black turn, white square but not bound by black - box top right")
    }

    j = event.target;
    k = event.target;

    //black - boxRight
    if (whoseTurn === "black" && event.target.fill === false && event.target.boxRight.fill === "white") {
        console.log(`in if 1`)
        while (j.boxRight.fill && j.boxRight.fill !== "black") {
            console.log(`in while 1`)
            j = j.boxRight;
        }

        if (j.boxRight.fill === "black") {
            console.log(`in if 2`)
            while (k !== j) {
                console.log(`in while 2`)
                k = k.boxRight;
                k.fill = "black";
                fillBlack(k);
            }
            fillBlack(event.target);
            whoseTurn = "white";
            turn++;
        } else {
            console.log(`last square is not black`)
        }
    } else {
        console.log("black turn, white square but not bound by black - box  right")
    }


    j = event.target;
    k = event.target;

    //white - boxTop
    if (whoseTurn === "white" && event.target.fill === false && event.target.boxTop.fill === "black") {
        console.log(`in if 1`)
        while (j.boxTop.fill && j.boxTop.fill !== "white") {
            console.log(`in while 1`)
            j = j.boxTop;
        }

        if (j.boxTop.fill === "white") {
            console.log(`in if 2`)
            while (k !== j) {
                console.log(`in while 2`)
                k = k.boxTop;
                k.fill = "white";
                fillWhite(k);
            }
            fillWhite(event.target);
            whoseTurn = "black";
            turn++
        }
    } else {
        console.log("white turn, black square but not bound by white - box top")
    }

    j = event.target;
    k = event.target;

    //white - boxTopRight
    if (whoseTurn === "white" && event.target.fill === false && event.target.boxTopRight.fill === "black") {
        console.log(`in if 1`)
        while (j.boxTopRight.fill && j.boxTopRight.fill !== "white") {
            console.log(`in while 1`)
            j = j.boxTopRight;
        }

        if (j.boxTopRight.fill === "white") {
            console.log(`in if 2`)
            while (k !== j) {
                console.log(`in while 2`)
                k = k.boxTopRight;
                k.fill = "white";
                fillWhite(k);
            }
            fillWhite(event.target);
            whoseTurn = "black";
            turn++;
        } else {
            console.log(`last square is not white`)
        }
    } else {
        console.log("white turn, black square but not bound by white - box top right")
    }

    //white - boxRight
    if (whoseTurn === "white" && event.target.fill === false && event.target.boxRight.fill === "black") {
        console.log(`in if 1`)
        while (j.boxRight.fill && j.boxRight.fill !== "white") {
            console.log(`in while 1`)
            j = j.boxRight;
        }

        if (j.boxRight.fill === "white") {
            console.log(`in if 2`)
            while (k !== j) {
                console.log(`in while 2`)
                k = k.boxRight;
                k.fill = "white";
                fillWhite(k);
            }
            fillWhite(event.target);
            whoseTurn = "black";
            turn++;
        } else {
            console.log(`last square is not white`)
        }
    } else {
        console.log("white turn, black square but not bound by white - box right")
    }

    /* end 26/11 */

    // old stuff #1 - moved to up above, below the empty borders check

    // if (!event.target.fill && whoseTurn === "black") {
    //     console.log(`turn number: ${turn}, in black whose turn ${whoseTurn}`)
    //     fillBlack(event.target)

    //     // old stuff #2

    //     whoseTurn = "white"
    //     turn++;

    // } else if (!event.target.fill && whoseTurn === "white") {
    //     console.log(`turn number: ${turn}, in white whose turn ${whoseTurn}`)
    //     fillWhite(event.target)
    //     whoseTurn = "black"
    //     turn++;
    // } else {
    //     console.log(`slipped through the cracks`)
    // }

    // if (event.target.fill === "black" || event.target.fill === false) {
    //     // event.target.style.backgroundColor = "white"
    //     // event.target.fill = "white";
    //     fillWhite(event.target)
    // } else {
    //     // event.target.style.backgroundColor = "black"
    //     // event.target.fill = "black";
    //     fillBlack(event.target)
    // }
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

