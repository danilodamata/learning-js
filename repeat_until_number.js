/* Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */

function readNumber() {
    num = prompt('Enter a number: ') // return null if cancel is clicked
    while ( !isFinite(num) ) {
        num = prompt('Enter a number: ')
    }
    if (num === null || num === '') {
        return null
    } else {
        return +num
    }
}