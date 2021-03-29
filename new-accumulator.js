/* create a constructor function that has a property called value
which stores the argument of the constructor
the constructor must have the read method which read a new number and add it to value */

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Type a number:');
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);  