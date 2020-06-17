window.location.hash = '#selectedDay';


document.getElementById("flexDateField").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        console.log("plop")
        event.preventDefault();
        document.getElementById("flexDateSubmit").click();
    }
    });

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

