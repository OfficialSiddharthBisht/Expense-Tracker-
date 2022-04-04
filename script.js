
const monthObj = {
    "01" : "January",
    "02" : "February",
    "03" : "March",
    "04" : "April",
    "05" : "May",
    "06" : "June",
    "07" : "July",
    "08" : "August",
    "09" : "September",
    "10" : "October",
    "11" : "November",
    "12" : "December",
} 

// * LocalStorage

function displayCard(){
    let cards_section = document.getElementById("cards-section");
    const month = document.getElementById("month").value.trim().split("-")[1];
    const income = document.getElementById("income").value;
    const expense = document.getElementById("expense").value;
    let savings = income - expense;
    let card = document.createElement("div");
    card.id = "card";
    
    card.innerHTML = `<h2 id = "color0"> ${monthObj[month]}</h2>
    <p id = "color1"> Your Income is ${income}.
    <p id = "color2"> Your Expense is ${expense}.
    <p id ="color3"> Your savings are ${savings}.`
    cards_section.append(card);
    localStorage.setItem(monthObj[month],card);
}