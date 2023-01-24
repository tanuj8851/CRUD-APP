// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let linkdata = `${baseServerURL}`

let catsData = [];

window.addEventListener("load", () => {
    fetchData("cats")
})

fetchRecipesBtn.addEventListener("click", () => {
    fetchData("recipes");
})
fetchEmployeesBtn.addEventListener("click", () => {
    fetchData("employees")
})
sortAtoZBtn.addEventListener("click", () => {
    catsData.sort((a, b) => {
        return a.cost - b.cost
    })
})
sortZtoABtn.addEventListener("click", () => {
    catsData.sort((a, b) => {
        return b.cost - a.cost
    })
})
filterLessThan50Btn.addEventListener("click", () => {

})
filterMoreThanEqual50Btn.addEventListener("click", () => {

})


function fetchData(input) {
    fetch(`${baseServerURL}/${input}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            catsData = data;
            displaydata(catsData)
        })
}

function displaydata(data) {
    mainSection.innerHTML = null;
    data.forEach(el => {
        let card = document.createElement("div")
        card.className = "Card";
        card.innerHTML =
            `
        <img src=${el.image} alt="">
        <p>${el.name}</p>
        <p>${el.description.substring(0,75)}</p>
        <p>${el.cost}</p>        
        `
        mainSection.append(card)
    });
}