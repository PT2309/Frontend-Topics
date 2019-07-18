// function declarations

// greeting(); // Invoking or calling a function
// greeting();
// greeting();

// function greeting(){
//     console.log('Good Evening!!');
// }

// function expression



// arguments and parameters
// const greet = function(name='Pratyush', time='Night'){ // name - parameter
//     console.log(`Hi ${name}! Good ${time}`);
// };


// greet('Jyoti'); // Hi Jyoti ! Good Night
// greet('Jyoti', 'Evening'); // argument


// Return values
// const radius = 2; 
// console.log(2 * 3.14 * radius); // 12.56

// const calcPerimeter = function(radius){
//     return perimeter = 2 * 3.14 * radius;
     
// }

// let result = calcPerimeter(2);
// console.log('Radius = 2:', result);

// result = calcPerimeter(4);
// console.log('Radius = 4 :', result);



// Arrow Functions- es6 / ecma15



// const calcPerimeter = (radius = 2) => 2 * 3.14 * radius;

// const result = calcPerimeter();
// console.log(result);


// const greet = function(){
//     return 'Hello!!'
// }

// const result = greet();

// const greet = () => 'Hello'
// const result = greet();

// console.log(result)

// const cart = function(products, tax){
//     let total = 0;
//     for(let i=0; i< products.length; i++){
//         total += products[i] + tax * products[i];
//     }
//     return total;
// }

// const cart = (products, tax) => {
//     let total = 0;
//     for(let i=0; i < products.length; i++){
//         total += products[i] + tax * products[i];
//     }
//     return total;
// }

// console.log(cart([10, 20, 30], 0.10));


// Methods and Functions

// const greet = () => 'Hi there!!';

// const result= greet();
// console.log(result);

// const name = 'Sohaib';
// const resultTwo = name.toUpperCase();

// Callbacks

// const myFunc = (callbackFunction) => {
//     // Something
//     let value = 10;
//     callbackFunction(value); // invoked here
// }

// const callbackFunction = (value) => {
//     console.log(value);
// }

// myFunc(callbackFunction); // passing function as an argument


// forEach

let ul = document.querySelector('.country');

const countries = ['India', 'USA', 'France', 'Germany', 'Brazil'];

let html = ``;

countries.forEach( country => {
    html += `<li style="color:blue">${country}</li>`;
});

// console.log(html);
ul.innerHTML += html;
// console.log(ul);



