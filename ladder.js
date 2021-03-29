/* There’s a ladder object that allows to go up and down
to make the calls chainable, like this:
ladder.up().up().down().showStep(); */

let ladder = {
    step: 0,
    up() {
        this.step++
        return this;
    },
    down() {
        this.step--
        return this;
    },
    showStep: function () { 
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();