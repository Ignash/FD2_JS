import States from './states.js';

const   undoButton = document.getElementById('undo'),
    inputs = document.querySelectorAll('input'),
    states = new States({
        name: 'maksim',
        age: '25'
    });

inputs.forEach(input => {
    input.addEventListener('change', event => {
       const idValue = event.target.id,
            inputValue = event.target.value,
            valueNextState = {};

        valueNextState[idValue] = inputValue;
        states.push(valueNextState);
    })
});

undoButton.addEventListener('click', () => {
    states.undo();

    inputs.forEach(input => {
        const key = input.id,
            valueInput = states.get(key);

        input.value = valueInput;
    })
})
    



pringState();

states.push({
    name: 'dima'
});

pringState();

states.push({
    age: '55'
});

pringState();

states.undo();

pringState();

function pringState() {
    console.log();
    console.log('====================');

    console.log('name:', states.get('name'));
    console.log('age:', states.get('age'));
};

