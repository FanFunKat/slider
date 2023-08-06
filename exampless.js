// PĘTLE

// Napisz funkcję nOddNumbers, która przyjmuje parametr n. 
// Parametr n będzie mówił naszej funkcji ile kolejnych liczb 
// nieparzystych powinna wypisać. Przykładowo wywołanie nOddNumbers(5) 
// wypisze na konsoli kolejno 1, 3, 5, 7, 9. Wzór na kolejną liczbę
// nieparzystą to 2*i - 1.

let nOddNumbers = (n) => {
    for (let i = 1; i<=n; i++) {
        console.log(2*i - 1)
    }
}

nOddNumbers(10)

// FUNKCJE

// let myFirstFunction = () => {
//     console.log('Witaj! Mam na imię Katarzyna!');
// };

// let mySecondFunction = (name, greeating) => {
//     console.log(greeating + '! Mam na imię ' + name +'!');
// };

// mySecondFunction('Katarzyna', 'Hej');
// mySecondFunction('Kacper', 'Dzień dobry');

// Napisz funkcję, która przemnoży liczbę przekazaną w parametrze przez dwa i wypisze wynik na konsolę.
// Napisz funkcję, która przemnoży liczbę przekazaną w parametrze przez dowolną liczbę, przekazaną w kolejnym parametrze.
// Napisz funkcję, która podniesie liczbę przekazaną w parametrze do potęgi drugiej.

// let multiplication = (number) => {
//     console.log(number * 2);
// };

// multiplication(5);

// let multiplication2 = (number1, number2) => {
//     console.log(number1 * number2);
// }

// multiplication2(125, 8);

// let exponentiation = (number) => {
//     console.log(number**2);
// }

// exponentiation(5);