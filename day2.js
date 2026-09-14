// ---------------- Callback Function Example ----------------

function hello(n1, n2, callback) {
    console.log("Hello World");
    console.log("Sum:", n1 + n2);
    callback();
}

let a = 10;
let b = 20;

hello(a, b, sayHi);

hello(a, b, function demo() {
    console.log("Callback is calling");
});

function sayHi() {
    console.log("Callback function");
}

function sayHello() {
    console.log("This is second callback function");
}

// Calling separately
sayHi();
sayHello();


// ---------------- Promises in JavaScript ----------------

// Promise 1
const promiseOne = new Promise((resolve, reject) => {
    console.log("Successful data passed...");
    resolve("Resolved Promise");
});

promiseOne
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// Promise 2
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let msg = true;

        if (!msg) {
            resolve({ user: "Async task" });
        } else {
            reject("ERROR: Undefined data...");
        }

        console.log("Asynchronous task...");
    }, 1000);
});

promiseTwo
    .then((result) => {
        console.log("Async task 2");
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });