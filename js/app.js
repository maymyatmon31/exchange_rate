const rates = {
    USD : 2100,
    EUR : 2217,
    SGD : 1532,
    THB : 57.463
}

function toMMK(inputAmmount, currency) {
    return inputAmmount * rates[currency] + "MMK";
}

console.log(toMMK(500, "USD"));
console.log(toMMK(500, "EUR"));
console.log(toMMK(500, "SGD"));
console.log(toMMK(50000, "THB"));