"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    return arr
  } else if (discriminant === 0) {
    return [-b / (2 * a)]
  } else if (discriminant > 0) {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } else {
    let monthRate = percent / 100 / 12;  // месячная ставка
    let bodyOfTheLoan = amount - contribution; //тело кредита
    let monthPayment = bodyOfTheLoan * (monthRate + (monthRate / (Math.pow(1 + monthRate, countMonths) - 1)));
    let totalCount = monthPayment * countMonths;  
    return parseFloat(totalCount.toFixed(2));
  }
}