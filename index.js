function isUpperCase(myString) {
    if (myString == '') {
        return undefined;
    } else if (myString == myString.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

console.log(isUpperCase('')); // return 'Undefined'
console.log(isUpperCase('c')); // return false
console.log(isUpperCase('C')); // return true
console.log(isUpperCase('hello I AM DONALD')); // return false
console.log(isUpperCase('HELLO I AM DONALD')); // return true