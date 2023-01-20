// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
    "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");
let user;

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let recipeData = [];


loginUserButton.addEventListener("click", () => {
    getData()
})

let userAuthToken, userInfo;

fetchRecipesBtn.addEventListener("click", () => {
    console.log("hello")
    getrecipes()
    async function getrecipes() {
        let res = await fetch(`${baseServerURL}/recipeIngredients`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userAuthToken}`,
            }
        });
        let data = await res.json();
        console.log(data)
        rendercard(data)
    }
})

function rendercard(data) {
    let cardlist =
        `
<div class="card-list">
    ${ data.map((item)=>{ getcardData( item.id, item.name, item.description, item.linkText, item.linkUrl, item.imageUrl ) }) .join("") }
</div>

`;
    // mainSection.append(cardlist)

}

function getcardData(id, name, desc, imageUrl) {

    let card =
        `
        <div class="card" data-id=${id}>
        <div class="card-image">
            <img src=${imageUrl} alt="food">
        </div>
        <div class="card-body">
            <h3 class="card-item card-title">${name}</h3>
            <div class="card-item card-description">${desc}</div>
            <a href="#" data-id=${id} data-name=${name} class="card-item card-link">EDIT</a>
        </div>
    </div>
  `
    return card;
}

function displayData(data) {
    data.forEach(el => {
        let cardlist = document.createElement("div")
        cardlist.className = "card-list"

        cardlist.innerHTML = getcardData(el.id, el.name, el.desc, el.image);
        mainSection.append(cardlist)
    });
}



async function getData() {
    let userName = loginUserUsername.value;
    let password = loginUserPassword.value;
    let loginUser = {
        username: userName,
        password: password
    }

    try {
        let res = await fetch(`${baseServerURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser)
        });

        let data = await res.json();
        console.log(data)
        welcomeUsernameSpan.innerText = data.user.username;
        userAuthToken = data.accessToken;
        userInfo = {
            "firstname": data.user.firstname,
            "lastname": data.user.lastname,
            "email": data.user.email,
            "password": data.user.password,
            "username": data.user.username
        }



    } catch (error) {

    }
}