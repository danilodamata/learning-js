/* create a constructor function Calculator that creates objects with 3 methods:
read, sum and mul */

function Calculator() {
  this.read = function () {
    this.a = +prompt('Value 1:');
    this.b = +prompt('Value 2:');
  },

  this.sum = function () {
    return this.a + this.b;
  },

  this.mul = function () {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());