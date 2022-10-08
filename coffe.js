"use strict";

function coffeeMachine(drink) {
  let drinks = {
    еспресо: 20,
    капучино: 24,
    латте: 35,
    "гарячий шоколад": 37,
  };
  for (const d in drinks) {
    if (d == drink) {
      return `Ваше замовлення : ${d} - ${drinks[d]}$`;
    }
  }
}
alert(coffeeMachine(prompt("Що ви бажаєте замовити?")));
