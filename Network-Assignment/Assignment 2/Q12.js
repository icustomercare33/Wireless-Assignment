function isRegExp(val) {
    return val instanceof RegExp;
}

console.log(isRegExp(/abc/));
console.log(isRegExp("abc"));
