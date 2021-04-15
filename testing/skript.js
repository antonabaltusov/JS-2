// //Сложение (addition);
// Вычитание (subtraction)
// Умножение (multiplication);
// Деление (division).
//учесть строки, null или undefined

function multiplication(x, y) {
    if (typeof (x) == "string" || typeof (y) == "string") {
        return ("обе или одна из переменных является строкой");
    } else if (x === null || y === null) {
        return ("обе или одна из переменных является null");
    } else if (x === undefined || y === undefined) {
        return ("обе или одна из переменных является undefined");
    } else {
        return (x * y)
    }
};


function division(x, y) {
    if (typeof (x) == "string" || typeof (y) == "string") {
        return ("обе или одна из переменных является строкой");
    } else if (x === null || y === null) {
        return ("обе или одна из переменных является null");
    } else if (x === undefined || y === undefined) {
        return ("обе или одна из переменных является undefined");
    } else {
        return (x / y)
    }
};

function addition(x, y) {
    if (typeof (x) == "string" || typeof (y) == "string") {
        return ("обе или одна из переменных является строкой");
    } else if (x === null || y === null) {
        return ("обе или одна из переменных является null");
    } else if (x === undefined || y === undefined) {
        return ("обе или одна из переменных является undefined");
    } else {
        return (x + y)
    }
};


function subtraction(x, y) {
    if (typeof (x) == "string" || typeof (y) == "string") {
        return ("обе или одна из переменных является строкой");
    } else if (x === null || y === null) {
        return ("обе или одна из переменных является null");
    } else if (x === undefined || y === undefined) {
        return ("обе или одна из переменных является undefined");
    } else {
        return (x - y)
    }
};

module.exports = {
    subtraction, addition, multiplication, division
}


