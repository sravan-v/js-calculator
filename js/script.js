function calc(x) {
    document.getElementById('display').value += x;
}

function solve() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
}

function clr() {
    console.log('cleared');
    document.getElementById('display').value = '';
}

function del() {
    console.log('del');
    var displayValue = document.getElementById('display').value;
    console.log(displayValue);
    document.getElementById('display').value = displayValue.substr(0, displayValue.length - 1);
}