

document.getElementById("flexDateSubmit").addEventListener("click", handler);

// handler function
function handler(e) {
	// remove this handler
	e.target.removeEventListener(e.type, arguments.callee);
    e.preventDefault()
    document.getElementById("flexDateForm").insertAdjacentHTML("beforeend", "<a href='#' id='unavailable'>Deze datum is niet beschikbaar klik hier voor de eerstvolgende beschikbare datum: morgen</a>")
    document.getElementById("unavailable").addEventListener("click", function(){
        document.getElementById("flexDateField").value = "morgen"
        document.getElementById("flexDateSubmit").click();
    })
}


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

