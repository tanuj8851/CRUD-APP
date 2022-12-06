// Write code related to dashboard page here
let getData = JSON.parse(localStorage.getItem("task-list"));
let tbody = document.querySelector("tbody");

let count = document.getElementById("task-count");


function showData() {
    count.innerText = getData.length;
    tbody.innerHTML = "";
    getData.forEach((el, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = el.name;
        let td2 = document.createElement("td");
        td2.innerText = el.desc;
        let td3 = document.createElement("td");
        td3.innerText = el.date1;
        let td4 = document.createElement("td");
        td4.innerText = el.date2;
        let td5 = document.createElement("td");
        td5.innerText = el.priority;
        let td6 = document.createElement("td");
        td6.innerText = "Add";

td6.addEventListener("click",(elem)=>{
    
})

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);

    })

}
showData();