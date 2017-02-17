var generateUrl = function(domain, page, query) {
    var protocol = 'http://';
    var parsedQuery = JSON.parse(query);
    var convertedQuery = '?';
    Object.keys(parsedQuery).map(function(key) {
        convertedQuery += key + '=' + parsedQuery[key] + '&';
    });
    return encodeURI(protocol + domain + page + convertedQuery.slice(0, -1));
};

console.log(generateUrl('w4.uqo.ca', '/calc.cgi', '{"q": "a b c"}'));
console.log(generateUrl('w4.uqo.ca', '/calc.cgi', '{"q": "a b c", "id": "3"}'));