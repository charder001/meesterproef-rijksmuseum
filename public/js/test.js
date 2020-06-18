




document.getElementById("flexDateField").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        console.log("plop")
        event.preventDefault();
        document.getElementById("flexDateSubmit").click();
    }
    });


var morningSelect = document.querySelector("#morningSelect")
var afternoonSelect = document.querySelector("#afternoonSelect")



