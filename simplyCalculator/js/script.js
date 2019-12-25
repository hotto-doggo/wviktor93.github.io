const buttons = document.querySelectorAll('button');
console.log(buttons);
let area = document.querySelector('.area');

buttons.forEach(element => console.log(element));

buttons.forEach((button) => button.addEventListener('click', handleClick));

function handleClick() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    switch (this.innerHTML) {
        case 'C':
            area.innerHTML = '';
            break;
        case '=':
            if (numbers.indexOf(area.innerHTML.slice(-1)) === -1) {
                area.innerHTML = eval(area.innerHTML.substr(0, area.innerHTML.length - 1));
            } else {
                area.innerHTML = eval(area.innerHTML);
            }
            break;
        case '+':
            if (numbers.indexOf(area.innerHTML.slice(-1)) !== -1) {
                area.innerHTML += this.innerHTML;
            } else if (area.innerHTML.slice(-1) !== '+' || numbers.indexOf(area.innerHTML.slice(-1)) === -1) {
                area.innerHTML = area.innerHTML.substr(0, area.innerHTML.length - 1) + this.innerHTML;
            } else if (area.innerHTML.slice(-1) === '+') {
                break;
            } 
            break;
        case '-':
            if (numbers.indexOf(area.innerHTML.slice(-1)) !== -1) {
                area.innerHTML += this.innerHTML;
            } else if (area.innerHTML.slice(-1) !== '-' || numbers.indexOf(area.innerHTML.slice(-1)) === -1) {
                area.innerHTML = area.innerHTML.substr(0, area.innerHTML.length - 1) + this.innerHTML;
            } else if (area.innerHTML.slice(-1) === '-') {
                break;
            } 
            break;
        case '/':
            if (numbers.indexOf(area.innerHTML.slice(-1)) !== -1) {
                area.innerHTML += this.innerHTML;
            } else if (area.innerHTML.slice(-1) !== '/' || numbers.indexOf(area.innerHTML.slice(-1)) === -1) {
                area.innerHTML = area.innerHTML.substr(0, area.innerHTML.length - 1) + this.innerHTML;
            } else if (area.innerHTML.slice(-1) === '/') {
                break;
            } 
            break;
        case '*':
            if (numbers.indexOf(area.innerHTML.slice(-1)) !== -1) {
                area.innerHTML += this.innerHTML;
            } else if (area.innerHTML.slice(-1) !== '*' || numbers.indexOf(area.innerHTML.slice(-1)) === -1) {
                area.innerHTML = area.innerHTML.substr(0, area.innerHTML.length - 1) + this.innerHTML;
            } else if (area.innerHTML.slice(-1) === '*') {
                break;
            } 
            break;
        default:
            area.innerHTML += this.innerHTML;
            break;
    }
}