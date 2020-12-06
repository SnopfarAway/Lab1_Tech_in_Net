"use strict";

function mod(rand, input) {
  // функция сравнения чисел
  if (rand != input) {
    // числа не равны
    console.log("Вы ввели неверное число, попробуйте снова");
    return 0;
  } else {
    // числа равны
    console.log("Верно!");
    return 1;
  }
}

exports.mod = mod; // экспорт функции