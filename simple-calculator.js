let calculator = {
    read() {
        this.a = +prompt('Value 1:');
        this.b = +prompt('Value 2:');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());