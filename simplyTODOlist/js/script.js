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
        list.append(liElem);

        input.value = '';

        alert('Дело успешно добавлено!');
    } else {
        alert('Введите строку');
    }
}

list.addEventListener('click', closeTODO);

function closeTODO(event) {
    event.target.classList.toggle('list-group-item-success');
    event.target.classList.toggle('list-group-item-to-delete');
}

btnDel.addEventListener('click', deleteTODO);

function deleteTODO() {
    if (confirm("Вы точно хотите удалить выбранные?")) {
        const TODOtoDel = document.querySelectorAll('.list-group-item-to-delete');
        TODOtoDel.forEach(function (item) {
            item.remove();
        })
    }
}



form.addEventListener('submit', getSavedTODO);
btnDel.addEventListener('click', getSavedTODO);

function getSavedTODO() {
    let currList = document.querySelectorAll(".list-group-item");
    let currListInner = [];
    currList.forEach(function(item) {
        currListInner.push(item.innerHTML);
    })

    // console.log(currListInner);
    // console.log(JSON.stringify(currListInner));

    localStorage.setItem("currList", JSON.stringify(currListInner));   
}




window.addEventListener("load", inputSavedItems);

function inputSavedItems (){
    const listToDelete = document.querySelectorAll(".list-group-item");
    listToDelete.forEach(function (item) {
        item.remove();
    })

    let currList = localStorage.getItem("currList");
    currList = JSON.parse(currList);
    // console.log(currList);

    currList.forEach(function(item) {
        // console.log(item);

        const liElem = document.createElement('li');
        liElem.classList.add('list-group-item');
        liElem.innerHTML = item;
        list.append(liElem);
    })

    // localStorage.removeItem("currList");
    // console.log(localStorage.getItem("currList"))
}