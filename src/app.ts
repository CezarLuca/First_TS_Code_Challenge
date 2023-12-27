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
