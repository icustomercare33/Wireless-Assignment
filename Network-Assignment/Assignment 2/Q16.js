function parseURL(urlString) {
    return new URL(urlString);
}

console.log(parseURL("https://www.example.com/path?name=test#section"));
