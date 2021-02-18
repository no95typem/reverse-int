module.exports = function reverse (n) {
    if(n<0) n*=-1;
    let nString = String(n);
    let reversedString = "";
    for(let i = nString.length; i >= 0; i--) reversedString+=nString.charAt(i);
    return +reversedString;
}
