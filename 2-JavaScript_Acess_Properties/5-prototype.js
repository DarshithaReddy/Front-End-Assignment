// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Adding properties and methods using prototype
Person.prototype.country = "USA";
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

// Creating an object
let person1 = new Person("John", "Doe");

// Displaying output on the page
document.body.innerHTML += `<p>Full Name: ${person1.getFullName()}</p>`;
document.body.innerHTML += `<p>Country: ${person1.country}</p>`;



