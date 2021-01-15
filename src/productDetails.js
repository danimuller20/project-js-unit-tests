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
const assert = require('assert');

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

// for (let index = 0; index < productDetails().length; index += 1 ) {
//   assert.strictEqual(typeof productDetails('Alcool', 'Nimesulida')[index], 'object');
//   assert.notDeepStrictEqual(productDetails('x', 'y')[0],productDetails('x', 'y')[1]);
//   const valueProductId = Object.values(productDetails()[index])[1];
//   const lengthId = Object.values(valueProductId)[0].length
//   console.log(Object.values(valueProductId)[0].slice(-3, lengthId));
// }

console.log(typeof productDetails('ola', 'ola'));
module.exports = productDetails;
