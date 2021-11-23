// const Box = require('./Box');

// let box28 = document.getElementById('box28');
// let box29 = document.getElementById('box29');

// const box1 = { num: "1", clicked: true, element: document.getElementById('box1'), boxRight: null }
// const box2 = { num: "2", clicked: true, element: document.getElementById('box2'), boxRight: null }

//new stuff
// let boxes = [{}];


// for (let i = 0; i < 5; i++) {
//     let tempDiv = `div${i + 1}`;
//     let tempBox = `box${i + 1}`;
//     console.log(`${tempDiv}: ${tempBox}`)
//     tempDiv = document.getElementById(`${tempBox}`);
//     tempDiv.message = `created ${i + 1}`;
//     boxes.push[tempDiv]
//     console.log(`inside ${tempDiv.message}`)
// }

// // boxes[0].message = `created 1`;
// console.log(boxes[0].message)

const div1 = document.getElementById('box1')
const div2 = document.getElementById('box2')
const div3 = document.getElementById('box3')
const div4 = document.getElementById('box4')
const div5 = document.getElementById('box5')
const div64 = document.getElementById('box64')

div1.num = 1;
div2.num = 2;
div3.num = 3;
div4.num = 4;
div5.num = 5;
div1.clicked = false;
div2.clicked = false;
div3.clicked = false;
div4.clicked = false;
div5.clicked = false;
div1.boxRight = null;
div2.boxRight = null;
div3.boxRight = null;
div4.boxRight = null;
div5.boxRight = null;
div1.name = "div-box1";
div2.name = "div-box2";
div3.name = "div-box3";
div4.name = "div-box4";
div5.name = "div-box5";


let box28 = { clicked: false, element: document.getElementById('box28') }
let box29/*data*/ = { clicked: "no", element: document.getElementById('box29') }

// box1.boxRight = box2
div1.boxRight = div2;
div2.boxRight = div3;
div3.boxRight = div4;
div4.boxRight = div5;

// console.log(`box1.num ${box1.num}`)
// console.log(`box1.boxRight.num ${box1.boxRight.num}`)

// let box28fill = document.getElementById('box28fill');
// let box29fill = document.getElementById('box29fill');

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


function fillWhite(event) {
    event.target.style.backgroundColor = "white";
    event.target.style.borderRadius = '50%';
    event.target.style.border = '0px';
    // event.target.innerHTML = `${box28data.clicked}`;
    // event.target.textAlign = 'center';
    if (!event.target.clicked) {
        // console.log(event.target.clicked)
        event.target.style.backgroundColor = "black"
        event.target.clicked = true;
    } else {
        event.target.style.backgroundColor = "white"
        event.target.clicked = false;
    }

    console.log(`event.target.num = ${event.target.num}`)
    console.log(`this.num = ${this.num}`)

    console.log(`in fillWhite with event.target.boxRight.num = ${event.target.boxRight.num} `)
    console.log(`${event.target.boxRight.name}`)
    event.target.boxRight.click();
    event.target.boxRight.boxRight.click();

}

function fillBlack(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.borderRadius = '50%';
    event.target.style.border = '0px';
    if (!event.target.clicked) {
        event.target.style.backgroundColor = "white"
        event.target.clicked = true;
    } else {
        event.target.style.backgroundColor = "black"
        event.target.clicked = false;
    }

}

// const fillNeighbour = () => {

//     box1.boxRight.element.style.backgroundColor = "red";

// }

div1.addEventListener('click', fillWhite);
div2.addEventListener('click', fillBlack);
div3.addEventListener('click', fillWhite);
div64.addEventListener('click', fillBlack);
// box1.element.addEventListener('click', fillWhite);
// box1.element.addEventListener('click', function () {
//     // box1.boxRight.element.style.backgroundColor = "red";
//     console.log(`box1.num = ${box1.num}`)
//     console.log(`box1.boxRight = ${box1.boxRight}`)
//     console.log(`box1.boxRight.num = ${box1.boxRight.num}`)
//     console.log(`box1.boxRight.element = ${box1.boxRight.element}`)
//     // fillWhite(box1.boxRight.element)
//     fillWhite(document.getElementById('box2'));
// });
// box2.element.addEventListener('click', fillBlack);

box28.element.addEventListener('click', fillWhite);
box29.element.addEventListener('click', fillBlack);
// box36.element.addEventListener('click', fillBlack);
// box37.element.addEventListener('click', fillWhite);

// box28fill.style.backgroundColor = "white";dir

