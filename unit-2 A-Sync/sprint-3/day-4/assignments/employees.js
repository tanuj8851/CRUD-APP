let employees = [{
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
let age1 = employees.sort((a, b) => {
    return a.age - b.age;
})
console.log("Ascending Order", age1)

let age2 = employees.sort((a, b) => {
    return b.age - a.age;
})


console.log("Descending Order", age2)

// sort by name


let name1 = employees.sort((a, b) => {
    let nameA = a.firstName;
    let nameB = b.firstName;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }


    return 0;
});
console.log("Ascending order By First name", name1)

let name2 = employees.sort((a, b) => {
    let nameA = a.firstName;
    let nameB = b.firstName;
    if (nameA > nameB) {
        return -1;
    }
    if (nameA < nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});


console.log("Descending order By First name", name2);