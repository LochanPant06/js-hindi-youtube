// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // front se element add kar dega 
// myArr.shift()     // front se element remove kar dega 

// console.log(myArr.includes(9));  //check karta hai ke ye element present hai ke nahi
// console.log(myArr.indexOf(3));    // is index pe jo bhi element hai uske value de dega 

// const newArr = myArr.join()     //perticular array ko string mai convert karta hai or saare element ke beech mai ek comma laga deta hai
// const newArr = myArr.join()

The join() method combines all elements of the array into a single string, separated by commas by default.

So, [0,in() will produce the string:
"0,1,2,3,4,5"


// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// .slice(start, end) creates a new array, starting from start index (inclusive) up to end index (exclusive), and does NOT modify the original array.

console.log(myn1);
console.log("B ", myArr);
// B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
