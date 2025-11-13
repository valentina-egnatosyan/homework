// 1. Rectangle Class — Task Requirements
// Task:
//  Create a class called Rectangle that represents a rectangle.
// Requirements:
// The class must have a constructor with two parameters: width and height.


// Add a method area() that returns the rectangle’s area.


// Add a method perimeter() that returns the rectangle’s perimeter.


// Create one rectangle object and print its area and perimeter in the console.


class Rectangle {
    constructor (witdh, height) {
        this.witdh = witdh;
        this.height = height;
    }


    area() {
        return this.witdh * this.height;
    }

     perimeter() {
        return 2 * (this.witdh * this.height);
     }
}

const myRectangle  = new Rectangle (1,1);
console.log("Area", myRectangle.area());
console.log("Perimeter", myRectangle.perimeter());
