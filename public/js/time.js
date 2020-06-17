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



var ochtend = document.querySelector("#ochtend")
var middag = document.querySelector("#middag")
var morningSelect = document.querySelector("#morningSelect")
var afternoonSelect = document.querySelector("#afternoonSelect")

ochtend.addEventListener("click", function () {
    afternoonSelect.classList.add("hidden")
    morningSelect.classList.remove("hidden")
})

middag.addEventListener("click", function () {
    morningSelect.classList.add("hidden")
    afternoonSelect.classList.remove("hidden")
})


