let exampleObject = {
    name: 'Vlad', //Property
    age: 24,
    active: true,
    favoriteSports: ["baseball", "basketball"],
    sayHello: () => { //Method
        console.log('Hello')
    },
    getAge: function () {
        console.log(`i am ${this.age} years old`)
    }
}

const { name, age, favoriteSports } = exampleObject; 
// let { name } = exampleObject;
// console.log(name);

// console.log(exampleObject.name, exampleObject.age, exampleObject.favoriteSports)

// let useParams = (nameParam, ageParam, favoriteSportsParam) => {
//     console.log(nameParam);
//     console.log(ageParam);
//     console.log(favoriteSportsParam);
// }

// useParams('avram', 34, 'exemplu');

let person = {
    name: 'Vlad',
    email: 'vlad_sdsjd@mail.com',
    isSenior: function() {
        return age > 60;
    }
}

let createPerson = (nameParam, emailParam, ageParam) => {
    return {
        name: nameParam,
        email: emailParam,
        isSenior: function() {
            return ageParam > 60;
        }
    }
}

let person1 = createPerson('Vlad', 'vlad_avram@mail.com', 24);
let person2 = createPerson('Mihai', 'mihai@mail.com', 30);
let person3 = createPerson('Ion', 'ion@mail.com', 70);

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.isSenior());
console.log(person2.isSenior());
console.log(person3.isSenior());

let personArray = [person1, person2, person3];

personArray.map((person) => {
    console.log(`Persoana cu numele ${person.name} este senior? ${person.isSenior()}`);
})

