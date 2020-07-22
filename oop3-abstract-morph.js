/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated.
Find a way to prevent this class from being instantiated with an instance.
In the Creature class, include two abstract methods:  move(), and act().
These methods are NOT allowed to be invoked from the Abstract class, so 
throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), 
which are found on the abstract Creature class. 
In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  
Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  constructor() {
    if (this.constructor === Creature) {
      throw new Error(`Unable to instantiate a new Abstract Class Creature`);
    }
  }
  move = () => {
    throw new Error(`Cannot invoke from an Abstract Class`);
  };

  act = () => {
    throw new Error(`Cannot invoke from an Abstract Class`);
  };
}

class Human extends Creature {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  move = () => {
    const directions = ["north", "south", "east", "west"];
    let direction = directions[Math.floor(Math.random() * 4)];
    return `${this.name} is moving ${direction}`;
  };
  act = () => {
    return `${this.name} is gathering supplies.`;
  };
}
class Bird extends Creature {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  move = () => {
    const directions = ["north", "south", "east", "west"];
    let direction = directions[Math.floor(Math.random() * 4)];
    return `${this.name} is flying ${direction}`;
  };
  act = () => {
    return `${this.name} is eyeing the forest, searching for food.`;
  };
}
class Reptile extends Creature {
  constructor(name, habitat) {
    super();
    this.name = name;
    this.habitat = habitat;
  }
  move = () => {
    const directions = ["north", "south", "east", "west"];
    let direction = directions[Math.floor(Math.random() * 4)];
    return `${this.name} is slithering ${direction}`;
  };
  act = () => {
    return `${this.name} is hiding in wait for prey`;
  };
}
/* TEST ========================================
let justin = new Human("Justin", 21);
console.log(justin.move());
console.log(justin.act());
let george = new Reptile("George", 21);
console.log(george.move());
console.log(george.act());
let ana = new Bird("ana", 21);
console.log(ana.move());
console.log(ana.act());
============================================= */

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  
For the Teacher method, a set of methods have already been set up.  
For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat = () => {
    console.log(this.name + " is eating");
  };

  sleep = () => {
    console.log(this.name + " is sleeping");
  };

  code = () => {
    console.log(this.name + " is coding");
  };

  repeat = () => {
    console.log(this.name + " is repeating the above steps, yet another time");
  };

  explain = () => {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      "this explain method should contain an explanation on what you had to do to get the correct functions to work, and the reasoning behind what you did."
    );
  };
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat = () => {
    console.log(this.name + " loves to teach before eating");
  };

  sleep = () => {
    console.log(this.name + " sleeps after preparing the lesson plan");
  };

  code = () => {
    console.log(this.name + " codes first, then teaches it the next day.");
  };

  repeat = () => {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  };

  explain = () => {
    console.log(
      "This portion of the Teacher Class Extension just needed a new Method called `explain`"
    );
  };
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - `${this.name} studies, then eats`
  //sleep method should print out, `${this.name} studies coding so much, that they dream about it in their sleep`
  //code method should print out, `${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`
  //repeat method should print out, `${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`
  constructor(name) {
    super(name);
    this.name = name;
  }
  eat = () => {
    console.log(`${this.name} studies, then eats`);
  };
  sleep = () => {
    console.log(
      `${this.name} studies coding so much, that they dream about it in their sleep`
    );
  };
  code = () => {
    console.log(
      `${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`
    );
  };
  repeat = () => {
    console.log(
      `${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`
    );
  };
  explain = () => {
    console.log(
      `The Student class extension needed each method from the parent class "Person" to be overloaded`
    );
  };
}

/* TEST ========================================
const teacher = new Teacher("Dr. Teacher");
const student = new Student("Pupil Student");

teacher.explain();
teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.explain();
student.eat();
student.sleep();
student.code();
student.repeat();
============================================= */

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare(food1, food2, food3) {
    console.log(`The cook is cooking ${food1}, ${food2}, and ${food3}`);
  }

  // prepare = () => {
  //   console.log("The cook is cooking");
  // };

  explain = () => {
    console.log(
      "Delete the second prepare function so it doesn't take priority"
    );
  };
}

/* TEST ========================================
const cook = new Cook();
cook.prepare("turkey", "salami", "pizza");
cook.explain();
============================================= */
