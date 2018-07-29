const testValuiName = /[A-Z][a-z]+/,
    testValuiAge = /\d+/,
    testValueEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    testValuePassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}/;

const formValid = document.getElementById('valid'),
    formElements = formValid.elements,
    result = [];

for (let i = 0; i < formElements.length ; i++) {

    formElements[i].addEventListener('focus', event => {
        const previousElement = event.target.previousElementSibling;

        if (previousElement.tagName === 'SPAN'){
            formValid.removeChild(previousElement);
        }
    });

    formElements[i].addEventListener('change', event => {
        const value = event.target.value;

        switch (formElements[i].name) {

            case 'firstName' || 'secondName':
                result[i] = testValuiName.test(value);
                errorValui(i,formElements[i]);
                break;

            case 'secondName':
                result[i] = testValuiName.test(value);
                errorValui(i,formElements[i]);
                break;

            case 'age':
                if (value > 18 && value < 101) {
                    result[i] = testValuiAge.test(value);
                    errorValui(i,formElements[i]);
                } else {
                    result[i] = false;
                    errorValui(i,formElements[i]);
                }
                break;
            
            case 'email':
                result[i] = testValueEmail.test(value);
                errorValui(i,formElements[i]);
                break;

            case 'password':
                result[i] = testValuePassword.test(value);
                errorValui(i,formElements[i]);
                break;
        }
    });
};

formValid.addEventListener('submit', event => {
    const allValuesInput = [];
    let trueAllValuesInput,
        trueAllResultValidation;
    
    for (let i = 0; i < formElements.length-1; i++) {
        allValuesInput.push(formElements[i].value)
    }

    trueAllValuesInput = allValuesInput.every(elem => elem !== '');
    trueAllResultValidation = result.every(elem => elem === true);
   
    if (!trueAllValuesInput || !trueAllResultValidation) {
            event.preventDefault();
            console.log(allValuesInput + '    '+'ок '+ trueAllValuesInput+ '   ' + trueAllResultValidation)
        
    } 
});

function errorValui(index, elem){
    let error;
    error = document.createElement('span');
    error.innerText = 'Введенные данных не соответствуют заявленным требованиям';
    error.style.color = 'red';

    if (!result[index]) {
        formValid.insertBefore(error, elem);
    }
}