// ---------------- Function in JavaScript ----------------

// function hello() {
//     console.log("This is a function");
// }

// hello();
// console.log("Synchronous JavaScript");


// ---------------- Asynchronous JavaScript ----------------

// Arrow Function
const helloAsync = () => {
    console.log("Async function");

    setTimeout(() => {
        console.log("A");
    }, 2000);
};

helloAsync();
console.log("B");


// ---------------- Function with Parameters ----------------

function hello(n1, n2) {
    console.log(n1 + n2);
    console.log("Arguments");
}

let a = 10;
let b = 20;

hello(a, b);