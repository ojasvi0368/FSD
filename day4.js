// EVENT
// Event loop: sequence of executing functions

const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const f3 = () => {
    console.log("f3");
};

function main() {
    console.log("main function");

    setTimeout(f1, 1000);
    setTimeout(f2, 2000);
    setTimeout(f3, 3000);

    new Promise((resolve, reject) => {
        resolve("I am a promise");
    }).then((result) => {
        console.log(result);
    });
}

main();
//Event emitter