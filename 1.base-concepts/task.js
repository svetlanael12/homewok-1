"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;

  if (d === 0) {
    arr[0] = -b / (2*a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let today = new Date();

  let numberOfMonth = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth())

  if (numberOfMonth < 0) {
    return `Введенная дата не может быть меньше текущей даты`
  }

  if (Number.isNaN(Number(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } 
  else if (Number.isNaN(Number(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } 
  else if (Number.isNaN(Number(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  } 

  let percentOfMonth = percent / 100 / 12;
  let sumCredit = amount - contribution; 

  let paymentOfMonth = sumCredit * (percentOfMonth + (percentOfMonth / (((1 + percentOfMonth)**numberOfMonth) - 1)));

  totalAmount = (paymentOfMonth * numberOfMonth).toFixed(2);
  totalAmount = Number(totalAmount);

  return totalAmount;
}
