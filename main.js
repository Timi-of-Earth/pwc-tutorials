//Data types
// let name = "Timi"; // String
// let age = 24; //Number
// let z = null; //Null
// let y = undefined; //undefined
// let isMarried = false; //Boolean
// let favColor = ["blue", "grey", "black", "green", "red"]

//console.log(age);
// console.log(typeof isMarried);
// console.log(typeof y);

//Strings
// let s = "Hello World";
// console.log(s.length)

// Concatenation
// let m = "I am";
// let n = "I go to PWC Bootcamp";
//let p = "I love to learn Javascript";
// console.log(m + " " + name + " " + "and " + n + ". " + p);

// console.log(`${m} ${name} and ${n}. ${p}`);

// console.error('This is an error');
// console.warn('This is a warning')

// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('mango', 'strawberry')
// fruits.pop();
// fruits.shift();
// fruits.unshift('grape')
// fruits[4] = 'guava';
// console.log(fruits);


// const person = {
//     firstName: 'Timi',
//     age: 24,
//     hobbies: ['Reading', 'Music'],
//     height: 189,
//     idMarried: false
// };


let someWord = "Adamu";
let someArray = ['a', 'b', 'c', 'd', 'e', 'f']
//console.log(someArray.reverse());

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

// const palindromeChecker = (str) => {
//     let reverse = str.split('').reverse().join('');
//     if (reverse === str) {
//         return `${str} Is a palindrome`
//     } else {
//         return `${str}is not a palindrome`
//     }
// };


const intPalindrome = (num) => {
    let toString = num.toString();
    let reversed = toString.split('').reverse().join('');
    if (toString === reversed) {
        return `${toString} is a palindrome`
    } else {
        return `${toString} is not a palindrome`
    }
}

console.log(intPalindrome(141141))