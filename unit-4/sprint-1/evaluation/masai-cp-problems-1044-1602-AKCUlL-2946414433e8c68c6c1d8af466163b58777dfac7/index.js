const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const cowsay = require("cowsay");

let userCnt = 0; //To count the number of users

//" make the server function and export";


const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>HOME PAGE</h1>');
    } else if (url == "/count") {
        const timestamp = new Date();
        userCnt = JSON.parse(fs.readFileSync('./data.json')).length;

        fs.appendFile(`logs.txt","The inital user count is ${userCnt} at ${timestamp}\n)`, (err) => {
            if (err) {
                res.write(err);
            } else {
                res.write("The user count has been updated in the logs file")
            }
            res.end();
        })
    }


})

module.exports = server;


//Handling the home route, send an h1 tag

//counting the number of users and writing the initial number in the logs.txt along with the time stamp



//updating the user database

//should append updated number of users in logs.txt along with the time stamp

//get the first names of all the users from the json file and send as a response in list format

//to get the website url from terminal and write its ip address and family in logs.txt

// using the cowsay external module




// Do not listen to the server just export(default) it