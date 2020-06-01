
 const inputDay = document.getElementById('day');
 const inputMonth = document.getElementById('month');

 const logMonth = document.getElementById('chosenMonth');
 const logDay = document.getElementById('chosenDay');


 inputDay.addEventListener('input', updateDay);
 inputMonth.addEventListener('input', updateMonth);

 function updateDay(e) {
    logDay.textContent = ' ' + e.target.value + ' ';
  }

  function updateMonth(e) {
    logMonth.textContent = e.target.value;
  }

