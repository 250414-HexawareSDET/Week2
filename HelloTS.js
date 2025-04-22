//This is a Typescript file. TS is a language that is like a Java/JavaScript hybrid
//It's a SUPERSET of JavaScript - it's basically JS with more OOP and more type strictness
//console.logs and most other mechanisms are the same as in JS
console.log("hello typescript");
//however, the rules are what separate the languages
//we should type to strongly type our variables
var greeting = "hello";
//NOT LIKE JS - can't implicitly type coerce our variables!
//greeting = 500 <- compilation error
//Some TS-specific datatypes (any and unknown)
//any is a very flexible data type, in that it can store ANY type of data
var flexibleVar = 881239;
flexibleVar = "I am a String now";
flexibleVar = true;
//unknown is like any, in that it can be any datatype, but it forces us to determine the type before doing any procedures on the variable
var unknownVar = "a string";
//This is also known as a "Type Guard" - we're checking the type before invoking functionality
if (typeof unknownVar == "number") {
    console.log("unknownVar is a number!");
    console.log(unknownVar + 5);
}
else if (typeof unknownVar == "string") {
    console.log("unknownVar is a String");
    console.log(unknownVar.toUpperCase());
}
//TypeScript Class--------
//Good for modeling and holding data 
//(maybe modeling data that's going to be coming from a Java-based API?)
var Person = /** @class */ (function () {
    //constructor (used to initialize the object by giving values to its variables)
    function Person(name, motive) {
        this.name = name;
        this.motive = motive;
    }
    //function
    Person.prototype.sayHi = function () {
        console.log("Hi my name is " + this.name);
    };
    return Person;
}());
//instantiate a Person object
var ben = new Person("Ben", "Revenge");
console.log(ben);
ben.sayHi();
//We'll make a function that returns true if the User is an admin
//This helps us make a more secure app, as all admin functionalities can start with this
function isAdmin(user) {
    return user.role === "admin";
}
//Only admins can get the classified files
//Also, we won't be able to compile if Admins try to refer to "employeeId", which only Employees have
function getClassifiedFiles(user) {
    //we can call username right away, since that field exists on both Admin and Employee
    console.log(user.username + " is trying to get classified files");
    //user.employeeId <-TS isn't sure if this is an employee or not
    //user.adminId <-TS isn't sure if this is an employee or not
    //this is the type guard
    if (isAdmin(user)) {
        //Typescript now knows that the user is an Admin. They can do admin stuff
        console.log(user.username + " accessed the classified files. Their id is: " + user.adminId);
    }
    else {
        //is this runs, Typescript knows the user is an Employee. They can do employee stuff
        console.log(user.username + " tried to access classified files. Uh oh. Their id is: " + user.employeeId);
    }
}
//Let's try invoking getClassifiedFiles with an admin and an employee
getClassifiedFiles({ role: "admin", username: "Steve", adminId: 500 });
getClassifiedFiles({ role: "employee", username: "Henry", employeeId: 500 });
