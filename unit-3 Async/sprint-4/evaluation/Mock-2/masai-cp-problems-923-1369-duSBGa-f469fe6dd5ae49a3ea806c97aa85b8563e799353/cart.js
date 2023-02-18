let main = document.getElementById("cart-container");
let getData = JSON.parse(localStorage.getItem("cart"));
let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/";
let fetchedData = [];
let total = document.getElementById("cart-total");

window.addEventListener("load", () => {
    fetchData()
        // console.log(total.innerText)

})


function fetchData() {
    // console.log(getData.length)
    if (getData.length > 0) {
        getData.map((el) => {
            fechingData(el)

        })
    }

}

function fechingData(id) {
    fetch(`${url}${id}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data)
            let fetchedData = data.data;
            // console.log(fetchedData)
            displayData(fetchedData)
        })
}

function displayData(el) {
    // main.innerHTML = null;
    // data.forEach(el => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img")
    img.src = el.image;
    let title = document.createElement("p");
    title.innerText = el.title;
    let brand = document.createElement("p")
    brand.innerText = el.brand;
    let category = document.createElement("p");
    category.innerText = el.category;
    let price = document.createElement("p");
    price.innerText = el.price;
    total.innerText = +(total.innerText) + el.price;

    // console.log(typeof(max))

    card.append(img, title, brand, category, price)

    main.append(card);



}