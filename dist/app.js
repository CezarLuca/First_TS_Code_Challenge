"use strict";
//01 - Basic Types
console.log("01 - Basic Types");
let anArbitraryVariable = 123;
let aString = "Hello" + "World";
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
for (let letter of anotherString) {
    stringLength++;
}
console.log(stringLength);
//02 - Inference
console.log("02 - Inference");
let aNumber = 123; // the type is inferred as number
console.log(typeof aNumber);
let yetAnotherString = "Hello World"; // the type is inferred as string
console.log(typeof yetAnotherString);
let aBooleanValue = false; // the type is inferred as boolean
console.log(typeof aBooleanValue);
//03 - Arrays
console.log("03 - Arrays");
const anArray = [1, 2, 3, 4, 5];
console.log(anArray[1]);
const booleanArray = [true, false];
//04 - Tuples
console.log("04 - Tuples");
const aStringTuple = ["Hello", "World"];
const aNumberTuple = [1, 2];
const aStringAndNumberTuple = ["Hello", 1];
console.log(aStringAndNumberTuple[1]);
//05 - Enums
console.log("05 - Enums");
var ProductNames;
(function (ProductNames) {
    ProductNames["prod1"] = "Book";
    ProductNames["prod2"] = "Box";
    ProductNames["prod3"] = "Pencil";
})(ProductNames || (ProductNames = {}));
console.log(ProductNames);
var ProductIds;
(function (ProductIds) {
    ProductIds[ProductIds["prod1"] = 1] = "prod1";
    ProductIds[ProductIds["prod2"] = 2] = "prod2";
    ProductIds[ProductIds["prod3"] = 3] = "prod3";
})(ProductIds || (ProductIds = {}));
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["favorite"] = "Book";
    FavoriteProduct[FavoriteProduct["id"] = 1] = "id";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(`My favorite product is ${FavoriteProduct.favorite} with id ${FavoriteProduct.id}`);
//06 - Conditional Types
console.log("06 - Conditional Types");
const aPersonAge = 20;
const anotherPersonAge = 30;
if (aPersonAge >= 21) {
    console.log("Congrats");
}
//7 - Loops
console.log("07 - Loops");
const searchHistory = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics",
    "i want more html?!",
];
searchHistory.forEach((searchQuerry) => {
    if (searchQuerry.includes("html")) {
        console.log("1.Would you like to learn how to create websites for free?");
    }
});
for (let searchQuerry of searchHistory) {
    if (searchQuerry.includes("html")) {
        console.log("2.Would you like to learn how to create websites for free?");
    }
}
//Tutorial Solutions:
// Long Version
// for (let searchItem of searchHistory) {
//   // console.log(searchItem.split(" "));
//   for (let entry of searchItem.split(" ")) {
//     // console.log(entry);
//     if (entry === "html" || entry === "css")
//       console.log("Would you like to learn how to create websites for free?");
//   }
// }
// Short version
// searchHistory.map((entry) => {
//   if (entry.includes("html") || entry.includes("css"))
//     console.log("Would you like to learn how to create websites for free?");
// });
