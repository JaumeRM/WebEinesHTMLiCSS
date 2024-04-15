const in_nom = document.getElementById('in_nom');
const in_correu = document.getElementById('in_correu');

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Lenght
function checkLength(input, min, max) {
    if (input.value.length < min) {
        alert(`${getFieldName(input)} ha de ser de ${min} caràcters mínim`)
    } else if (input.value.length > max) {
        alert(`${getFieldName(input)} ha de ser de ${max} caràcters màxim`)
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            alert(`${getFieldName(input)} es requerit`);
        }
    });
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.value.trim())) {
        alert('El correu no és vàlid')
    }
}


//Event list
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([in_nom, in_correu]);
    checkLength(in_nom, 3, 15);
    checkEmail(in_correu);

});