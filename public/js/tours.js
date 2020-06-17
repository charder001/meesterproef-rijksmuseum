let input = document.getElementById("entranceLabel");
let input2 = document.getElementById("tour1Label");
let input3 = document.getElementById("tour2Label");

let inputId = document.getElementById("entrance");
let inputId2 = document.getElementById("tour1");
let inputId3 = document.getElementById("tour2");

inputId.addEventListener("input", setLocalStorage);
inputId2.addEventListener("input", setLocalStorage);
inputId3.addEventListener("input", setLocalStorage);

input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("entrance").click();
}
});

input2.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("tour1").click();
}
});
input3.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("tour2").click();
}
});

function setLocalStorage(){
    const form = ticketForm
    const checks1 = form.querySelector('input[name=typeOfTicket]:checked');

    localStorage.setItem("typeOfTicket", checks1.value);
    console.log(localStorage)
}
