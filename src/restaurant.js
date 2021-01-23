const createMenu = (objeto) => {
  let total = 0;
   myMenu = {
    fetchMenu: objeto,
    consumption: [],
    order: (addItem) => myMenu.consumption.push(addItem),
    pay: () => {
      for (let index = 0; index < myMenu.consumption.length; index += 1) {
        for (let x = 0; x < Object.keys(myMenu.fetchMenu.food).length; x += 1) {
          if (myMenu.consumption[index] === Object.keys(myMenu.fetchMenu.food)[x]) {
            total += Object.values(myMenu.fetchMenu.food)[x];
          }
        }
        for (let x1 = 0; x1 < Object.keys(myMenu.fetchMenu.drink).length; x1 += 1) {
          if (myMenu.consumption[index] === Object.keys(myMenu.fetchMenu.drink)[x1]) {
            total += Object.values(myMenu.fetchMenu.drink)[x1];
          }
        }
      }
      total += (total * 0.10);
      return total.toFixed(2);
    },
  };
  return myMenu;
};
module.exports = createMenu;
