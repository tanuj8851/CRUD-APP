// Write code related to Home page here
let form = document.getElementById("form");
let formName = document.getElementById("name");
let formDesc = document.getElementById("desc");
let formMnths = document.getElementById("month");
let formWeek = document.getElementById("week");
let formMeetType = document.getElementById("meetType");
let getData = JSON.parse(localStorage.getItem("meets")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = formName.value;
    let desc = formDesc.value;
    let month = formMnths.value;
    let week = formWeek.value;
    let meetType = formMeetType.value;



    let data = {
        name,
        desc,
        month,
        week,
        meetType
    }
    getData.push(data);
    localStorage.setItem("meets", JSON.stringify(getData))

    console.log(getData)

})