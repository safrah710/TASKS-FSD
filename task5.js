//1 question

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
const movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "R"),
    new Movie("Movie 3", "Studio C", "PG"),
    new Movie("Movie 4", "Studio D", "PG-13"),
    new Movie("Movie 5", "Studio E", "PG")
];
const pgMovies = Movie.getPG(movies);
console.log(pgMovies); 
//____________________________________________________________________________________________________________________________________
//2 question
class Circle {
    constructor(radius, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle: radius=${this.radius}, color=${this.color}`;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}


const myCircle = new Circle(5, "blue");
console.log(myCircle.toString()); 
console.log("Area:", myCircle.getArea()); 
console.log("Circumference:", myCircle.getCircumference()); 
myCircle.setRadius(7);
myCircle.setColor("green");
console.log(myCircle.toString()); 
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference()); 
//_________________________________________________________________________________________________________________________________
//3 question
function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    this.greet = function() {
        var prefix = this.gender === 'male' ? 'Mr.' : 'Ms.';
        console.log('Hello, ' + prefix + ' ' + this.lastName + '.');
    };
}
var john = new Person('John', 'Doe', 30, 'male', ['reading', 'swimming']);
console.log(john.getFullName()); 
john.greet(); 
//__________________________________________________________________________
//4.question
class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const distanceCost = distanceInMiles * this.costPerMile;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}

const myUber = new UberPriceCalculator(5, 0.2, 1.5); 
const distance = 10; 
const time = 20; 
const totalPrice = myUber.calculatePrice(distance, time);
console.log("Total price for the ride:", totalPrice);
//_________________________________________________________________________________________
