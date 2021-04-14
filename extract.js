/* We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */

function extractCurrencyValue(str) {
    let count = 0
    for ( let key of str ) {
        if ( !isNaN(key) ) {
            return +str.slice(count);
        } else {
            count+=1
        }
    }
}