// Write code related to Home page here
let name = document.getElementById("name");
let desc = document.getElementById("desc");
let startDate = document.getElementById("addDate");
let deadline = document.getElementById("deadline");
let priority = document.getElementById("priority");
let inputData = JSON.parse(localStorage.getItem("todos")) || [];

let form = document.getElementById("form")

form.addEventListener("submit", () => {
    let obj = {
        name: name.value,
        desc: desc.value,
        startDate: startDate.value,
        deadline: deadline.value,
        priority: priority.value,
        status: "todo"
    }
    inputData.push(obj)
    localStorage.setItem("todos", JSON.stringify(inputData))


    // console.log(inputData)
})