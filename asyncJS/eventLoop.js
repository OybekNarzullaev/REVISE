// ! THIS FILE WORKS ONLY BROWSER, PLEASE CONNECT WITH HTML FILE!

/* synchronous code */
// each line is compilined line by line!
// console.log("first");
// console.log("second");
// console.log("third");

// /* asynchronous code */
// // setTimeOut
// console.log("first"); // first log
// setTimeout(() => console.log("second"), 10); // last log
// console.log("third"); // second log

// promises
// console.log("first");

// const promise = fetch("https://jsonplaceholder.typicode.com/todos");
// promise.then((response) => console.log("second"));

// console.log("third");

// promise + setTimeout
setTimeout(() => console.log("first")); // last execute

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
promise.then((response) => console.log("second")); // second execute

for (let i = 0; i < 1000000000; i++) {} // it takes about 3 second

console.log("third");

// result:
// third
// second
// first
