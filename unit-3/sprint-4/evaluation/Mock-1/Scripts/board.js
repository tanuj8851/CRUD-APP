// Write code related to Board page here

let inputData = JSON.parse(localStorage.getItem("todos"));
let displayTodo = document.getElementById("todos-status");
let Progress = document.getElementById("progress");
let Stuck = document.getElementById("stuck");
let Completed = document.getElementById("completed");

let deletedData = JSON.parse(localStorage.getItem("deleted-todos")) || []
displayTodoData(inputData);

function displayTodoData(data) {
    data.map((el, index) => {
        let div = document.createElement("div");
        let name = document.createElement("h3");
        name.innerText = el.name;
        let AddedDate = document.createElement("p");
        AddedDate.innerText = `Added on:- ${el.startDate}`
        let deadline = document.createElement("p");
        deadline.innerText = `Deadline:- ${el.deadline}`;
        let priority = document.createElement("p");
        priority.innerText = `Priority:- ${el.priority}`;
        let selecttag = document.createElement("select")

        let op4 = document.createElement("option")
        op4.innerText = "TODO"
        let op1 = document.createElement("option")
        op1.innerText = "progress"
        let op2 = document.createElement("option")
        op2.innerText = "stuck";
        let op3 = document.createElement("option")
        op3.innerText = "completed";
        selecttag.append(op4, op1, op2, op3)




        let del = document.createElement("button");
        del.innerText = "Delete";

        del.addEventListener("click", () => {
            deletedData.push(el)
                // data.splice(index, 1)

            localStorage.setItem("deleted-todos", JSON.stringify(deletedData))
            inputData.slice(el, 1)


            // displayTodoData(inputData)

        })

        div.append(name, AddedDate, deadline, priority, selecttag, del)

        selecttag.addEventListener("change", () => {
            if (selecttag.value == "stuck") {
                Stuck.append(div)
                el.status = "stuck";
                // localStorage.setItem("todos", JSON.stringify())
            } else if (selecttag.value == "completed") {
                Completed.append(div)
                el.status = "completed";
            } else if (selecttag.value == "progress") {
                Progress.append(div)
                el.status = "progress";
            }

        })

        displayTodo.append(div)


    })



}