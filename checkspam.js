/* Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. */

function checkSpam(str) {
    if ( !str ) {
        return 'empty string'
    }
    let convert = str.toLowerCase();
    if ( convert.includes('viagra') || convert.includes('xxx')  ) {
        return true;
    } else {
        return false;
    }
}

