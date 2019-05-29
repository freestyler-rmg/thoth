import { exportSpecifier } from "@babel/types";

/* var calculator = require('./calculator');

var a = 10, b = 5;

console.log("Addition : " + calculator.add(a, b));
console.log("Subtraction : " + calculator.subtract(a, b));
console.log("Multiplication : " + calculator.multiply(a, b)); */



const cmd = () => {
  console.log('test');
}

module.exports = {
  cmd: cmd
}