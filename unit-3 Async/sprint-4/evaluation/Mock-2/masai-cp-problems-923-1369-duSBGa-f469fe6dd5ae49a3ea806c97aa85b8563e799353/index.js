let main = document.getElementById("product-container");
let fetchedData = [];
let getData = JSON.parse(localStorage.getItem("cart")) || [];
let alert = document.getElementById("alert");
let brandfilter = document.getElementById("brand-filter");
let categoryFilter = document.getElementById("category-filter");


brandfilter.addEventListener("change", (e) => {
    // console.log(brandfilter.value)
    let Target = e.target;
    if (Target.checked) {
        console.log(Target.id)
        let filteredData = fetchedData.filter((item) => {
                return Target.id == item.brand;

            })
            // console.log(filteredData)
        displayData(filteredData)
    } else {
        displayData(fetchedData)
    }
})

categoryFilter.addEventListener("change", (e) => {
    let Target = e.target;
    if (Target.checked) {
        console.log(Target.id)
        let filteredData = fetchedData.filter((item) => {
                return Target.id == item.category;

            })
            // console.log(filteredData)
        displayData(filteredData)
    } else {
        displayData(fetchedData)
    }
})



let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";


window.addEventListener("load", () => {
    fetchData();
})



function fetchData() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            fetchedData = data.data;
            // console.log(fetchedData)
            displayData(fetchedData)
        })
}


function displayData(data) {
    main.innerHTML = null;
    data.forEach(el => {
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
        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";

        addToCart.addEventListener("click", () => {

            if (!getData.includes(el.id)) {

                getData.push(el.id);
                alert.innerText = "Product added to The cart";
                localStorage.setItem("cart", JSON.stringify(getData))
            } else {
                alert.innerText = "Product already in the cart";
            }




        })

        card.append(img, title, brand, category, price, addToCart)

        main.append(card);


    });
}