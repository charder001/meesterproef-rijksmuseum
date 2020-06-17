

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


var morningSelect = document.querySelector("#morningSelect")
var afternoonSelect = document.querySelector("#afternoonSelect")




let slides = document.getElementsByClassName("dateButton");
for (let i = 0; i < slides.length; i++) {
   chance = Math.floor(Math.random() * 100);
    if (chance > 80){
        let current = slides[i]
        current.classList.add("nietBeschikbaar");
        console.log(current.className)
    }else{
        console.log('beschikbaar')
    }
}