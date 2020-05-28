let standard = document.getElementById("standardTickets");
let discount = document.getElementById("discountTickets");
let standardContent = document.getElementById("content1");
let DiscountContent = document.getElementById("content2");


standard.addEventListener("click", showStandardTickets); 
discount.addEventListener("click", showDiscountTickets); 


function showStandardTickets(){
    content1.classList.add("active");
    content2.classList.remove("active");

    standard.classList.add("headerActive");
    discount.classList.remove("headerActive");

    console.log('standaard')
}

function showDiscountTickets(){
    content2.classList.add("active");
    content1.classList.remove("active");

    discount.classList.add("headerActive");
    standard.classList.remove("headerActive");

    console.log('korting')
}