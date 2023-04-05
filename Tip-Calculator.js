let bill = 200.31;

let calculateTip = function(bill) {
  return bill * 0.2;
}

let getBillTotal = function(bill) {
  return Math.round((bill + calculateTip(bill)) * 100) / 100;
}

console.log(getBillTotal(bill));