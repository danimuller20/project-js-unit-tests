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

const numbers = require('./numbers');

const calculator = {
  /*   add: numbers,
    mult: numbers,
    div: numbers,
    sub: numbers,
  };
  let numberAdd01 = 0;
  let numberAdd02 = 0;
  let numberMult01 = 0;
  let numberMult02 = 0;
  let numberDiv01 = 0;
  let numberDiv02 = 0;
  let numberSub01 = 0;
  let numberSub02 = 0;
  
  const calculator.add = (numberAdd01, numberAdd02) => numberAdd01 += numberAdd02;
  const calculator.mult = (numberMult01, numberMult02) => numberMult01 *= numberMult02;
  const calculator.sub = (numberSub01, numberSub02) => numberSub01 -= numberSub02;
  const calculator.div = (numberDiv01, numberDiv02) => {
    if (numberMult02 === 0) {
      return undefined
    }
    return numberDiv01 /= numberDiv02; */
}

module.exports = calculator;
