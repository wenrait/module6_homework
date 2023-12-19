/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы. */

let number = +prompt('fff')

function analyzeNumber(number) {
    
    let divisorsNumber = 0;
    let result = '';

    if (number >= 0 && number <= 1000) {
        if (number !== 0 && number !== 1) {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    divisorsNumber++;
                }
            }
            result = counter === 1 ? 'простое' : 'составное';
        } else {
            result = 'ни простое, не составное';
        }
        console.log(`Число ${number} - ${result}.`);
    } else {
        console.log('Введённые данные неверны');
    }
}

analyzeNumber(number)