/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:
*

    Devuelve la cadena zero si el número termina en 0
    Devuelve la cadena five si el número termina en 5
    Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
    Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5

Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.

Ejemplos:
Input: 100
Output: zero

Input: 88
Output: even

Input: 155
Output: five

Input: 99
Output: odd */

function number_cardinality(n) {
    const ultDigito = n.toString().slice(-1);

    if (ultDigito === '0') {
        return 'zero';
    } else if (ultDigito === '5') {
        return 'five';
    } else if (n % 2 === 0 && ultDigito !== '0') {
        return 'even';
    } else if (n % 2 !== 0 && ultDigito !== '5') {
        return 'odd';
    } else {
        return 'ERROR => Se esperaba un número'
    }

}


console.log(number_cardinality(100));
