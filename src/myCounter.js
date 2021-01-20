/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  const myArray = [];
  for (let counterLevel1 = 0; counterLevel1 <= 3; counterLevel1 += 1) {
    myArray.push(counterLevel1);
    for (let counterLevel2 = 2; counterLevel2 <= 3; counterLevel2 += 1) {
      myArray.push(counterLevel2);
    }
  }
  return myArray;
};

module.exports = myCounter;
