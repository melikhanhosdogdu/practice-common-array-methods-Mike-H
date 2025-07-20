let orders = [
  ["Latte", "Tea", "Espresso"],
  ["Croissant", "Muffin", "Bagel"]
];

console.log(orders[0].length);
console.log(orders[1].length);

console.log(orders[0][0]);
console.log(orders[1][2]);
console.log(orders[0][1]);

let row = 1;
let item = 0;
console.log(orders[row][item]);

for (let i = 0; i < orders[0].length; i++) {
  console.log(orders[0][i]);
}

orders[0].push("flat white");
console.log(orders[0].length);

let category = 0;
let index = 3;
console.log(orders[category][index]);
