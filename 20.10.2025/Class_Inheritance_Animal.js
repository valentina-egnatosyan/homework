// 🧩 5. Animal → Dog Inheritance — Task Requirements
// Task:
//  Create two classes: Animal and Dog, where Dog inherits from Animal.
// Requirements:
// The Animal class should have a constructor that takes one parameter name.


// It should have a method speak() that prints <name> makes a sound.


// The Dog class should extend Animal and override the speak() method to print <name> barks.


// Create an instance of Dog and call its speak() method.

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
    console.log(`${this.name} makes a sound`);
}
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

const myDog = new Dog("Mike");
myDog.speak();
