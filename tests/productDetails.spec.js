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
    assert.strictEqual(Array.isArray(productDetails('p1', 'p2')), true);
    assert.strictEqual(Object.keys(productDetails('prod1', 'prod2')).length, 2);
    assert.strictEqual(typeof(productDetails('p1', 'p2')), 'object');
    assert.notStrictEqual(productDetails('p1', 'p2')[0], productDetails('p1', 'p2')[1]);
    // assert.strictEqual(productDetails('p1', 'p2').indexOf('123'), -1);

    const product1 = productDetails('aaa', 'bbb')[0].details.productId;
    const product2 = productDetails('aaa', 'bbb')[1].details.productId;
    assert.strictEqual(/123/g.test(product1 && product2), true);
  });
});
