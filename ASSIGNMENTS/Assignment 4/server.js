import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const file = "requests.json";

function getRequests() {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function saveRequests(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

app.get("/api/requests", (req, res) => {
    const requests = getRequests();
    res.json(requests);
});

app.get("/api/requests/:id", (req, res) => {
    const requests = getRequests();

    const request = requests.find(r => r.id == req.params.id);

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

app.post("/api/requests", (req, res) => {
    const requests = getRequests();

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);
    saveRequests(requests);

    res.json(newRequest);
});

app.put("/api/requests/:id", (req, res) => {
    const requests = getRequests();

    const index = requests.findIndex(r => r.id == req.params.id);

    if (index == -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    requests[index] = {
        id: requests[index].id,
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    saveRequests(requests);

    res.json(requests[index]);
});

app.delete("/api/requests/:id", (req, res) => {
    const requests = getRequests();

    const newRequests = requests.filter(r => r.id != req.params.id);

    saveRequests(newRequests);

    res.json({ message: "Request deleted" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});