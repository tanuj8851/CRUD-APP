let form = document.getElementById("form");
let tbody = document.querySelector("tbody");
let data1 = [];
form.addEventListener("submit", (el) => {
    el.preventDefault();
    let data = {
        task: form.task.value,
        priority: form.priority.value
    }
    data1.push(data);
    tbody.innerHTML = null;
    // console.log(data1);
    displaytable(data1);



})

function displaytable(data1) {
    data1.forEach((element, index) => {
        let row2 = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.task;
        let td2 = document.createElement("td");
        td2.innerText = element.priority;
        if (element.priority == "High") {
            td2.style.backgroundColor = "red";
        } else {
            td2.style.backgroundColor = "green";
        }

        row2.append(td1, td2);
        tbody.append(row2);
    })


}