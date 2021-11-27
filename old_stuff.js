// old stuff #1

if (whoseTurn === "black" &&
((event.target.boxTop.fill === "white") ||
    (event.target.boxTopRight.fill === "white") ||
    (event.target.boxRight.fill === "white") ||
    (event.target.boxBottomRight.fill === "white") ||
    (event.target.boxBottom.fill === "white") ||
    (event.target.boxBottomLeft.fill === "white") ||
    (event.target.boxLeft.fill === "white") ||
    (event.target.boxTopLeft.fill === "white"))) {
console.log(`legit move`)
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
console.log(`legit move`)
} else {
console.log(`can't click here ${whoseTurn}`)
return;
// console.log(`can't click here - white turn, no black borders`);
// return;
}


// end old stuff #1

// old stuff #2

let i = event.target;
console.log(`before while loop, i.name = ${i.name}`)

//black - boxTop
console.log(`before boxTop i.name = ${i.name}`)
while (i.boxTop.fill && i.boxTop.fill !== "black") {
    console.log(`in while loop - black turn - i.boxTop ${i.boxTop}`)
    i = i.boxTop;
    i.fill = "black"
    fillBlack(i)
}

//black - boxTopRight
i = event.target;
console.log(`before boxTopRight i.name = ${i.name}`)
while (i.boxTopRight.fill && i.boxTopRight.fill !== "black") {
    console.log(`in while loop - black turn - i.boxTopRight ${i.boxTopRight}`)
    i = i.boxTopRight;
    i.fill = "black"
    fillBlack(i)
}

//black - boxRight
i = event.target;
console.log(`before boxRight i.name = ${i.name}`)
while (i.boxRight.fill && i.boxRight.fill !== "black") {
    console.log(`in while loop - black turn - i.boxRight ${i.boxRight}`)
    i = i.boxRight;
    i.fill = "black"
    fillBlack(i)
}

//black - boxBottomRight
i = event.target;
console.log(`before boxBottomRight i.name = ${i.name}`)
while (i.boxBottomRight.fill && i.boxBottomRight.fill !== "black") {
    console.log(`in while loop - black turn - i.boxBottomRight ${i.boxBottomRight}`)
    i = i.boxBottomRight;
    i.fill = "black"
    fillBlack(i)
}

//black - boxBottom
i = event.target;
console.log(`before boxBottom i.name = ${i.name}`)
while (i.boxBottom.fill && i.boxBottom.fill !== "black") {
    console.log(`in while loop - black turn - i.boxBottom ${i.boxBottom}`)
    i = i.boxBottom;
    i.fill = "black"
    fillBlack(i)
}

//black - boxBottomLeft
i = event.target;
console.log(`before boxBottomLeft i.name = ${i.name}`)
while (i.boxBottomLeft.fill && i.boxBottomLeft.fill !== "black") {
    console.log(`in while loop - black turn - i.boxBottomLeft ${i.boxBottomLeft}`)
    i = i.boxBottomLeft;
    i.fill = "black"
    fillBlack(i)
}

//black - boxLeft
i = event.target;
console.log(`before boxLeft i.name = ${i.name}`)
while (i.boxLeft.fill && i.boxLeft.fill !== "black") {
    console.log(`in while loop - black turn - i.boxLeft ${i.boxLeft}`)
    i = i.boxLeft;
    i.fill = "black"
    fillBlack(i)
}

//black - boxTopLeft
i = event.target;
console.log(`before boxTopLeft i.name = ${i.name}`)
while (i.boxTopLeft.fill && i.boxTopLeft.fill !== "black") {
    console.log(`in while loop - black turn - i.boxTopLeft ${i.boxTopLeft}`)
    i = i.boxTopLeft;
    i.fill = "black"
    fillBlack(i)
}

// end old stuff #2