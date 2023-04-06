let bill = 200.31;

let calculateTip = function(bill) {
  return Math.round((bill *0.2) * 100) / 100;
}

let getBillTotal = function(bill) {
  return Math.round((bill + calculateTip(bill)) * 100) / 100;
}

console.log(calculateTip(bill));
console.log(getBillTotal(bill));