function timeConvert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${num} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}

console.log(timeConvert(200));
