// Write all the JS Code related to Home Page Here 
document.querySelector("form").addEventListener("submit", myFun);
let todoArr = JSON.parse(localStorage.getItem("task"));
console.log(todoArr)

function myFun(event) {
    event.preventDefault();
    let a = document.querySelector("#name").value;
    let b = document.querySelector("#type").value;
    let c = document.querySelector("#date").value;
    let d = document.querySelector("#priority").value;
    let tasks = {
        a,
        b,
        c,
        d

    }
    let obj = JSON.stringify(tasks);
    localStorage.setItem("task", obj);


    AppendData(tasks);

}

function AppendData(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        let row = document.createElement("tr");
        let td1 = documnet.createElement("td");
        td1.innerText = tasks[i];
        let td2 = document.createElement("td");
        td2.innerText = tasks[i];
        let td3 = document.createElement("td");
        td3.innerText = tasks[i];
        let td4 = document.createElement("td");
        td4.innerText = tasks[i];
        let td5 = document.createElement("td");
        td5.innerText = tasks[i];
        document.querySelector("tbody").append(row);
    }

}