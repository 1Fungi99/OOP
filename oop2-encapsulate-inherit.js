/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    - Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".
        Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  
        Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 
*/
//your code here...

class Book {
  constructor(_author, _publisher) {
    this.author = _author;
    this.publisher = _publisher;
  }

  get getAuthor() {
    return this.author;
  }
  get getPublisher() {
    return this.publisher;
  }

  set setRating(rating) {
    this.rating = rating;
  }
  set setAuthor(author) {
    this.author = author;
  }
}

class Author {
  constructor(_name, _books) {
    this.name = _name;
    this.books = _books;
  }

  get getName() {
    return this.name;
  }
  get getBooks() {
    return this.books;
  }

  set setRating(rating) {
    this.rating = rating;
  }
  set setPublisher(publisher) {
    this.publisher = publisher;
  }
}

class Publisher {
  constructor(_author, _books) {
    this.author = _author;
    this.books = _books;
  }

  get getAuthor() {
    return this.author;
  }
  get getBooks() {
    return this.books;
  }

  set setRating(rating) {
    this.rating = rating;
  }
  set setAuthor(author) {
    this.author = author;
  }
}

class Review {
  constructor(_rating, _user) {
    this.rating = _rating;
    this.user = _user;
  }
  get getUser() {
    return this.user;
  }
  get getRating() {
    return this.rating;
  }

  set setPublisher(publisher) {
    this.publisher = publisher;
  }
  set setAuthor(author) {
    this.author = author;
  }
}
/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a company name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 
        - 1 CEO,
        - 1 Manager,
        - 1 Secretary,
        - 2 Engineers,
        - 1 Financial Officer,
        - 1 Janitor,
        - 1 Marketer,
        - 1 HR Personnel,
        - 1 Lawyer.
            
        Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/

//your code here...
class Umbrella {
  constructor(parentOrg = "Allegis Group") {
    this.parentOrg = parentOrg;
  }
}

class Company extends Umbrella {
  constructor(parentOrg, name, numOfEmployees) {
    super(parentOrg);
    this.name = name;
    this.numOfEmployees = numOfEmployees;
  }
}

class Site extends Company {
  constructor(name, location) {
    super(name);
    this.location = location;
  }
}

class Employee extends Company {
  constructor(parentOrg, name, numOfEmployees, employeeName, jobTitle, salary) {
    super(parentOrg, name, numOfEmployees);
    this.employeeName = employeeName;
    this.jobTitle = jobTitle;
    this.salary = salary;
  }
}

let allegis = new Umbrella("Allegis Group");

let TEKSystems = new Company("Allegis Group", "TEKSystems", 30000);
let AeroTek = new Company("Allegis Group", "AeroTek", 10000);
let AstonGroup = new Company("Allegis Group", "Aston Group", 1000);

let TEKSystemsSite = new Site("TEKSystems", "Dallas, TX");
let AeroTekSite = new Site("AeroTek", "Hanover, MD");
let AstonGroupSite = new Site("Aston Group", "unknown");

let John = new Employee(
  "Allegis Group",
  "TEKSystems",
  30000,
  "John",
  "CEO",
  200000
);
let George = new Employee(
  "Allegis Group",
  "TEKSystems",
  30000,
  "George",
  "Manager",
  100000
);
let Lina = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Lina",
  "Secretary",
  75000
);
let Carter = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Carter",
  "Engineer",
  70000
);
let Caitlyn = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Caitlyn",
  "Engineer",
  70000
);
let Barbra = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Barbra",
  "Financial Officer",
  80000
);
let Diego = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Diego",
  "Janitor",
  30000
);
let Ana = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Ana",
  "Marketer",
  60000
);
let Martin = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Ana",
  "HR Personnel",
  65000
);
let Xavier = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Xavier",
  "Lawyer",
  120000
);

/*
/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
