// DATE  24-10-24

// 1

// let income = 870000;
// let tax = 0;
// let total = 0;
// if (income <= 250000) {
//   console.log("no tax");
// } else if (income > 250000 && income <= 500000) {
//   tax = (5 / 100) * income;
//   total = income - tax;
//   console.log(`your income is ${income}`);
//   console.log(`tax for your income is ${tax}`);
//   console.log(`income after removing tax ${total}`);
// } else if (income > 500000 && income <= 1000000) {
//   tax = (20 / 100) * income + 12500;
//   total = income - tax;
//   console.log(`your income is ${income}`);
//   console.log(`tax for your income is ${tax}`);
//   console.log(`income after removing tax ${total}`);
// } else {
//   tax = (30 / 100) * income + 112500;
//   total = income - tax;
//   console.log(`your income is ${income}`);
//   console.log(`tax for your income is ${tax}`);
//   console.log(`income after removing tax ${total}`);
// }

// 2

// let weight = prompt("enter parcel weight:");
// let destination = prompt("enter destination:").toLocaleLowerCase();
// if (weight <= 1) {
//   if (destination == "local") {
//     console.log("shipping cost for your parcel 5$");
//   } else if (destination == "national") {
//     console.log("shipping cost for your parcel 8$");
//   } else if (destination == "international") {
//     console.log("shipping cost for your parcel 15$");
//   }
// } else if (weight > 1 && weight <= 5) {
//   if (destination == "local") {
//     console.log("shipping cost for your parcel 10$");
//   } else if (destination == "national") {
//     console.log("shipping cost for your parcel 15$");
//   } else if (destination == "international") {
//     console.log("shipping cost for your parcel 30$");
//   }
// } else if (weight > 5 && weight <= 10) {
//   if (destination == "local") {
//     console.log("shipping cost for your parcel 20$");
//   } else if (destination == "national") {
//     console.log("shipping cost for your parcel 25$");
//   } else if (destination == "international") {
//     console.log("shipping cost for your parcel 50$");
//   }
// } else if (weight > 10) {
//   if (destination == "local") {
//     console.log("shipping cost for your parcel 30$");
//   } else if (destination == "national") {
//     console.log("shipping cost for your parcel 35$");
//   } else if (destination == "international") {
//     console.log("shipping cost for your parcel 70$");
//   }
// }

// 3

// let units = Number(prompt("enter electricity units: "));
// let bill = 0;
// if (units <= 100) {
//   console.log(`electricity bill is ${units * 1}`);
// } else if (units > 100 && units <= 300) {
//   bill = units - 100;
//   console.log(`electricity bill is ${bill * 1.5 + 100}`);
// } else if (units > 300) {
//   bill = units - 100;
//   console.log(bill);
//   console.log(bill * 2);
//   console.log(100 * 1.5);
//   console.log(`electricity bill is ${bill * 2 + 100 * 1.5}`);
// }

// let units = Number(prompt("enter the number of units used:"));

// if (units <= 100) {
//   console.log(`the electricity bill for the used units is: ${1 * units}`);
// } else if (units > 100 && units <= 300) {
//   console.log(
//     `the electricity bill for the used units is: ${100 + 1.5 * (units - 100)}`
//   );
// } else if (units > 300) {
//   console.log(
//     `the electricity bill for the used units is: ${
//       100 + 300 + 2 * (units - 300)
//     }`
//   );
// } else {
//   console.log("invalid input");
// }
// let units = Number(prompt("enter the number of units used:"));

// if (units <= 100) {
//   console.log(`the electricity bill for the used units is: ${1 * units}`);
// } else if (units > 100 && units <= 300) {
//   console.log(
//     `the electricity bill for the used units is: ${100 + 1.5 * (units - 100)}`
//   );
// } else if (units > 300) {
//   console.log(
//     `the electricity bill for the used units is: ${
//       100 + 300 + 2 * (units - 300)
//     }`
//   );
// } else {
//   console.log("invalid input");
// }
