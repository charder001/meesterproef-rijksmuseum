let input = document.getElementById("neeLabel");
let input2 = document.getElementById("2Label");
let input3 = document.getElementById("5Label");
let input4 = document.getElementById("10Label");
let input5 = document.getElementById("mediaTour");
let input6 = document.getElementById("familieSpel");

let inputId = document.getElementById("nee");
let inputId2 = document.getElementById("2euro");
let inputId3 = document.getElementById("5euro");
let inputId4 = document.getElementById("10euro");

inputId.addEventListener("input", setLocalStorage);
inputId2.addEventListener("input", setLocalStorage);
inputId3.addEventListener("input", setLocalStorage);
inputId4.addEventListener("input", setLocalStorage);
input5.addEventListener("input", setLocalStorage2);
input6.addEventListener("input", setLocalStorage2);

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        inputId.click();
    }
    });
    
    input2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
       inputId2.click();
    }
    });
    input3.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        inputId3.click();
    }
    });
    input4.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            inputId4.click();
        }
        });

        setLocalStorage();
        setLocalStorage2();

    function setLocalStorage(){
        const form = donaties
        const checks1 = form.querySelector('input[name=donatie]:checked');
    
        localStorage.setItem("donatie", checks1.value);
        console.log(localStorage)
    }

    function setLocalStorage2(){
        let media = input5;
        let familie = input6;
        let chosenMedia = media.options[media.selectedIndex].value;
        let chosenFamilie = familie.options[familie.selectedIndex].value;
    
        localStorage.setItem("tour", chosenMedia);
        localStorage.setItem("familieSpel", chosenFamilie);
        console.log(localStorage)
    }
    