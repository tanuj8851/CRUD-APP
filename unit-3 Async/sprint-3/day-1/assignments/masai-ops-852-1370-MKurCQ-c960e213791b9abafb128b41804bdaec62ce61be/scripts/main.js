// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// cats
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let catsData = [];

// employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
    "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
    "update-score-employee"
);

let filtersalaray = document.getElementById("filter-less-than-1L");
let filtersalarayabove = document.getElementById("filter-more-than-equal-1L");

filtersalaray.addEventListener("click", () => {
    let filteredData = employeesData.filter((item) => item.salary < 100000)
    renderCardList(filteredData)
})
filtersalarayabove.addEventListener("click", () => {
    let filteredData = employeesData.filter((item) => item.salary >= 100000)
    renderCardList(filteredData)
})

let employeesData = [];

// ***** Event listeners ***** //
window.addEventListener("load", () => {
    fetchAndRenderEmployees();
});

getTodoButton.addEventListener("click", async() => {
    try {
        let res = await fetch(urlTodosBase, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userAuthToken}`
            }
        })
        let data = await res.json();
        console.log(data)

        renderCardList(data)
            // displaydata(data)

    } catch (error) {
        console.log(error)
    }
})

sortAtoZBtn.addEventListener("click", () => {
    let sortedData = employeesData.sort((a, b) => {
        return a.salary - b.salary;

    })
    renderCardList(sortedData);
});

sortZtoABtn.addEventListener("click", () => {
    let sortedData = employeesData.sort((a, b) => {
        return b.salary - a.salary;

    })
    renderCardList(sortedData);
});

empCreateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let name = empNameInput.value;
    let department = empDeptInput.value;
    let salary = empSalaryInput.value;
    let img = empImgInput.value;
    console.log(salary)
    createEmployee(name, department, salary, img)
    alert("Employee Added")
    fetchAndRenderEmployees()

});

updateScoreEmpSalaryButton.addEventListener("click", function(e) {
    e.preventDefault();
    let id = updateScoreEmpId.value;
    let salary = updateScoreEmpSalary.value;
    patchSalary(id, salary);
    alert("Salary Updated Successfully");
    fetchAndRenderEmployees();
});

updateEmpUpdateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let id = updateEmpIdInput.value;
    let name = updateEmpNameInput.value;
    let department = updateEmpDeptInput.value;
    let salary = updateEmpSalaryInput.value;
    let image = updateEmpImageInput.value;

    updateEmployee(id, name, department, salary, image)
    alert("Details Updated")
    fetchAndRenderEmployees()
});

loginUserButton.addEventListener("click", async function() {
    let userName = loginUserUsername.value;
    let password = loginUserPassword.value;
    console.log(userName, password)
    loginUser(userName, password)

});

registerUserButton.addEventListener("click", function() {
    let username = registerUserUsername.value;
    let firstname = registerUserFirstname.value;
    let lastname = registerUserLastname.value;
    let email = registerUserEmail.value;
    let password = registerUserPassword.value;
    let image = registerUserAvatar.value;
    let department = registerUserLevel;

    registerUser(username, firstname, lastname, email, password, image, department)
    alert("User Registered")
});

// ***** Utilities ***** //
// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
    let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.name,
            item.department,
            item.salary,
            item.image
          )
        )
        .join("")}
    </div>
  `;

    mainSection.innerHTML = cardList;

    // let editLinks = document.querySelectorAll(".card__link");
    // for (let editLink of editLinks) {
    //   editLink.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     let currentId = e.target.dataset.id;
    //     populateEditForms(currentId);
    //   });
    // }
}

function renderCard(cardData) {
    let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.title,
            item.completed,
           
           
          )
        )
        .join("")}
    </div>
  `;

    mainSection.innerHTML = cardList;

    // let editLinks = document.querySelectorAll(".card__link");
    // for (let editLink of editLinks) {
    //   editLink.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     let currentId = e.target.dataset.id;
    //     populateEditForms(currentId);
    //   });
    // }
}



function getCard(id, name, depart, salary, imageUrl) {
    let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=server-files/${imageUrl} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${name}</h3>
          <div class="card__item card__description">
             Rs. ${salary}
          </div>
          <a href="" data-id=${id} class="card__item card__link">EDIT</a>
        </div>
      </div>
  `;
    return card;
}


async function fetchAndRenderEmployees() {
    try {
        let res = await fetch(`${baseServerURL}/employees`)
        let data = await res.json();
        console.log(data);
        employeesData = data;
        renderCardList(data)
    } catch (error) {
        console.log(error)
    }
}

function createEmployee(name, department, sal, img) {
    fetch(`${baseServerURL}/employees`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            department: department,
            image: img,
            salary: sal
        }),
        headers: {
            'content-type': 'application/json'
        }
    })

}

function updateEmployee(id, name, department, salary, image) {
    fetch(`${baseServerURL}/employees/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            name: name,
            department: department,
            image: image,
            salary: salary
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

function patchSalary(id, salary) {
    fetch(`${baseServerURL}/employees/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({

            salary: salary
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

function registerUser(username, firstname, lastname, email, password, image, department) {
    fetch(userRegisterURL, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            avatar: image,
            userlevel: department
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}



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
            console.log(res)
            return res.json();
        }).then((data) => {
            console.log(data)
            localStorage.setItem("localAccessToken", data.accessToken);
            localStorage.setItem("userId", data.user.id);
            alert("Login Successful")



        })

}