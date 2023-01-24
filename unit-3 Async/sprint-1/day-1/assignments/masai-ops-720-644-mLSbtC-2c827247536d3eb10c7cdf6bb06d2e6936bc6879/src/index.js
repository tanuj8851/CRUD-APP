function studentData(firstName, lastName, age, marksArray, ...hobbies) {
    return {
        fullName: `${firstName} ${lastName}`,
        age: age,
        marksArray: [marksArray],
        hobbies: hobbies,
        getInfo: () => `${firstName} ${lastName}'s age is ${age}.`,
        getResult: () => {
            let avg = 0;
            let total = 0;
            let marks = 0;
            let Result = "";
            let n = marksArray.length;
            for (let i = 0; i < n; i++) {
                total += i;
                marks += marksArray[i];

            }
            avg = marks / total;
            if (avg < 50) {
                // Result.Result = FAIL;
                Result = "Result: FAIL";
            } else if (avg >= 50) {
                Result = "Result: PASS";
            }
            return Result;
        },

    }
}


export {
    studentData
}