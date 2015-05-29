//Problem 8. Replace tags
//Write a JavaScript function that replaces in a HTML document given as string all the tags  <a href="…">…</a>  with corresponding tags  [URL=…]…/URL] .


function replaceHTMLtags(string) {
    var output = string;
    var counter = 0;
    while (output.indexOf('<a href="', counter) > 0) {
        output = output.replace('<a href="', '[URL=');
        counter++;
    }
    counter = 0;
    while (output.indexOf('">', counter) > 0) {
        output = output.replace('">', ']');
        counter++;
    }
    counter = 0;
    while (output.indexOf('</a>', counter) > 0) {
        output = output.replace('</a>', '[/URL]');
        counter++;
    }
    return output;
}
var htmlDocument = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

function replaceTags() {
    console.log(htmlDocument);
    console.log(replaceHTMLtags(htmlDocument));
    
}