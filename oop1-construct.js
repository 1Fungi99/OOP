/*
1. Create a Class called WhyClass.
 This class should have one property, and two methods.
 The property is called "purpose", and stores a string.
 This string should clearly explain why classes are used in Object Oriented Programming.
 The first method is called explain().
 This method should print the contents stored in the purpose 'field' of the class.
 The second method is called pieces().
 This 2nd method should print out the various parts that are essential to building a class.
 Instantiate the class, and invoke the method so the results are showing in the console once this file is run.*/

//your code here...

class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    return this.purpose;
  }
  pieces() {
    return "Classes are made up of: definitions and methods";
  }
}

let p1 = new WhyClass(
  "To provide a much simpler and clearer syntax to create objects and deal with inheritance. Also reduces repetition"
);

console.log(p1.explain());
console.log(p1.pieces());

/*2. You are exploring the rainforests of the Amazon.
 You have observed many different types of wildlife on your excursion.
 To jog your memory, some different types of wildlife that you observed are found in the following:
    URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.
 Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class AmazonCreature {
  constructor(title, size, category) {
    this.title = title;
    this.size = size;
    this.category = category;
  }
  action1() {
    if (this.category == "bird") {
      return "The " + this.title + " loves flying!";
    } else if (this.category == "reptile") {
      return "The " + this.title + " is a scaly boy.";
    } else return "The " + this.title + " needs water to survive... SLURRP.";
  }
  action2() {
    return (
      "The " + this.title + " is a " + this.size + " " + this.category + "."
    );
  }
}

let pygmyMarmoset = new AmazonCreature("Pygmy Marmoset", "small", "mammal");
let capybara = new AmazonCreature("Capybara", "small", "mammal");
let hyacinthMacaw = new AmazonCreature("Hyacinth Macaw", "small", "bird");
let kingVulture = new AmazonCreature("King Vulture", "medium", "bird");
let greenAnaconda = new AmazonCreature("Green Anaconda", "large", "reptile");
let riverTurtle = new AmazonCreature(
  "South American River Turtle",
  "medium",
  "reptile"
);

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals*/

class Shape {
  //your code here...
  constructor(name, sides, radius, length, width) {
    this.name = name;
    this.radius = radius;
    this.sides = sides;
    this.length = length;
    this.width = width;
  }
  calcPerimeter() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (this.name === "circle") {
      return "Perimeter of given "+this.name + " is "+(2 * Math.PI * this.radius).toFixed(2) + " units";
    } else {
      return "Perimeter of given "+this.name + " is "+this.sides.reduce(reducer).toFixed(2) + " units";
    }
  }
  calcArea() {
    if (this.name === "circle") {
      return `Area of ${this.name} = ${(Math.PI * this.radius ** 2).toFixed(2)} units`;
    } else if (this.name === "triangle") {
      // Heron's formula to find area of a triangle from 3 given sides
      // area = 0.25 * √((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c))
      // Start
      return `Area of ${this.name} = ${(
        0.25 *
        Math.sqrt(
          (this.sides[0] + this.sides[1] + this.sides[2]) *
            (-this.sides[0] + this.sides[1] + this.sides[2]) *
            (this.sides[0] - this.sides[1] + this.sides[2]) *
            (this.sides[0] + this.sides[1] - this.sides[2])
        )
      ).toFixed(2)} units`;
      // End
    } else if (this.name === "rectangle") {
      return `Area of ${this.name} = ${(this.length * this.width).toFixed(2)} units`; // Area = length * width
    } else if (this.name === "octagon") {
      return `Area of ${this.name} = ${
        (2 * this.length ** 2 * (1 + Math.sqrt(2))).toFixed(2) // Area = 2 × s2 × ( 1 + √(2) )
      } units`;
    } else if (this.name === "hexagon") {
      return `Area of ${this.name} = ${
        (3*Math.sqrt(3) * this.length * this.length / 2).toFixed(2) // Area = (3 * √3 s2)/ 2
      } units`;
    } else {
      return `Area of ${this.name} = ${
        (
          (1 / 4) *
          Math.sqrt(5*(5 + 2 * Math.sqrt(5))) *
          this.length ** 2
        ).toFixed(2) //Area = 1/4 x √(5(5 + 2 x √(5))) x s2
      } units`;
    }
  }
}

let triangle = new Shape("triangle",[4,7,7], null, null ,null);
console.log(triangle.calcPerimeter())
console.log(triangle.calcArea())

let circle = new Shape("circle", null,5,null,null)
console.log(circle.calcPerimeter())
console.log(circle.calcArea())

let rectangle = new Shape("rectangle",[4,8,4,8],null,4,8)
console.log(rectangle.calcPerimeter())
console.log(rectangle.calcArea())


/*********************************************** 
Bonus Exercises:

/*4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.
Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  
Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  
The dimensions for the triangle are already provided for you in the triangle object literal.*/

let pentagon = new Shape("pentagon",[4,4,4,4,4],null,4,4)
console.log(pentagon.calcPerimeter())
console.log(pentagon.calcArea())

let hexagon = new Shape("hexagon", [6,6,6,6,6,6],null, 6,6)
console.log(hexagon.calcPerimeter())
console.log(hexagon.calcArea())

let octagon = new Shape("octagon", [8,8,8,8,8,8,8,8], null, 8,8)
console.log(octagon.calcPerimeter())
console.log(octagon.calcArea())

/*5. Below is a class Earth.  
It is instantiated with a earth 'instance'.  
Because there is only 1 known earth, we don't want multiple instances of earth.  
Modify the class so the properties are usable WITHOUT instantiating the class.*/

class Planet {
  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Planet("earth", 3);
console.log(earth);
