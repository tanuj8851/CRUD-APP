const fs = require("fs");

// complete the following fubctions




function isNumber(num) {
    if (typeof num === 'number') {
        console.log('it is a Number.');
        writeToTestFile('it is a Number.');
    } else {
        console.log('it is Not a Number.');
        writeToTestFile('it is Not a Number.');
    }
}

// Function to check if a value is a string
function isStr(str) {
    if (typeof str === 'string') {
        console.log('it is a String.');
        writeToTestFile('it is a String.');
    } else {
        console.log('it is Not a String.');
        writeToTestFile('it is Not a String.');
    }
}

// Function to check if a value is an array
function isArray(arr) {
    if (Array.isArray(arr)) {
        console.log('it is a Array');
        writeToTestFile('it is a Array');
    } else {
        console.log('it is Not a Array');
        writeToTestFile('it is Not a Array');
    }
}

// Function to check if a value is an object
function isObj(obj) {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        console.log('this is a object');
        writeToTestFile('this is a object');
    } else {
        console.log('this is not a object');
        writeToTestFile('this is not a object');
    }
}

// Function to clear the contents of the test.txt file
function cls(filename) {
    const fs = require('fs');
    if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
        console.log(`Deleted ${filename}`);
    } else {
        console.log(`${filename} does not exist`);
    }
}


function writeToTestFile(data) {
    const fs = require('fs');
    fs.appendFileSync('test.txt', `${data}\n`);
}

module.exports = {
    isNumber,
    isStr,
    isArray,
    isObj,
    cls,
};