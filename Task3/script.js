const display = document.getElementById("display");

let first = "";
let operator = "";
let second = "";

function appendNumber(n) {
    if (operator === "") {
        first += n;
    } else {
        second += n;
    }
    update();
}

function appendDot() {
    if (operator === "") {
        if (!first.includes(".")) first += ".";
    } else {
        if (!second.includes(".")) second += ".";
    }
    update();
}

function setOperator(op) {
    if (first === "") return;
    operator = op;
    update();
}

function calculate() {
    const a = parseFloat(first);
    const b = parseFloat(second);
    if (isNaN(a) || isNaN(b)) return;

    let result = 0;
    if (operator === "+") result = a + b;
    else if (operator === "-") result = a - b;
    else if (operator === "*") result = a * b;
    else if (operator === "/") result = b !== 0 ? a / b : "Error";

    display.value = result;
    first = result.toString();
    second = "";
    operator = "";
}

function clearDisplay() {
    first = "";
    second = "";
    operator = "";
    display.value = "";
}

function deleteLast() {
    if (second) second = second.slice(0, -1);
    else if (operator) operator = "";
    else first = first.slice(0, -1);
    update();
}

function update() {
    display.value = first;
    if (operator) display.value += " " + operator;
    if (second) display.value += " " + second;
}
