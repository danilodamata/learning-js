/* Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. */

function checkSpam(str) {
    if ( !str ) {
        return 'empty string'
    }
    
    let convert = str.toLowerCase();
    return convert.includes('viagra') || convert.includes('xxx'); 
}