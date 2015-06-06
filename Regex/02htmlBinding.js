//Problem 2. HTML binding
//Write a function that puts the value of an object into the content/attributes of HTML tags.
//Add the function to the String.prototype

if (!String.prototype.bind) {
    String.prototype.bind = function (str,obj) {
        var pattern,
            result,
            prop;
        for (prop in obj) {

        }
        return result;
    }
}

var str01 = '<div data-bind-content="name"></div>';
var str02 = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>';

function regular02() {
    console.log(str01.bind(str01, { name: 'Steven' }));
    console.log(str02.bind(str02, { name: 'Elena', link: 'http://telerikacademy.com' }));
}