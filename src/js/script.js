const input = document.getElementById('input');
const form = document.getElementById('form');
const list = document.getElementById('list');
const btnDel = document.getElementById('todo__button-del');



form.addEventListener('submit', addTODO);

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
    // console.log(event);
    // console.log(event.target);
    event.target.classList.toggle('list-group-item-success');
    event.target.classList.toggle('list-group-item-to-delete');
}

// function closeTODO() {
//     this.classList.add('list-group-item-success');
//     this.classList.add('list-group-item-to-delete');
// }

btnDel.addEventListener('click', deleteTODO);

function deleteTODO() {
    if (confirm("Вы точно хотите удалить выбранные?")) {
        const TODOtoDel = document.querySelectorAll('.list-group-item-to-delete');
        console.log(TODOtoDel.length);
        TODOtoDel.forEach(function (item) {
            item.remove();
        })
    }
}