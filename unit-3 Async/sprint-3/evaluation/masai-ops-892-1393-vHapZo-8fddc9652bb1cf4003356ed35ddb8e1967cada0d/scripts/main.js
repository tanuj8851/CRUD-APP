// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------


const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/todos/`;

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");
let userAccessToken = localStorage.getItem("localAccessToken") || [];
let localuserName = localStorage.getItem("username") || [];

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");
let tick = document.getElementsByClassName("todo-item-checkbox");

let todoData = [];




loginUserButton.addEventListener("click", () => {
    let userName = loginUserUsername.value;
    let password = loginUserPassword.value;
    // console.log(userName, password)
    loginUser(userName, password)
})

sortLowToHigh.addEventListener("click", async() => {
    try {
        let res = await fetch(`${baseServerURL}/todos/?_sort=title&_order=asc`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userAccessToken}`
            }
        })
        let data = await res.json();
        // console.log(data)

        displaydata(data)

    } catch (error) {
        console.log(error)
    }
})


sortHighToLow.addEventListener("click", async() => {
    try {
        let res = await fetch(`${baseServerURL}/todos/?_sort=title&_order=desc`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userAccessToken}`
            }
        })
        let data = await res.json();
        // console.log(data)

        displaydata(data);

    } catch (error) {
        console.log(error)
    }
})

filterCompleted.addEventListener("click", async() => {
    try {
        let res = await fetch(`${baseServerURL}/todos/?completed=true`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userAccessToken}`
            }
        })
        let data = await res.json();
        // console.log(data)

        displaydata(data);

    } catch (error) {
        console.log(error)
    }
})


filterPending.addEventListener("click", async() => {
    try {
        let res = await fetch(`${baseServerURL}/todos/?completed=false`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userAccessToken}`
            }
        })
        let data = await res.json();
        // console.log(data)

        displaydata(data);

    } catch (error) {
        console.log(error)
    }
})



getTodoButton.addEventListener("click", async() => {
    try {
        let res = await fetch(urlTodos, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userAccessToken}`
            }
        })
        let data = await res.json();
        // console.log(data)
        todoData = data;
        // renderCardlist(data)
        displaydata(data)

    } catch (error) {
        console.log(error)
    }
})


function loginUser(username, password) {
    let data = {
        username: username,
        password: password
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(data)
    }

    fetch(userLoginURL, options)
        .then((res) => {
            // console.log(res)
            return res.json();
        }).then((data) => {
            console.log(data)
            localStorage.setItem("localAccessToken", data.accessToken);
            localStorage.setItem("username", data.user.username);
            notificationWrapper.innerHTML =
                `
            <h5 class="notification info">
            hey admin, welcome back!
            </h5>
            `

        })

}

function renderCardlist(data) {
    mainSection.innerHTML = null;
    console.log(data)
    let cardlist =
        `
        <div id="todo-list-wrapper" class="todo-list-wrapper">
${
  data.map((item)=>{
    getCard(item.id,item.title,item.completed)
  })
}
</div>
`
    mainSection.innerHTML = cardlist;
}

function getCard(id, title, completed) {
    // let card;
    console.log(id)
        // if (completed == true) {
    let card =
        `
            <label class="todo-item-label">
            <input class="todo-item-checkbox" data-id=${id} type="checkbox" checked>
            ${title}
          </label>

`
    return card;
    //     } else {
    //         card =
    //             `
    //              <label class="todo-item-label">
    //               <input type="checkbox" class="todo-item-checkbox" data-id=${id}>
    //               ${title}
    //              </label>

    // `
    //         return card;
    //     }


}

function displaydata(data) {
    mainSection.innerHTML = null;
    data.forEach(el => {
        let card = document.createElement("div")
        card.className = "todo-list-wrapper";
        card.id = "todo-list-wrapper";

        let label = document.createElement("label")
        label.className = "todo-item-label";
        // let input= document.createElement("input")

        if (el.completed == true) {
            label.innerHTML =
                `
<input class="todo-item-checkbox" data-id=${el.id} type="checkbox" checked>
${el.title}
`
            card.append(label)
        } else {
            label.innerHTML =
                `
<input class="todo-item-checkbox" data-id=${el.id} type="checkbox">
${el.title}
`
            card.append(label)
        }


        mainSection.append(card);

    });
}