// Write code related to Home page here 
let form = document.getElementById("form");
let data = JSON.parse(localStorage.getItem("task-list")) || [];
form.addEventListener("submit", (el) => {
    let info = {
        name: form.name.value,
        desc: form.desc.value,
        date1: form.start.value,
        date2: form.end.value,
        priority: form.priority.value
    }
    data.push(info);
    localStorage.setItem("task-list", JSON.stringify(data));
})