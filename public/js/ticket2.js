const inputWeek = document.getElementById('week');
const inputMonth = document.getElementById('month');
const inputDay = document.getElementById('day');

const logMonth = document.getElementById('chosenMonth');
const logDay = document.getElementById('chosenDay');

inputMonth.addEventListener('input', updateMonth);
inputWeek.addEventListener('input', updateWeek);
inputDay.addEventListener('input', updateDay);

let select = document.getElementById("day");
select.classList.remove("active");

function updateMonth(e) {
    logMonth.textContent = e.target.value;
}

function updateWeek(e) {
    var e = document.getElementById("week");
    var week = e.options[e.selectedIndex].value;
    var myVar = eval(week);
    renderDay(myVar);
}
function updateDay(e){
    logDay.textContent = ' ' + e.target.value + ' ';
}


let week1 = {
    1: 'Maandag 1',
    2: 'Dinsdag 2',
    3: 'Woensdag 3',
    4: 'Donderdag 4',
    5: 'Vrijdag 5',
    6: 'Zaterdag 6',
    7: 'Zondag 7',
};

let week2 = {
    8: 'Maandag 8',
    9: 'Dinsdag 9',
    10: 'Woensdag 10',
    11: 'Donderdag 11',
    12: 'Vrijdag 12',
    13: 'Zaterdag 13',
    14: 'Zondag 14',
};

let week3 = {
    15: 'Maandag 15',
    16: 'Dinsdag 16',
    17: 'Woensdag 17',
    18: 'Donderdag 18',
    19: 'Vrijdag 19',
    20: 'Zaterdag 20',
    21: 'Zondag 21',
};

let week4 = {
    22: 'Maandag 22',
    23: 'Dinsdag 23',
    24: 'Woensdag 24',
    25: 'Donderdag 25',
    26: 'Vrijdag 26',
    27: 'Zaterdag 27',
    28: 'Zondag 28',
};

renderDay(week1);

function renderDay(e) {
    select.options.length = 0;
    select.classList.add("active");
    for (index in e) {
        select.options[select.options.length] = new Option(e[index], index);
    }
}