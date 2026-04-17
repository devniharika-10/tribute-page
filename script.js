let quotes = [

"The armed forces are the pride of our nation.",

"Leadership is about responsibility and courage.",

"Discipline and dedication are the true strength of a soldier.",

"Service before self is the spirit of the Indian Army."

];

function changeQuote(){

let random = Math.floor(Math.random()*quotes.length);

document.getElementById("quoteText").innerText = quotes[random];

}