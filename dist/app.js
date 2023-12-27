"use strict";
let anArbitraryVariable = 123;
let aString = "Hello " + "World";
console.log(aString);
// let anotherString: string = 12; // Error: Type '12' is not assignable to type 'string'.
let zero = 0;
let one = 1;
let aBoolean = Boolean(zero || one);
let anotherBoolean = !zero;
// let yetAnotherBoolean: boolean = 11;
const anotherString = "Hello World";
// const stringLength: number = anotherString.length;
let stringLength = 0;
// const stringArray = anotherString.split("");
// const stringArray = [...anotherString];
// const stringArray = Array.from(anotherString);
const stringArray = [];
for (let letter of anotherString) {
    stringArray.push(letter);
    stringLength++;
}
console.log(`${stringArray} word array has a lenght of ${stringLength}`);
