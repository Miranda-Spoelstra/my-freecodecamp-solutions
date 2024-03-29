/*  Assignment:
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

const values = [
    {name: "ONE HUNDRED", val: 100},
    {name: "TWENTY", val: 20},
    {name: "TEN", val: 10},
    {name: "FIVE", val: 5},
    {name: "ONE", val: 1},
    {name: "QUARTER", val: 0.25},
    {name: "DIME", val: 0.1},
    {name: "NICKEL", val: 0.05},
    {name: "PENNY", val: 0.01}
  ];

  function checkCashRegister(price, cash, cid) {
    let output = {
      status: null,
      change: []
    }
    let change = cash - price;

    let register = cid.reduce(
      (acc, curr) => {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );

    // exact change
    if (register.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }

    // insufficient funds
    if (register.total < change) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }

    let arrReduced = values.reduce(
      (acc, curr) => {
        let value = 0;

        // While still money of this type (name) in the register and the change value is still larger than the corresponding 
        while (register[curr.name] > 0 && change >= curr.val) {
          change -= curr.val;
          register[curr.name] -= curr.val;
          value += curr.val;
          change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
          acc.push([curr.name, value]);
        }
        return acc;
      },[]
    );

    // if no more value in array or change is still larger than 0
    if (arrReduced.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }

    output.status = 'OPEN';
    output.change = arrReduced;
    // Here is your change, ma'am.
    return output;
  }

  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
