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
  add: (calcAdd1, calcAdd2) => calcAdd1 + calcAdd2,
  mult: (calcMult1, calcMult2) => calcMult1 * calcMult2,
  div: (calcDiv1, calcDiv2) => {
    const div = calcDiv1 / calcDiv2;
    // https://www.alura.com.br/artigos/formatando-numeros-no-javascript
    // Math.floor()
    return Math.floor(div);
  },
  sub: (calcSub1, calcSub2) => calcSub1 - calcSub2,
};

module.exports = calculator;
