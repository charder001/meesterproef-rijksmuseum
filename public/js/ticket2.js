const inputWeek = document.getElementById('week');
const inputMonth = document.getElementById('month');

const logMonth = document.getElementById('chosenMonth');
const logDay = document.getElementById('chosenDay');

inputMonth.addEventListener('input', updateMonth);
inputWeek.addEventListener('input', updateWeek);

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
    1: 'Maandag 8',
    2: 'Dinsdag 9',
    3: 'Woensdag 10',
    4: 'Donderdag 11',
    5: 'Vrijdag 12',
    6: 'Zaterdag 13',
    7: 'Zondag 14',
};

let week3 = {
    1: 'Maandag 15',
    2: 'Dinsdag 16',
    3: 'Woensdag 17',
    4: 'Donderdag 18',
    5: 'Vrijdag 19',
    6: 'Zaterdag 20',
    7: 'Zondag 21',
};

let week4 = {
    1: 'Maandag 22',
    2: 'Dinsdag 23',
    3: 'Woensdag 24',
    4: 'Donderdag 25',
    5: 'Vrijdag 26',
    6: 'Zaterdag 27',
    7: 'Zondag 28',
};



function renderDay(e) {
    select.options.length = 0;
    select.classList.add("active");
    for (index in e) {
        select.options[select.options.length] = new Option(e[index], index);
    }
}