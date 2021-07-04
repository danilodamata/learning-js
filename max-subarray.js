
function maxSubSum(array) {
    let max_global = array[0];
    let max_current = array[0];

    for ( let i = 1; i < array.length; i++) {
        max_current = Math.max( array[i], max_current + array[i] )
        if ( max_current > max_global ) {
            max_global = max_current;
        }
    }

    return max_global;
}
