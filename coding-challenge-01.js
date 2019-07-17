// ES5

/**
 * Create a Person constructor
 * @param {string} name 
 * @param {number} mass 
 * @param {number} height 
 */
function Person(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
}
Person.prototype.calculateBMI = function () {
    return this.mass / (this.height * this.height);
}

var Mark = new Person('Mark', 200, 72);
var John = new Person('John', 180, 70);
var markBMIHigher = Mark.calculateBMI() > John.calculateBMI();

console.log(`Is Mark's BMI higher than John's ${markBMIHigher}`);

// ES6
class Person {
    /**
     * 
     * @param {string} name 
     * @param {number} mass 
     * @param {number} height 
     */
    constructor(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    }
    calculateBMI() {
        return this.mass / (this.height * this.height);
    }
}

var Mark = new Person('Mark', 200, 72);
var John = new Person('John', 180, 70);
var markBMIHigher = Mark.calculateBMI() > John.calculateBMI();

console.log(`Is Mark's BMI higher than John's ${markBMIHigher}`);