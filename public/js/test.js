window.location.hash = '#selectedDay';


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
        console.log('Niet beschikbaar')
        slides[i].innerHTML="kaas";
    }else{
        console.log('beschikbaar')
    }
}