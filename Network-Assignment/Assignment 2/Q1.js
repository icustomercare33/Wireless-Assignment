function findWordIndices(str, word) {
    let indices = [];
    let index = str.indexOf(word);
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(word, index + 1);
    }
    return indices;
}

console.log(findWordIndices("hello world hello", "hello"));
