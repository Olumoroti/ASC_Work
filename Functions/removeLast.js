function removeLast(array) {
    let last = array[array.length - 1];
    array.length = [array.length - 1]; // not me' thinking
    return last;

}

let testArray = [1, 2, "3", false, 5];

console.log(removeLast(testArray));

console.log(testArray);
console.log(testArray.length);