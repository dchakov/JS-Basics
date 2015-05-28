//Problem 4. Parse tags
//You are given a text. Write a function that changes the text in all regions:
//<upcase>text</upcase> to uppercase.
//<lowcase>text</lowcase> to lowercase
//<mixcase>text</mixcase> to mix casing(random)
//Example: We are  <mixcase>living</mixcase>  in a  <upcase>yellow submarine</upcase> . We  <mixcase>don't</mixcase>  have  <lowcase>anything</lowcase>  else.
//The expected result:
//We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

function changeText(string) {
    resultString = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== '<') {
            resultString += string[i];
        }
        else {
            i++;
            if (string[i] === 'm') {
                i += 8;
                while (string[i] !== '<') {
                    if (Math.round(Math.random())) {
                        resultString += string[i].toUpperCase();
                    }
                    else {
                        resultString += string[i].toLowerCase();
                    }
                    i++;
                }
                i += 10;
            }
            if (string[i] === 'u') {
                i += 7;
                while (string[i] !== '<') {
                    resultString += string[i].toUpperCase();
                    i++;
                }
                i += 9;
            }
            if (string[i] === 'l') {
                i += 8;
                while (string[i] !== '<') {
                    resultString += string[i].toLowerCase();
                    i++;
                }
                i += 10;
            }
        }
    }
    return resultString;
}
var textTags = "We are  <mixcase>living</mixcase>  in a  <upcase>yellow submarine</upcase> . We  <mixcase>don't</mixcase>  have  <lowcase>AnyThing</lowcase>  else.";

function parseTags() {
    console.log(textTags);
    console.log(changeText(textTags));
}