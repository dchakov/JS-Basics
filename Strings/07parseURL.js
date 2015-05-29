//Problem 7. Parse URL
//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//Return the elements in a JSON object.



function parserURLAdress(urlAddress) {
	var indexOfDouble = urlAddress.indexOf('//');
    var protocol = urlAddress.substring(0, urlAddress.indexOf(':'));
    var server = urlAddress.substring(indexOfDouble +2, urlAddress.indexOf('/', indexOfDouble+2));
    var resource = urlAddress.substring(urlAddress.indexOf('/', 7));

    var jsonObj = {};
    jsonObj['protocol'] = protocol;
    jsonObj['server'] = server;
    jsonObj['resource'] = resource;
    return jsonObj;
}

var addressURL = "http://telerikacademy.com/Courses/Courses/Details/239";

function parseURL() {
    console.log(parserURLAdress(addressURL));
}
