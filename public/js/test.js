var flexDateForm = document.querySelector("#flexDateForm")
var flexDateField = document.querySelector("#flexDateField")
var flexDateSubmit = document.querySelector("#flexDateSubmit")
var selectedDay = document.querySelector("#selectedDay")


var today = new Date();
var dd = today.getDate()
var modifiedDate = dd
var mm = today.getMonth() //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

selectedDay.innerText = selectedDay.innerText = modifiedDate + ` / ${mm} ` + ` / ${yyyy}`

flexDateSubmit.addEventListener("click", function (e) {
    e.preventDefault()
    console.log(flexDateField.value)
    if(flexDateField.value == "morgen"){
        modifiedDate ++
        console.log(modifiedDate)
    } else if (flexDateField.value == "vandaag"){
        modifiedDate = dd
        console.log(modifiedDate)
    } else if (flexDateField.value == "volgende week"){
        modifiedDate +=7
        console.log(modifiedDate + " volgende week")
    }
    selectedDay.innerText = modifiedDate + ` ${mm} ` + `${yyyy}`
    modifiedDate = dd
})