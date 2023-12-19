/* Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат. */

function getFirstNumber(a) {
    return function getSecondNumber(b) {
        return a + b
    }
}

let firstNumber = getFirstNumber(+prompt('Введите первое число:'));
let sum = firstNumber(+prompt('Введите второе число число:'))

console.log(sum)