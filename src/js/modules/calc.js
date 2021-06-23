function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        btn = document.querySelector('.counter-btn'),
        personsSum = 0,
        daysSum = 0,
        sum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        sum = (daysSum + personsSum)*4000;
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        sum = (daysSum + personsSum)*4000;
    });

    btn.addEventListener('click', function() {
        if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            total = sum * place.options[place.selectedIndex].value;
            totalValue.innerHTML = total;
        }
    });
}

export default calc;