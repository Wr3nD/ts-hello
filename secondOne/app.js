"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult === true) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
//  const person: {
//      name: string;
//      age: number
//  } = {
var Rolee;
(function (Rolee) {
    Rolee["ADMIN"] = "admin";
    Rolee[Rolee["READ_ONLY"] = 100] = "READ_ONLY";
    Rolee[Rolee["AUTHOR"] = 200] = "AUTHOR";
})(Rolee || (Rolee = {}));
const person = {
    name: "Maxim",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
    rolee: Rolee.ADMIN
};
let favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.rolee === Rolee.AUTHOR) {
    console.log("he is author");
}
