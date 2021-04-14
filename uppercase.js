/* Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance: */


function ucFirst(str) {
    if (!str) return str;
    return ucFirst[0].toUpperCase() + ucFirst.slice(1);
}

