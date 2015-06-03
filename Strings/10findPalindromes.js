//Problem 10. Find palindromes
//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

function searchForPalindromes(string) {
    var result = [],
        arrWords,
        i;
    arrWords = string.split(/[\s,".]+/);
    for (i in arrWords) {
        if (arrWords[i].split('').reverse().join('') === arrWords[i]) {
            if (arrWords[i].length !== 1 && arrWords[i].length !== 0) {
                result.push(arrWords[i]);
            }
        }
    }
    return result;
}
//var stringPalindromes = 'Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".';
var stringPalindromes = 'Palindromes are very interesting words. Examples for palindromes are ABBA, lamal, exe, rotor. These words can be read the same way in either direction. Other examples -> level, racecar, deed, civic, nun, pop, eye, madam';

function findPalindromes() {
    console.log(stringPalindromes);
    console.log(searchForPalindromes(stringPalindromes));
}