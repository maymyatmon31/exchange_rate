const fruits = {
    orange : 400,
    apple : 1500,
    mango : 1000,
    dragonFruit : 1000
}

let total = 0;

function tax(amount,  taxRate = 5) {
    return amount * (taxRate/100);
}

function buy(quantity, fruitName){
    let cost = quantity * fruits[fruitName];
    let acctualCost = cost + tax(cost);
    total += acctualCost;
    return acctualCost + "MMK";
}
console.log(buy(10, "mango"));
console.log(buy(200, "apple"));
console.log("Total : ", total + "MMK");