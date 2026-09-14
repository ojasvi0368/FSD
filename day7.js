import fs from "fs/promises";

const fileName = "student.txt";

async function createFile() {
    try {
        await fs.writeFile(
            fileName,
            "Name: Prerna Chauhan\nEmail: prernachauhan8920@gmail.com"
        );

        console.log("File created successfully!");

        // Read the file after creating it
        const data = await fs.readFile(fileName, "utf-8");
        console.log("File content:");
        console.log(data);

        // Append more data
        await fs.appendFile(fileName, "\nCourse: Node.js");
        console.log("Data appended successfully!");

    } catch (error) {
        console.log("Error:", error);
    }
}

createFile();