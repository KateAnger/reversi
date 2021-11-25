// export function initBoard() {

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
// }

function fillBlack(box) {
    // console.log(`inside fillBlack`)
    box.style.borderRadius = '50%';
    box.style.border = '0px';
    box.style.backgroundColor = "black"
    box.fill = "black";
}

function fillWhite(box) {
    box.style.borderRadius = '50%';
    box.style.border = '0px';
    box.style.backgroundColor = "white"
    box.fill = "white";
}

function startSquares() {
    fillBlack(boxes[27])
    fillWhite(boxes[28])
    fillWhite(boxes[35])
    fillBlack(boxes[36])
}

startSquares();
