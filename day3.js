// ------------------ Async/Await Example ------------------
async function test() {
    console.log("2: Message");
    console.log("3: Message");
    console.log("4: Message");
}

console.log("1: Message");
test();
console.log("5: Message");

// ------------------ Promise Example ------------------
let assignmentPromise = new Promise((resolve, reject) => {
    let submitted = true; // Change to false to test rejection

    if (submitted) {
        resolve("Assignment Submitted");
    } else {
        reject("Submission Failed");
    }
});

assignmentPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// ------------------ Async Function (User Data) ------------------
async function displayUserData() {
    const user = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John",
                age: 30,
                salary: 50000
            });
        }, 1000);
    });

    console.log("Name:", user.name);
    console.log("Age:", user.age);
    console.log("Salary:", user.salary);
}

displayUserData();

// ------------------ Fetch JSON Data ------------------
async function getData() {
    try {
        const response = await fetch("./studentdata.json");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const students = await response.json();

        console.log("Student Data:");
        console.log(students);

        // Display each student
        students.forEach((student) => {
            console.log(
                `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`
            );
        });
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getData();
//