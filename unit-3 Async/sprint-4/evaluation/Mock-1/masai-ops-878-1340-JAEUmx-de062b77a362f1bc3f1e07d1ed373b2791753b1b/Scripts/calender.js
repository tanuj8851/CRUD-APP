// Write code related to Calender page here

let getData = JSON.parse(localStorage.getItem("meets"));
let month = document.getElementById("month");
let week1 = document.getElementById("Week-1");
let week2 = document.getElementById("Week-2")
let week3 = document.getElementById("Week-3")
let week4 = document.getElementById("Week-4")


console.log(getData)

month.addEventListener("change", (e) => {
    e.preventDefault();
    let selectedMnths = month.value;
    // console.log(selectedMnths)

    let filteredData = getData.filter((item) => {
        return item.month == selectedMnths;

    })

    console.log(filteredData)

    displayData(filteredData)
})


function displayData(data) {
    let cardlist =
        `<div class="cardlist"> 
  ${  data.map((el) => {
    if (el.week == "Week-1") {
        getCard(el.name, el.desc, el.meetType, el.week)
        // week1.append(getCard)
    } else if (el.week == "Week-2") {
        getCard(el.name, el.desc, el.meetType, el.week)
        // week2.append(getCard)
    } else if (el.week == "Week-3") {
        getCard(el.name, el.desc, el.meetType, el.week)
        // week3.append(getCard)
    } else if (el.week == "Week-4") {
        getCard(el.name, el.desc, el.meetType, el.week)
        // week4.append(getCard)
    }
    
})}
    `;

}


function getCard(name, desc, meetType, week) {
    let card = document.createElement("div")

    let h1 = document.createElement("h1");
    h1.innerText = name;
    let p1 = document.createElement("p");
    p1.innerText = desc;
    let Type = document.createElement("p");
    meetType.innerText = `Meet Type:- ${meetType}`;

    card.append(h1, p1, Type)

    return card;

}