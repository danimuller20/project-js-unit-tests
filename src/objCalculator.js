/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (number1, number2) => {
    const soma = number1 + number2;
    return Math.floor(soma);
  },
  mult: (number1, number2) => {
    const multiplicação = number1 * number2;
    return Math.floor(multiplicação);
  },
  div: (number1, number2) => {
    const divisão = number1 / number2;
    return Math.floor(divisão);
  },
  sub: (number1, number2) => {
    const subtração = number1 - number2;
    return Math.floor(subtração);
  },
};

module.exports = calculator;
