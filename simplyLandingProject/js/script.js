function showMore(obj) {
    let name = obj.name;
    let el = document.getElementsByName(name);
    for (let i = 0; i < el.length; i++){
        el[i].classList.toggle("services__card-hidden");    
    }
}



