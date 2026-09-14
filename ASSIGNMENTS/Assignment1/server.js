const http = require('http');
const fs = require('fs');

const FILE = 'students.json';
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]');

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end(`
            <h2>Welcome - Add Student</h2>
            <form action="/add" method="POST">
                <input name="name" placeholder="Prerna Chauhan" required><br>
                <input name="roll" placeholder="2503201000858" required><br>
                <input name="course" placeholder="B.Tech" required><br>
                <input name="email" placeholder="prernachauhan8920@gmail.com" required><br>
                <button type="submit">Add Student</button>
            </form>
            <a href="/students">View Students</a>
        `);
    } else if (req.url === '/add' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const data = Object.fromEntries(new URLSearchParams(body));
            const list = JSON.parse(fs.readFileSync(FILE));
            list.push(data);
            fs.writeFileSync(FILE, JSON.stringify(list));
            res.writeHead(302, { Location: '/students' });
            res.end();
        });
    } else if (req.url === '/students' && req.method === 'GET') {
        const list = JSON.parse(fs.readFileSync(FILE));
        const rows = list.map(s => `<tr><td>${s.name}</td><td>${s.roll}</td><td>${s.course}</td><td>${s.email}</td></tr>`).join('');
        res.end(`
            <h2>Student List</h2>
            <table border="1"><tr><th>Name</th><th>Roll</th><th>Course</th><th>Email</th></tr>${rows}</table>
            <br><a href="/">Back</a>
        `);
    }
}).listen(3000, () => console.log('Server: http://localhost:3000'));