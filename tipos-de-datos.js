console.log(typeof 42);           // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);         // number
console.log(typeof true);         // boolean
console.log(typeof 0);            // number
console.log(typeof '');           // string
console.log(typeof null);         // object (curiosidad en JS)
console.log(typeof undefined);    // undefined
console.log(typeof FALSE);        // boolean (JS no diferencia entre false y FALSE)

console.log(typeof [1, 2, 3]);    // object (arrays en JS son objetos)
console.log(typeof {a: 1, b: 2}); // object (objetos en JS)
console.log(typeof function(){}); // function
console.log(typeof NaN);          // number (NaN es un "Not a Number", pero sigue siendo de tipo number)
console.log(typeof Symbol('x'));  // symbol


