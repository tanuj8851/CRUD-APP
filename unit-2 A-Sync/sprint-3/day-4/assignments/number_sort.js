let numbers = [0, 1, 2, 30, 10, 25, 40, 30];

numbers.sort((element1, element2) => {
    return element1 - element2;
})
console.log("Ascending Order", numbers)
numbers.sort((element1, element2) => {
    return element2 - element1;
})
console.log("Descending Order", numbers)