//01 - Basic Types
console.log("01 - Basic Types");

let anArbitraryVariable: number = 123;

let aString: string = "Hello" + "World";
console.log(aString);

// let anotherString: string = 12; // Error: Type '12' is not assignable to type 'string'.

let zero: number = 0;
let one: number = 1;

let aBoolean: boolean = Boolean(zero || one);
let anotherBoolean: boolean = !zero;
// let yetAnotherBoolean: boolean = 11;

const anotherString: string = "Hello World";
// const stringLength: number = anotherString.length;
let stringLength: number = 0;

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

const anArray: number[] = [1, 2, 3, 4, 5];
console.log(anArray[1]);

const booleanArray: boolean[] = [true, false];

//04 - Tuples
console.log("04 - Tuples");

const aStringTuple: [string, string] = ["Hello", "World"];
const aNumberTuple: [number, number] = [1, 2];
const aStringAndNumberTuple: [string, number] = ["Hello", 1];
console.log(aStringAndNumberTuple[1]);

//05 - Enums
console.log("05 - Enums");

enum ProductNames {
    prod1 = "Book",
    prod2 = "Box",
    prod3 = "Pencil",
}
console.log(ProductNames);

enum ProductIds {
    prod1 = 1,
    prod2 = 2,
    prod3 = 3,
}

enum FavoriteProduct {
    favorite = ProductNames.prod1,
    id = ProductIds.prod1,
}
console.log(
    `My favorite product is ${FavoriteProduct.favorite} with id ${FavoriteProduct.id}`
);

//06 - Conditional Types
console.log("06 - Conditional Types");

const aPersonAge: number = 20;
const anotherPersonAge: number = 30;

if (aPersonAge >= 21) {
    console.log("Congrats");
}

//7 - Loops
console.log("07 - Loops");

const searchHistory: string[] = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics",
    "i want more html?!",
];

searchHistory.forEach((searchQuerry) => {
    if (searchQuerry.includes("html")) {
        console.log(
            "1.Would you like to learn how to create websites for free?"
        );
    }
});

for (let searchQuerry of searchHistory) {
    if (searchQuerry.includes("html")) {
        console.log(
            "2.Would you like to learn how to create websites for free?"
        );
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
