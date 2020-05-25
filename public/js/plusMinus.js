document.getElementById("plusMuseum").addEventListener("click", plusMuseum); 
document.getElementById("minusMuseum").addEventListener("click", minusMuseum); 

document.getElementById("plusVolwassen").addEventListener("click", plusVolwassen); 
document.getElementById("minusVolwassen").addEventListener("click", minusVolwassen); 

document.getElementById("plusCjp").addEventListener("click", plusCjp); 
document.getElementById("minusCjp").addEventListener("click", minusCjp); 

let volwassen = document.getElementById("volwassen");
let museumKaart = document.getElementById("museumKaart");
let cjp = document.getElementById("cjpKaart");

function plusMuseum(){
    museumKaart.value++
}
function minusMuseum(){
    museumKaart.value--
}

function plusVolwassen(){
    volwassen.value++
}
function minusVolwassen(){
    volwassen.value--
}

function plusCjp(){
    cjp.value++
}
function minusCjp(){
    cjp.value--
}