import fs from 'fs/promises';

const fileName = "student.txt";

async function main() {
    // CREATE
    await fs.writeFile(fileName, "Name: Prerna\nEmail: prernachauhan8920@gmail.com");
    console.log("1. File created");

    // READ
    let data = await fs.readFile(fileName, "utf8");
    console.log("2. File content:");
    console.log(data);

    // UPDATE
    await fs.appendFile(fileName, "\nCourse: B.Tech");
    console.log("3. File updated");

    // READ UPDATED FILE
    data = await fs.readFile(fileName, "utf8");
    console.log("4. Updated content:");
    console.log(data);

    // DELETE
    await fs.unlink(fileName);
    console.log("5. File deleted");
}

main().catch(err => console.log("ERROR:", err.message));