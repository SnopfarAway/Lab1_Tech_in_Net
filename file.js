const eq = require("./dist/mod"); // подключить созданный модуль 

const { randomInt } = require("crypto"); // подключить модуль генерации случайного числа
var cap = randomInt(10000, 99999); // определить случайное число в заданных пределах
console.log(cap); // вывести определенное ранее случайное число

const readline = require("readline-sync"); // подключить модуль считывания с консоли 
var num = readline.question("Repeat the number "); // считать ответ на вопрос с консоли

if(eq.mod(cap, num) == 0) { // ответ неверный 
    num = readline.question("Repeat the number ") // считать ответ на вопрос с консоли
    eq.mod(cap, num); // сравнить числа
}


