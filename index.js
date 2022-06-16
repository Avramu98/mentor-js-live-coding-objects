//RECAP
//variables and data types

// let ES6
// const ES6
// var ES5

// Data types
// PRIMITIVE VALUES
// let stringVariable = "text"; //TYPE STRING
// let numberVariable = 3;
// let booleanVariable = true;
// let undefinedVariable = undefined;
// let undefinedVariable;
// let nullVariable = null;

// NON PRIMITVES = OBJECTS;
// objects, array
// let nonPrimitiveObjects = {
//     name: 'vlad'
// }

// let nonPrimitiveArray = ['vlad']
// console.log(nonPrimitiveArray);


// console.log(nonPrimitiveObjects);




// console.log(typeof stringVariable)
// console.log(typeof numberVariable);
// console.log(typeof booleanVariable);
// console.log(typeof undefinedVariable);

// console.log(typeof nonPrimitiveObjects);
// console.log(typeof nonPrimitiveArray);

// Functions

// ES5
// function functionExample() {
//     console.log('hello from function');
// }

// functionExample();

// ES6
// () => {
//     console.log('hello')
// }

// let name = "Vlad";
// console.log(name);

// name = "Avram";
// console.log(name)

// const name = "Vlad";
// console.log(name);


// console.log(name);

// let functionExample = () => {
//     const name = "Avram";
//     return name;

// }

// let functionResult = functionExample();
// console.log(functionResult)

// let nameVariable = "Vlad";
// let ageVariable = 24;

// FUNCTION PARAMETERS
// let functionExampleWithParams = (name, age) => {
//     console.log('This is the name parameter', name);
//     console.log('This is the age parameter', age);
// }

// functionExampleWithParams('Vlad', 24);
// functionExampleWithParams(24, 'Vlad')

// functionExampleWithParams(nameVariable, ageVariable);


// IF STATEMENTS

// let age = 17;
// if(age >= 18) {
//     console.log('poate sa conduca');
// } else {
//     console.log('nu poate sa conduca');
// }

// console.log(19 === '19')

// let checkIfPersonCanDrive = (age) => {
//     if(age >= 18) {
//         console.log('poate sa conduca');
//     } else {
//         console.log('nu poate sa conduca');
//     }
    
// }

// checkIfPersonCanDrive(18);

// let checkWeather = (weather) => {
//     if(weather === 'sunny') {
//         console.log('ia ochelari de soare')
//     } else if (weather === 'rainy') {
//         console.log('ia o umbrela');
//     } else {
//         console.log('nu stiu ce sa fac');
//     }
// }

// checkWeather('rainy');

//Array

// Data types
// PRIMITIVE VALUES
// let stringVariable = "text"; //TYPE STRING
// let numberVariable = 3;
// let booleanVariable = true;
// let undefinedVariable = undefined;
// let undefinedVariable;
// let nullVariable = null;

// NON PRIMITVES = OBJECTS;
// objects, array
// let nonPrimitiveObjects = {
//     name: 'vlad'
// }

// let nonPrimitiveArray = ['vlad']
// console.log(nonPrimitiveArray);


// console.log(nonPrimitiveObjects);

// let array = [stringVariable, numberVariable, booleanVariable, undefinedVariable, nullVariable, nonPrimitiveArray, nonPrimitiveObjects]
// console.log(array[1]);

// let fruits = ['apple', 'banana', 'strawberry'];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// let functionExample = () => {

// }

// fruits.map( (fruit, i) => {
//     console.log(`Fructul de pe pozitia ${i} este ${fruit}`)
// } )

// let header = document.getElementById("header");
// let headers = Array.from(document.getElementsByClassName("header-class"))

// let header = document.querySelector(".header-class");
// console.log(header);

// let headers = document.querySelectorAll(".header-class");
// console.log(headers[1]);

// let header = document.querySelectorAll("div > h1");
// console.log(header);


// headers.map((header, i) => {
//     header.innerHTML = `Headerul se afla pe pozitia ${i}`
//     header.style = "color: red"
//     console.log(header);
// })

