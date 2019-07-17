//  ES5

/**
 * Super class
 * @param {string} name 
 * @param {number} yearOfBirth 
 * @param {string} job 
 */
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

/**
 * Sub-class of Person
 * @param {string} name 
 * @param {number} yearOfBirth 
 * @param {string} job 
 * @param {number} olympicGames 
 * @param {number} medals 
 */
var Athlete = function (name, yearOfBirth, job, olympicGames, medals) {
    //  Pass the received arguements from the primary class into the call method
    //  Sets the properties to the new athlete object
    Person.call(this, name, yearOfBirth, job) {
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
}

/**
 *  Set the prototype
 */
Athlete.prototype = Object.create(Person.prototype);

var john = new Athlete('John', 1990, 'swimmer', 3, 10);

//  ES6

class Person {
    /**
     * Super class
     * @param {string} name 
     * @param {number} yearOfBirth 
     * @param {string} job 
     */
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete extends Person {
    /**
     * Sub-class
     * @param {string} name comes from super class
     * @param {number} yearOfBirth comes from super class
     * @param {string} job comes from super class
     * @param {number} olympicGames created on sub-class
     * @param {number} medals created on sub-class
     */
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
}

const john = new Athlete('John', 1990, 'swimmer', 3, 10);