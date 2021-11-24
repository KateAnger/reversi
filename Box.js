class Box {
    constructor(boxNumber, boxName, colour, filled, boxTop, boxRight, boxBottom, boxRight, boxTopRight, boxBottomRight, boxBottomLeft, boxTopLeft) {
        this.boxNumber = boxNumber;
        this.boxName = boxName;
        this.colour = colour;
        this.filled = filled
        //finish from here;
        this.next = null;
        this.previous = null;
        //console.log(`Created: 
        //${this.squareNumber}. ${this.name}
        //Value - £${this.value}
        //Colour - ${this.colour}
        //Property type - ${this.propertyType}`)
    }

    addNext(next) {
        this.next = next;
        //console.log(`Next property of ${this.name} is ${this.next.name}`);

    }

    addPrevious(previous) {
        this.previous = previous;
        //console.log(`Previous property of ${this.name} is ${this.previous.name}`);
    }

}

module.exports = Node;