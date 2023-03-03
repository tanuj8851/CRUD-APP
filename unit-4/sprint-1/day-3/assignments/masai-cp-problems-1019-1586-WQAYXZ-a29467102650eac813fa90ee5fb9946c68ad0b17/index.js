// const fs = require("fs");
// const path = require("path");

// const operation = process.argv[2];
// const file = process.argv[3];
// const content = process.argv[4];

// switch (operation) {
//     // complete the fillowing function.



//     default: console.log(`Invalid operation '${operation}'`);
// }

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const file = args[1];

switch (command) {
    case 'read':
        read(file);
        break;
    case 'delete':
        remove(file);
        break;
    case 'create':
        create(file);
        break;
    case 'append':
        append(file, args[2]);
        break;
    case 'rename':
        rename(file, args[2]);
        break;
    case 'list':
        list(file);
        break;
    default:
        console.log('Invalid command.');
        break;
}

function read(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

function remove(file) {
    fs.unlink(file, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${file} has been deleted.`);
    });
}

function create(file) {
    fs.writeFile(file, '', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${file} has been created.`);
    });
}

function append(file, content) {
    fs.appendFile(file, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`"${content}" has been appended to ${file}.`);
    });
}

function rename(file, newName) {
    const oldPath = path.join(__dirname, file);
    const newPath = path.join(__dirname, newName);

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${file} has been renamed to ${newName}.`);
    });
}

function list(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Contents of ${dir}:`);
        files.forEach((file) => {
            console.log(`- ${file}`);
        });
    });
}