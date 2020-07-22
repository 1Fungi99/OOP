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
  #author;
  #publisher;
  constructor(author, publisher) {
    this.#author = author;
    this.#publisher = publisher;
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
  #name;
  #books;
  constructor(name, books) {
    this.#name = name;
    this.#books = books;
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
  #author;
  #books;
  constructor(author, books) {
    this.#author = author;
    this.#books = books;
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
  #rating;
  #user;
  constructor(rating, user) {
    this.#rating = rating;
    this.#user = user;
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
  constructor(
    parentOrg = "Allegis Group",
    numOfChildCompanies = 15,
    totalClients = 100000
  ) {
    this.parentOrg = parentOrg;
    this.numOfChildCompanies = numOfChildCompanies;
    this.totalClients = totalClients;
  }

  companyRestructure() {
    console.log(`${this.parentOrg} wants to restructure their companies`);
  }
  covidResponse() {
    console.log(
      `${this.parentOrg} needs to respond to the recent COVID-19 pandemic`
    );
  }
}

class Company extends Umbrella {
  constructor(parentOrg, name, numOfEmployees, numOfChildCompanies) {
    super(parentOrg, numOfChildCompanies);
    this.name = name;
    this.numOfEmployees = numOfEmployees;
  }

  planEvent() {
    console.log(`${this.name} wants to plan a company wide celebration!`);
  }
  hostEvent() {
    console.log(
      `${this.name} is hosting a ${this.numOfEmployees} employee event!`
    );
  }
}

class Site extends Company {
  constructor(
    parentOrg,
    name,
    numOfEmployees,
    location,
    buildingCondition,
    numOfBuildings,
    numOfChildCompanies
  ) {
    super(parentOrg, name, numOfEmployees, numOfChildCompanies);
    this.location = location;
    this.buildingCondition = buildingCondition;
    this.numOfBuildings = numOfBuildings;
  }

  buildingRestoration() {
    console.log(
      `${this.name} needs their building restored at their ${this.location} branch`
    );
  }
  parkingLotExpansion() {
    console.log(
      `${this.name} is expanding their parking lot to accommodate more employees!`
    );
  }
}

class Employee extends Company {
  constructor(
    parentOrg,
    name,
    numOfEmployees,
    employeeName,
    jobTitle,
    salary,
    hoursPerWeek,
    yearsWorked
  ) {
    super(parentOrg, name, numOfEmployees);
    this.employeeName = employeeName;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.hoursPerWeek = hoursPerWeek;
    this.yearsWorked = yearsWorked;
  }

  planMeeting() {
    console.log(`${this.employeeName} has planned a meeting for this week!`);
  }
  attendMeeting() {
    console.log(`${this.employeeName} is attending a meeting!`);
  }
}

let allegis = new Umbrella("Allegis Group");

let TEKSystems = new Company("Allegis Group", "TEKSystems", 30000);
let AeroTek = new Company("Allegis Group", "AeroTek", 10000);
let AstonGroup = new Company("Allegis Group", "Aston Group", 1000);

let TEKSystemsSite = new Site(
  "Allegis Group",
  "TEKSystems",
  30000,
  "Dallas, TX",
  "good",
  7
);
let AeroTekSite = new Site(
  "Allegis Group",
  "AeroTek",
  10000,
  "Hanover, MD",
  "avg",
  2
);
let AstonGroupSite = new Site(
  "Allegis Group",
  "Aston Group",
  1000,
  "unknown",
  "bad",
  3
);

let John = new Employee(
  "Allegis Group",
  "TEKSystems",
  30000,
  "John",
  "CEO",
  200000,
  40,
  15
);
let George = new Employee(
  "Allegis Group",
  "TEKSystems",
  30000,
  "George",
  "Manager",
  100000,
  35,
  10
);
let Lina = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Lina",
  "Secretary",
  75000,
  35,
  5
);
let Carter = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Carter",
  "Engineer",
  70000,
  45,
  6
);
let Caitlyn = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Caitlyn",
  "Engineer",
  70000,
  50,
  6
);
let Barbra = new Employee(
  "Allegis Group",
  "AeroTek",
  10000,
  "Barbra",
  "Financial Officer",
  80000,
  50,
  7
);
let Diego = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Diego",
  "Janitor",
  30000,
  50,
  2
);
let Ana = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Ana",
  "Marketer",
  60000,
  40,
  1
);
let Martin = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Ana",
  "HR Personnel",
  65000,
  30,
  5
);
let Xavier = new Employee(
  "Allegis Group",
  "Aston Group",
  1000,
  "Xavier",
  "Lawyer",
  120000,
  120,
  6
);

/*
/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relevant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relevant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
