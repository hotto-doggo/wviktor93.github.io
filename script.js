const input = document.getElementById('input');
const form = document.getElementById('form');
const list = document.getElementById('list');

form.addEventListener('click', addTODO);

function addTODO(event) {
    event.preventDefault();
    if (input.value.length > 0) {
        const liElem = document.createElement('li');
        liElem.classList.add('list-group-item');
        liElem.innerHTML = input.value;
        // liElem.addEventListener('click', closeTODO);
        list.append(liElem);

        input.value = '';

        alert('Дело успешно добавлено!');
    } else {
        alert('Введите строку');
    }
}

list.addEventListener('click', closeTODO);


function closeTODO(event) {
    console.log(event);
    console.log(event.target);
    event.target.classList.add('list-group-item-success');
}

// function closeTODO() {
//     this.classList.add('list-group-item-success');
// }