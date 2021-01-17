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
    const details = productDetails('Alcool gel', 'Máscara')
    //assert.strictEqual(typeof details, 'array')
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(details.length, 2)
    assert.strictEqual(typeof details[0], 'object')
    assert.strictEqual(typeof details[1], 'object')
    assert.notStrictEqual(details[0], details[1])
    assert.strictEqual(details[0].details.productId.substr(-3), '123')
    assert.strictEqual(details[1].details.productId.substr(-3), '123')
    // Teste que o retorno da função é um array.
  });
});
