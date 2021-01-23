const sumMenu = () => {
  let total = 0;
  for (let index = 0; index < myMenu.consumption.length; index += 1) {
    if (Object.keys(myMenu.fetchMenu.food).includes(myMenu.consumption[index])) {
      total += myMenu.fetchMenu.food[myMenu.consumption[index]];
    }
    if (Object.keys(myMenu.fetchMenu.drink).includes(myMenu.consumption[index])) {
      total += myMenu.fetchMenu.drink[myMenu.consumption[index]];
    }
  }
  total += (total * 0.10);
  return total.toFixed(2);
};



const createMenu = (objeto) => {
  myMenu = {
    fetchMenu: objeto,
    consumption: [],
    order: addItem => myMenu.consumption.push(addItem),
    pay: sumMenu(),
  };
  return myMenu;
};
module.exports = createMenu;
