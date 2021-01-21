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
    // ESCREVA SEUS TESTES ABAIXO:

    const productDetailsFunc = productDetails('Leite', 'Biscoito');

    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetailsFunc), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetailsFunc).length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const contentIsObject = () => productDetailsFunc.every((product) => typeof product === 'object');
    /* const contentIsObject = () => {
      return productDetailsFunc.every((product) => typeof product === 'object');
    }; */
    assert.deepStrictEqual(contentIsObject(), true);

    // Teste que os dois objetos são diferentes entre si.
    const equalProducts = () => Object.is(productDetailsFunc[0], productDetailsFunc[1]);
    assert.deepStrictEqual(equalProducts(), false);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const checkProductId = (productId) => productId.slice(-3);
    assert.deepStrictEqual(checkProductId(productDetailsFunc[0].details.productId), '123');
    assert.deepStrictEqual(checkProductId(productDetailsFunc[1].details.productId), '123');
  });
});
