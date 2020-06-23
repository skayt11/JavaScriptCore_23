$(() => {
    let dateOfbirth = $("#date").datepicker({
        dateFormat: 'dd-mm-yy',
        yearRange: '-100y:c+nn',
        firstDay: 1,
        changeYear: true,
        changeMonth: true,
        showMonthAfterYear: true,
        monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthNamesShort: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        dayNames: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"],
        prevText: "Поперідній",
        nextText: "Наступний",
        currentText: "Сьогодні",
    });
    let name = $("#name");
    let date = $('#date');
    let checkName = () => {
        let nameinput = name.val();
        if (nameinput == '') {
            $('form p').text(`Введіть ім'я!`).addClass('error-text');
            name.addClass("error-input");
            name.effect("shake", {
                times: 3
            }, 500);
            setTimeout(function () {
                name.removeClass("error-input", 1500);
                $('form p').text('День тижня через 20 років.').removeClass('error-text');
            }, 2500);
        } else {
            return true
        }
    }
    let checkDate = () => {
        let dateinput = date.val();
        if (dateinput == '') {
            dateOfbirth.addClass("error-input");
            $('form p').text(`Введіть дату!`).addClass('error-text');
            date.effect("shake", {
                times: 3
            }, 500);
            setTimeout(function () {
                dateOfbirth.removeClass("error-input", 1500);
                $('form p').text('День тижня через 20 років.').removeClass('error-text');
            }, 2500);
            return false
        } else {
            return true
        }
    }
    let checkYear = (a) => {
        if (a.val() < 1 || a.val() > 100) {
            a.addClass("error-input");
            $('form p').html(`Дозволено добавити <br />від 1 до 100 років!`).addClass('error-text');
            a.effect("shake", {
                times: 3
            }, 500);
            setTimeout(function () {
                a.removeClass("error-input", 1500);
                $('form p').text('День тижня через 20 років.').removeClass('error-text');
            }, 2500);
            return false
        } else {
            return true
        }
    }
    $("#btn").button().on("click", () => {
        let inputYear = $('#inputYear');
        let valid = true;
        valid = valid && checkName();
        valid = valid && checkDate();
        valid = valid && checkYear(inputYear);
        if (valid) {
            let inputdate = moment(dateOfbirth.val(), "DD-MM-YYYY");
            let userdate = inputdate.format('dddd, DD-MM-YYYY');
            let addToYear = moment(inputdate).add(inputYear.val(), 'Y').locale('uk');
            $('h1').html(`Привіт ${name.val()}, Ваш день народження: ${userdate}. <br />День тижня через ${inputYear.val()} ${(inputYear.val() == 1 ? 'рік' : '' || inputYear.val() == 2 ? 'роки' : '' || inputYear.val() == 3 ? 'роки' : '' || inputYear.val() == 4 ? 'роки' : 'років')} в ${addToYear.format('YYYY')} буде ${addToYear.format('dddd')}.`);
        }
    });
    setInterval(() => {
        const today = moment();
        $('#time').text(`Current Time: ${today.format('DD-MM-YYYY / hh:mm:ss:SS')}`)
    }, 190);
});