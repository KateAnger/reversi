// const Box = require('./Box');

// let box28 = document.getElementById('box28');
// let box29 = document.getElementById('box29');

// const box1 = { num: "1", clicked: true, element: document.getElementById('box1'), boxRight: null }
// const box2 = { num: "2", clicked: true, element: document.getElementById('box2'), boxRight: null }

//new stuff
// let boxes = [{}];
let boxes = [];

for (let i = 0; i < 64; i++) {
    let box = document.getElementById(`box${i + 1}`);
    box.num = i + 1;
    box.name = `box${i + 1}`
    box.fill = false;
    // box.boxRight = 'n/a';
    // box.boxLeft = 'n/a';
    boxes.push(box)
}

//box top for all rows
for (let j = 8; j < 64; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 8; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxTop = boxes[i - 8]
    }
}

//box top right - centre boxes
for (let j = 9; j < 55; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 6; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxTopRight = boxes[i - 7]
    }
}

//box top right - 1st column
for (let i = 8; i < 57; i += 8) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxTopRight = boxes[i - 7]
}

//box top right - bottom row
for (let i = 57; i < 63; i++) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxTopRight = boxes[i - 7]
}

//box right for all rows
for (let j = 0; j < 57; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 7; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxRight = boxes[i + 1]
    }
}

//box bottom right - centre boxes
for (let j = 9; j < 55; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 6; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxBottomRight = boxes[i + 9]
    }
}

//box bottom right - top row
for (let i = 0; i < 7; i++) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxBottomRight = boxes[i + 9]
}

//box bottom right - 1st row
for (let i = 8; i < 49; i += 8) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxBottomRight = boxes[i + 9]
}

//box bottom for all rows
for (let j = 0; j < 56; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 8; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxBottom = boxes[i + 8]
    }
}

//box bottom left - centre boxes
for (let j = 9; j < 55; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 6; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxBottomLeft = boxes[i + 7]
    }
}

//box bottom left - 1st row
for (let i = 1; i < 8; i++) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxBottomLeft = boxes[i + 7]
}

//box bottom left - last column
for (let i = 15; i < 56; i += 8) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxBottomLeft = boxes[i + 7]
}

//box left for all rows
for (let j = 1; j < 58; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 7; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxLeft = boxes[i - 1]
    }
}

//box top left - centre boxes
for (let j = 9; j < 55; j += 8) {
    // console.log(`j loop = ${j}`)
    for (let i = j; i < j + 6; i++) {
        // for (let i = 0; i < 0 + 7; i++) {
        // console.log(`i loop = i ${i} j ${j}`);
        boxes[i].boxTopLeft = boxes[i - 9]
    }
}

//box top left - last column
for (let i = 15; i < 64; i += 8) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxTopLeft = boxes[i - 9]
}

//box top left - bottom row
for (let i = 57; i < 63; i++) {
    // for (let i = 0; i < 0 + 7; i++) {
    // console.log(`i loop = i ${i} j ${j}`);
    boxes[i].boxTopLeft = boxes[i - 9]
}


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
    event.target.style.borderRadius = '50%';
    event.target.style.border = '0px';
    if (event.target.fill === "black" || event.target.fill === false) {
        event.target.style.backgroundColor = "white"
        event.target.fill = "white";
    } else {
        event.target.style.backgroundColor = "black"
        event.target.fill = "black";
    }

}

for (let i = 0; i < 64; i++) {
    // boxes[i].addEventListener('click', fillBlack);
    boxes[i].addEventListener('click', fill);
}

let randNum = Math.floor(Math.random() * 64)
console.log(`randNum = ${randNum}`);
boxes[randNum].click();

if (boxes[randNum].boxTop) {
    boxes[randNum].boxTop.click();
}

if (boxes[randNum].boxTopRight) {
    boxes[randNum].boxTopRight.click();
}

if (boxes[randNum].boxRight) {
    boxes[randNum].boxRight.click();
}

if (boxes[randNum].boxBottomRight) {
    boxes[randNum].boxBottomRight.click();
}

if (boxes[randNum].boxBottom) {
    boxes[randNum].boxBottom.click();
}

if (boxes[randNum].boxBottomLeft) {
    boxes[randNum].boxBottomLeft.click();
}

if (boxes[randNum].boxLeft) {
    boxes[randNum].boxLeft.click();
}

if (boxes[randNum].boxTopLeft) {
    boxes[randNum].boxTopLeft.click();
}

