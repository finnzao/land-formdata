window.onload = function () {
     document.oncontextmenu = function () {
         return false
     }
}
function startshow(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add('active');
    modal.addEventListener('click', (e) => {
        if (e.target.id == "form" || e.target.id == "submit7") {
            modal.classList.remove('active')

        }
    })
}

const button = document.querySelector("#action-btn ")
const button2 = document.querySelector("#action-btn2 ")

button.addEventListener('click', () => { startshow("form") })
button2.addEventListener('click', () => { startshow("form") })

const masks = {
    phone(value) {
        return value
            .replace(/\D+/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    phoneDDI(value) {
        return value
            .replace(/\D+/g, '')
            .replace(/(\d{2})(\d)/, '+$1 $2')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    }
}

document.querySelectorAll('#question-3-answer-a').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', e => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

function validateN(e) {
    let value = e.value.length

    if (value < 13) {
        innerHTML
        return validateN()
    } else {
        return true
    }
}

function validate(element) {
    let value = element.value

    if (value === "") {
        element.classList.add('erro')
        validate()
    } else {
        element.classList.remove('erro')
        return true
    }
}


var form_answer = {}

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById("question-6");
var question_seven = document.getElementById("question-7");

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');

var answer_one = document.getElementById("question-1-answer-a")
var answer_two = document.getElementById("question-2-answer-a")
var answer_three = document.getElementById("question-3-answer-a")
var answer_four = document.getElementById("question-4-answer-a")
var answer_five = document.getElementById("question-5-answer-a")
var answer_six = document.getElementById("question-6-answer-a")


function answersave1() {
    form_answer['Nome'] = answer_one.value
}

function answersave2() {
    form_answer["Email"] = answer_two.value
}

function answersave3() {
    form_answer["Número"] = answer_three.value
}

function answersave4(question_number, event) {
    form_answer["Empresa"] = answer_four.value
}

function answersave5(event) {
    if (event.target.type === 'radio') {

        form_answer['Renda'] = (event.target.value);

    }
}


question_five.addEventListener('click', function (event) {
    answersave5(event)
})


function answersave6() {
    form_answer["Empregados"] = answer_six.value
}



function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "flex";
    el2.style.display = "none";
}
////

function validarEmail(e) {

    var email = document.querySelector('#question-2-answer-a');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Email invalido";
    }

}

function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}


////
submit1.addEventListener('click', function () {
    validate(answer_one)
    answersave1()
    nextQuestion(2);
    growProgressBar('17%');
})
submit2.addEventListener('click', function () {
    validate(answer_two)
    validarEmail(answer_two)
    answersave2()
    nextQuestion(3);
    growProgressBar('34%');
})
submit3.addEventListener('click', function () {
    validateN(answer_three)
    answersave3()
    nextQuestion(4);
    growProgressBar('51%');
})
submit4.addEventListener('click', function () {
    validate(answer_four)
    form_answer['Renda'] = 'Até 20 mil'
    answersave4()
    nextQuestion(5);
    growProgressBar('68%');
})
submit5.addEventListener('click', function () {
    growProgressBar('85%')
    nextQuestion(6);
})


submit6.addEventListener('click', function () {
    validate(answer_six)
    growProgressBar('100%')
    answersave6()
    nextQuestion(7)
    console.log(form_answer)
})

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}


var date_form_cliente = document.getElementsByClassName("form_cliente")
var date_form_email = document.getElementsByClassName("form_email")
var date_form_number = document.getElementsByClassName("form_number")
var date_form_company = document.getElementsByClassName("form_empresa")
var date_form_renda = document.getElementsByClassName("form_renda")
var date_form_empregados = document.getElementsByClassName("form_empregados")

var form_send = document.getElementById("formsend")





function sendform() {
    date_form_cliente.cliente.value = form_answer.Nome
    date_form_email.Email.value = form_answer.Email
    date_form_number.Number.value = form_answer.Número
    date_form_renda.Renda.value = form_answer.Renda
    date_form_company.Empresa.value = form_answer.Empresa
    date_form_empregados.Empregados.value = form_answer.Empregados
    $("#formsend").trigger('click')
}



document.querySelector("#question-1-answer-a").addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});

document.querySelector("#question-3-answer-a").addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 64) {
        e.preventDefault();
    }
});


document.querySelector(".answer").addEventListener('click', function () {
    this.value = this.value;
});

