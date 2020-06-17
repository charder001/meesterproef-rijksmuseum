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

