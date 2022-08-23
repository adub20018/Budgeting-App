'use strict';

const budget = document.querySelector('.bgt');
const expense = document.querySelector('.exp');
const balance = document.querySelector('.bala');

document.querySelector('.calculate').addEventListener('click', function () {
  const max = Number(document.querySelector('.total').value);
  budget.textContent = `$${max}`;

  max < 0
    ? (budget.style.color = 'rgb(190, 72, 72)')
    : (budget.style.color = 'rgb(66, 177, 83)');

  document.querySelector('.expense').addEventListener('click', function () {
    const expenseName = document.querySelector('.expense-name').value;
    const cost = Number(document.querySelector('.expense-cost').value);
    expense.textContent = `$${cost}`;

    const total = max - cost;
    balance.textContent = `$${total}`;

    total < 0
      ? (balance.style.color = 'rgb(190, 72, 72)')
      : (balance.style.color = 'rgb(66, 177, 83)');
  });
});
