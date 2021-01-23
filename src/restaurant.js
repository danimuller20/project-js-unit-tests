const sumFood = () => {
  let total = 0;
  for (let index = 0; index < myMenu.consumption.length; index += 1) {
    for (let x = 0; x < Object.keys(myMenu.fetchMenu.food).length; x += 1) {
      if (myMenu.consumption[index] === Object.keys(myMenu.fetchMenu.food)[x]) {
        total += Object.values(myMenu.fetchMenu.food)[x];
      }
    }
  }
  total += (total * 0.10);
  return total;
};
const sumDrink = () => {
  let total = 0;
  for (let index = 0; index < myMenu.consumption.length; index += 1) {
    for (let x1 = 0; x1 < Object.keys(myMenu.fetchMenu.drink).length; x1 += 1) {
      if (myMenu.consumption[index] === Object.keys(myMenu.fetchMenu.drink)[x1]) {
        total += Object.values(myMenu.fetchMenu.drink)[x1];
      }
    }
  }
  total += (total * 0.10);
  return total;
}
const createMenu = (objeto) => {
  myMenu = {
    fetchMenu: objeto,
    consumption: [],
    order: addItem => myMenu.consumption.push(addItem),
    pay: () => {
      const sum =sumDrink() + sumFood();
      return sum.toFixed(2);
    },
  };
  return myMenu;
};
module.exports = createMenu;
