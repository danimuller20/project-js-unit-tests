/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

const assert = require('assert')
assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true)
assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2)
assert.deepStrictEqual(typeof(productDetails('Alccol gel', 'Máscara')[0] && productDetails('Alccol gel', 'Máscara')[0]), 'object')
assert.deepStrictEqual(productDetails('Alcool', 'Máscara')[0] !== productDetails('Alcool', 'Máscara')[1], true);
assert.deepStrictEqual(productDetails('Alcool', 'Máscara')[0].details.productId.slice(-3) && productDetails('Alcool', 'Máscara')[1].details.productId.slice(-3), '123')
module.exports = productDetails;
