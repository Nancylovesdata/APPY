var firstName= "Michael"; // firstname is a word
var lastName=  "Freeman- Arthur"
var age= 9 // age is a number
// combining the first and the last name
//let fullName = firstName + ' ' + lastName;


// Another way of combining first name and last name
let fullName = `${firstName} ${lastName}`
console.log(fullName);

let a = 56;
let b = 43
let result= `${a} + ${b} = ${a+b}`;
console.log(result)


//Using datatype constant
const boilingWaterTemperature= 100;

let areYouHappy = true;
// Object, color is the key, black is the value
let phone = {color: "black", makeACall: null}


// == is a js comparison symbol
if( age == 18){console.log(`Welcome to ttt`)}
 else {console.log(`This Page is not for you oo`)}

 // Loops: Realised the i+1 can be written as i++
 for (let i=1; i !=8; i++){
    console.log('the value if i is ',i);
 }

//  for (let i=1; i<=8; i++){
//     console.log('the value if i is ',i);
//  }

//functions- Defining functions
// function isEligible(){
//     if( age == 18){console.log(`Welcome to ttt`)}
//     else {console.log(`This Page is not for you oo`)} 
// }

// //Function-Invoking
// isEligible();


//functions- Defining functions
// function isEligible(){
//     if( age == 18){return}
//     else {console.log(`This Page is not for you oo`)} 
//  }


console.log("We are using GIT!");