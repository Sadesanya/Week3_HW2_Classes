// // OOP: Classes

// // Let's create shaped objects



// // Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// // Write a function called rectangle_area that returns the area of the given object.
// // Write a function total_sides that returns the number of sides of the object.

class Rectangle {
    constructor(length,width){

        this.length = length;
        this.width = width;

    }

    rectangleArea(){
        return this.length * this.width
        
    }

    totalSides(){
        return 2 * (this.length+this.width )
    }

    displayRectangle(){
        let area = this.rectangleArea()
        let perimeter = this.totalSides()
        let recContainer = document.querySelector ('.rectangle')
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `This is a rectangle, the area is ${area}, the perimeter is ${perimeter}.`
        recContainer.append(paragraph);
    }
    
}

let reg1 = new Rectangle (5,6)
reg1.displayRectangle();
console.log(reg1.rectangleArea())
console.log(reg1.totalSides())

// // Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// // Write a function called square_area that returns the area of the given object.
// // Write a function total_sides that returns the number of sides of the object.


class Square {

    constructor(side){
    
    this.side = side;

    }

    squareArea(){
        return (this.side * this.side )
    }

    squareSides(){
        return (this.side + this.side + this.side + this.side)
    }

    displaySquare(){

        let area1 = this.squareArea();
        let perimeter1 = this.squareSides();
        let squareContainer = document.querySelector('.square');
        let sentence = document.createElement('p');
        sentence.innerHTML = `This is a square, the perimeter is ${perimeter1} and the area is ${area1}.`;
        squareContainer.append(sentence);
        
    }
    

}




let s1 = new Square (5);
console.log(s1.squareArea());
console.log(s1.squareSides());
s1.displaySquare();


// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object. 
// Write a function total_sides that returns the number of sides of the object.

class Circle {
    constructor(radius){

        this.radius = radius
    }

    circumference(){
        return Math.trunc(2 * Math.PI * this.radius)
    }

    circleArea(){
        return Math.trunc((this.radius * this.radius) * Math.PI)
    }

    displayCircle(){
        let circ = this.circumference();
        let cirArea = this.circleArea();
        let circleContainer = document.querySelector('.circle');
        let phrase = document.createElement('p');
        phrase.innerText = `This is a circle, the circle circumference is ${circ} and the area is ${cirArea}.`;
        circleContainer.append(phrase);

    }


}


let circle1 = new Circle (30);
circle1.displayCircle();

console.log(circle1.circumference())