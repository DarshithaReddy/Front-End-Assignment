let person = {
    fullName: function(city, country) {
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country);
    }
};

let person1 = { firstName: "John", lastName: "Doe" };

// Using call()
person.fullName.call(person1, "New York", "USA");

// Using apply()
person.fullName.apply(person1, ["London", "UK"]);

// Difference: call() takes arguments separately, apply() takes them in an array.
