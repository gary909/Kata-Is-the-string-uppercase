String.prototype.isUpperCase = function() {
    // your code here
}

console.log(isUpperCase('')); // return 'Undefined'
console.log(isUpperCase('c is not upper case')); // return false
console.log(isUpperCase('C is upper case')); // return true
console.log(isUpperCase('hello I AM DONALD')); // return false
console.log(isUpperCase('HELLO I AM DONALD')); // return true