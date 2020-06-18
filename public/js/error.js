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