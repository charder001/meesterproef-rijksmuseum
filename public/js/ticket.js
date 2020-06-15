let discount = document.getElementById("discountTickets");
let standardContent = document.getElementById("content1");
let DiscountContent = document.getElementById("content2");

discount.addEventListener("click", showDiscountTickets); 


function showStandardTickets(){
    content1.classList.toggle("active");

    // standard.classList.add("headerActive");
    // discount.classList.remove("headerActive");
}

function showDiscountTickets(){
    content2.classList.toggle("active");
    // discount.classList.add("headerActive");
    // standard.classList.remove("headerActive");
}

function selectNext(){
    var select = document.getElementById('drop');
    if(select.selectedIndex == 6){
        select.selectedIndex = 6
    } else {
    select.selectedIndex++;
    console.log(select.selectedIndex)
    }
  }

  function selectPrev(){
    var select = document.getElementById('drop');
    if(select.selectedIndex == 0){
        select.selectedIndex = 0

    } else {
    select.selectedIndex--;
    console.log(select.selectedIndex)
    }
  }

  let drop1 = document.getElementById("drop1");
  let drop2 = document.getElementById("drop2");
  let drop3 = document.getElementById("drop3");
  let drop4 = document.getElementById("drop4");
  let drop5 = document.getElementById("drop5");
  let drop6 = document.getElementById("drop6");
  let ticketHeader = document.getElementById("totalTickets");


  drop1.addEventListener("change", calcTicketAmount);
  drop2.addEventListener("change", calcTicketAmount);
  drop3.addEventListener("change", calcTicketAmount);
  drop4.addEventListener("change", calcTicketAmount);
  drop5.addEventListener("change", calcTicketAmount);
  drop6.addEventListener("change", calcTicketAmount);

  function calcTicketAmount() {
    var els = document.getElementsByClassName('ticketAmount'); 
    var total1 = 0;


    for (var i = 0; i < els.length; i++) {
        total1 += parseInt(els[i].value, 10);
    }
    localStorage.setItem("ticketAmount", total1);
    console.log( 'amount = ' + total1)
    ticketHeader.innerHTML = 'Totaal aantal tickets: ' + total1;
 //   console.log(localStorage.getItem("ticketAmount"));
}

discount.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("discountTickets").click();
    }
    });