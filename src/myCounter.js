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
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var counter02 = 0; counter <= 3; counter02 += 1) {}
    for (var counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);

      for (counter03 = 2; counter03 <= 3; counter03 += 1) {}
      myArray.push(counter03);
    }
  }
  return myArray;
};

module.exports = myCounter;
