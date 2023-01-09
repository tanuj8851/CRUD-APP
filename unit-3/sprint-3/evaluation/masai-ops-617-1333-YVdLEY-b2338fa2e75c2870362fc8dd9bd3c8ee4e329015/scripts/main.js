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
    getData("cats")
})

fetchRecipesBtn.addEventListener("click", () => {
    getData("recipes");
})
fetchEmployeesBtn.addEventListener("click", () => {
    getData("employees")
})
sortAtoZBtn.addEventListener("click", () => {
    catsData.sort((a, b) => {
        return b - a
    })
})
sortZtoABtn.addEventListener("click", () => {
    catsData.sort((a, b) => {
        return b - a
    })
})
filterLessThan50Btn.addEventListener("click", () => {

})
filterMoreThanEqual50Btn.addEventListener("click", () => {

})





function getData(input) {
    fetch(`${baseServerURL}/${input}`)
        .then((res) => {
            // console.log(res)
            return res.json()
                // console.log(res)

        })
        .then((data) => {
            console.log(data)

            mainSection.innerHTML =

                `
<pre>
${JSON.stringify(data,null,2)}
</pre>
`
        })

}






{
    /* <pre>
    ${JSON.stringify(catsData,null,2)}
    </pre> */
}