const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 5001;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/twelve") {
        fs.readFile(path.join(__dirname, '02-Puzzle.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/yes") {
        fs.readFile(path.join(__dirname, '03-Puzzle.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/eleven") {
        fs.readFile(path.join(__dirname, '04-Puzzle.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/friday") {
        fs.readFile(path.join(__dirname, '05-Puzzle.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/five") {
        fs.readFile(path.join(__dirname, '06-Puzzle.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/twentytwo") {
        fs.readFile(path.join(__dirname, '01-Trial.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/7919") {
        fs.readFile(path.join(__dirname, '02-Trial.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/3650109345") {
        fs.readFile(path.join(__dirname, '03-Trial.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/625") {
        fs.readFile(path.join(__dirname, 'Society.html'), (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/hints") {
        fs.readFile(path.join(__dirname, 'hints.html'), (err, data) => {
            res.end(data);
        });
    }
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
