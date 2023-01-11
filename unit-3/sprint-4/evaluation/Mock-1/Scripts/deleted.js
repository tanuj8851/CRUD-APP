// Write code related to Deleted page here

let deletedData = JSON.parse(localStorage.getItem("deleted-todos"))
console.log(deletedData)
let displayInfo = document.getElementById("displayData");
displayData(deletedData)

function displayData(data) {
    data.map((el) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td")
        td1.innerText = el.name;
        let td2 = document.createElement("td")
        td2.innerText = el.desc;
        let td3 = document.createElement("td")
        td3.innerText = el.startDate;
        let td4 = document.createElement("td")
        td4.innerText = el.deadline;
        let td5 = document.createElement("td")
        td5.innerText = el.priority;
        let td6 = document.createElement("td")
        td6.innerText = el.status;
        tr.append(td1, td2, td3, td4, td5, td6)
        displayInfo.append(tr)
    })
}