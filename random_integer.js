/* Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
Any number from the interval min..max must appear with the same probability. */

function randomInteger(min, max) {
    let num;
    num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
}
