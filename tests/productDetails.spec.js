/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:

    const functionComplete = productDetails('Alcool gel', 'Máscara');

    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(functionComplete), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(functionComplete.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(functionComplete.every(currentValue => typeof currentValue === 'object'), true);

    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(functionComplete[0] !== functionComplete[1], true);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const compare = arr => {
      const validate = [];

      for (let index in arr) {
        validate.push((Object.values(arr[index].details)).toString().includes('123'));
      }

      return validate.every((value) => value === true);
    };
    assert.strictEqual(compare(functionComplete), true);
  });
});
