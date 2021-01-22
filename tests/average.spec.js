/* eslint-disable max-len */

const assert = require('assert');
const average = require('../src/average');

/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#average', () => {
  it("tests function average's behaviour as specified", () => {
    assert.deepStrictEqual(average([3, 4, 5]), 4);
    assert.deepStrictEqual(average([1, 2, 3, '4', 5]), undefined);
    assert.deepStrictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
    assert.deepStrictEqual(average([1, 2, '3']), undefined);
    assert.deepStrictEqual(average([1, 2, 3]), 2);
    assert.deepStrictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);

    assert.deepStrictEqual(average([]), undefined);
    assert.deepStrictEqual(average([' ']), undefined);
    assert.deepStrictEqual(average(['um', 'dois', 'tres']), undefined);
    assert.deepStrictEqual(average([47, 63, 122]), 77);

    assert.deepStrictEqual(average([-11, 2, 5]), -1);

    assert.deepStrictEqual(average([-11, -5, 2]), -5);
  });
});
