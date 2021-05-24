const palindromes = function(str) {
    let cleanedString = str.toLowerCase().replace(/[^A-Za-z]/g, "");
    reversed = cleanedString.split("").reverse().join("");
    if (reversed == cleanedString) {
        return true;
    } else return false;
}

module.exports = palindromes