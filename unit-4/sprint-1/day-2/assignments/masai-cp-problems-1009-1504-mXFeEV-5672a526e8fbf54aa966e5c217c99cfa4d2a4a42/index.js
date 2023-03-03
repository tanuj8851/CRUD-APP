// index.js
let crypto = require("crypto")

//  import the crypto module



//  get a commands using process.argv


// complete the  function



// switch (operation) {

//     default: console.log("Invalid operation");
// }

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'add':
        calculate(args.slice(1), (a, b) => a + b);
        break;
    case 'sub':
        calculate(args.slice(1), (a, b) => a - b);
        break;
    case 'mult':
        calculate(args.slice(1), (a, b) => a * b);
        break;
    case 'divide':
        calculate(args.slice(1), (a, b) => a / b);
        break;
    case 'sin':
        calculate(args.slice(1), Math.sin);
        break;
    case 'cos':
        calculate(args.slice(1), Math.cos);
        break;
    case 'tan':
        calculate(args.slice(1), Math.tan);
        break;
    case 'random':
        const length = parseInt(args[1]);
        if (isNaN(length)) {
            console.log('Provide length for random number generation.');
        } else {
            console.log(generateRandom(length));
        }
        break;
    default:
        console.log('Invalid operation');
        break;
}

function calculate(args, operation) {
    const numbers = args.map(Number);
    const result = numbers.reduce(operation);
    console.log(result);
}

function generateRandom(length) {
    const bytes = Math.ceil(length / 2);
    const random = crypto.randomBytes(bytes).toString('hex');
    return random.slice(0, length);
}

// default: console.log("Invalid operation");