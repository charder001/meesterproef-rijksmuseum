console.log(localStorage);
let ticketAmount = localStorage.getItem('ticketAmount');
let typeOfTicket = localStorage.getItem('typeOfTicket');
let email = localStorage.getItem('email');
let fname = localStorage.getItem('fname');
let donatie = localStorage.getItem('donatie');
let mediaTour = localStorage.getItem('tour');
let familie = localStorage.getItem('familieSpel');

let spanAmount = document.getElementById("spanAmount");
let total = document.getElementById("total");
let spanType = document.getElementById("spanType");
let spanName = document.getElementById("spanName");
let spanEmail = document.getElementById("spanEmail");
let spanDonatie = document.getElementById("spanDonatie");
let spanTour = document.getElementById("spanTour");
let spanFamilie = document.getElementById("spanFamilie");

total.innerHTML = ticketAmount * 15  + ' euro';
spanAmount.innerHTML = ticketAmount;
spanType.innerHTML = typeOfTicket;
spanName.innerHTML = fname;
spanEmail.innerHTML = email;
spanDonatie.innerHTML = donatie;
spanTour.innerHTML = mediaTour;
spanFamilie.innerHTML = familie;
