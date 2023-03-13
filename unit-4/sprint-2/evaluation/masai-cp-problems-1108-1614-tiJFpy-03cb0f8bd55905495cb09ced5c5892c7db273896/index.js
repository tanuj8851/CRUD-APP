// create the express app and export it.
const express = require("express")
const fs = require("fs")
const app = express();

app.use(express.json());

app.post("/students/addstudent", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json"));
    data.students.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Student has been added")
})

app.post("/instructors/addinstructor", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json"));
    data.instructors.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Instructor has been added")
})

app.get("/students", (req, res) => {
    let studentdata = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(studentdata.students)
})

app.get("/students/:studentCode", (req, res) => {
    let add = req.params.studentCode;
    let studentdata = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = studentdata.students.filter((el) => {
        return el.student_code == add;
    })
    res.send(data[0])
})

app.get("/instructors", (req, res) => {
    let Employedata = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(Employedata.instructors)
})

app.get("/instructors/:empID", (req, res) => {
    const add = req.params.empID;
    let Employedata = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let data = Employedata.instructors.filter((el) => {
        return el.emp_id == add;
    })
    res.send(data[0])
})


app.patch("/students/:studentCode", (req, res) => {

    let student_code = req.params.studentCode;
    let body = req.body;
    let studentdata = JSON.parse(fs.readFileSync("./db.json", "utf-8"));


    for (let i = 0; i < studentdata.students.length; i++) {
        if (studentdata.students[i].student_code == student_code) {

            if (body.name) {
                studentdata.students[i].name = body.name;
            } else if (body.location) {
                studentdata.students[i].location = body.location;
            } else if (body.batch) {
                studentdata.students[i].batch = body.batch;
            }

            // console.log(studentdata.students[i].batch)
        }
    }
    let data = studentdata;
    fs.writeFileSync("./db.json", JSON.stringify(studentdata))

    res.send("Patched Student Details");
})

app.delete("/students/:studentCode", (req, res) => {

    let student_code = req.params.studentCode;

    let studentdata = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let index = 0;
    // let arr = studentdata.students;

    for (let i = 0; i < studentdata.students.length; i++) {
        if (studentdata.students[i].student_code === student_code) {
            index = i
            studentdata.students.splice(i, 1);
        }
    }



    fs.writeFileSync("./db.json", JSON.stringify(studentdata))

    res.send("Deleted Student Details ");
})




// app.listen(8080, () => [
//     console.log("App is running on port 8080")
// ])


// export the app
module.exports = app;