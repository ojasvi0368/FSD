const form = document.getElementById("requestForm");
const requestsDiv = document.getElementById("requests");

async function getRequests() {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    requestsDiv.innerHTML = "";

    requests.forEach(request => {
        requestsDiv.innerHTML += `
            <div class="card">
                <h3>${request.studentName}</h3>
                <p>Email: ${request.email}</p>
                <p>Category: ${request.category}</p>
                <p>Problem: ${request.description}</p>
                <p>Priority: ${request.priority}</p>

                <button onclick="editRequest(${request.id})">Edit</button>
                <button onclick="deleteRequest(${request.id})">Delete</button>
            </div>
        `;
    });
}

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const id = document.getElementById("requestId").value;

    const data = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    if (id == "") {
        await fetch("/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    } else {
        await fetch("/api/requests/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    form.reset();
    document.getElementById("requestId").value = "";
    document.getElementById("submitBtn").innerText = "Submit Request";

    getRequests();
});

async function editRequest(id) {
    const response = await fetch("/api/requests/" + id);
    const request = await response.json();

    document.getElementById("requestId").value = request.id;
    document.getElementById("studentName").value = request.studentName;
    document.getElementById("email").value = request.email;
    document.getElementById("category").value = request.category;
    document.getElementById("description").value = request.description;
    document.getElementById("priority").value = request.priority;

    document.getElementById("submitBtn").innerText = "Update Request";
}

async function deleteRequest(id) {
    await fetch("/api/requests/" + id, {
        method: "DELETE"
    });

    getRequests();
}

getRequests();