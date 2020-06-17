let pickedDate = document.getElementById("pickedDate");
let ochtendTime = document.getElementById("ochtendTime");
let middagTime = document.getElementById("middagTime");

ochtendTime.addEventListener("change", setLocalStorage);
middagTime.addEventListener("change", setLocalStorage2);

localStorage.setItem("datum", pickedDate.innerText);
console.log(localStorage)

function setLocalStorage(){
    var e = document.getElementById("ochtendTime");
    var strUser = e.options[e.selectedIndex].value;

    localStorage.setItem("tijd", strUser);
    console.log(localStorage)
}


function setLocalStorage2(){
    var e = document.getElementById("middagTime");
    var strUser = e.options[e.selectedIndex].value;

    localStorage.setItem("tijd", strUser);
    console.log(localStorage)
}




