// for loop

// for(let i=0; i < 5; i++){
//     // block of code that gets exceuted
//     console.log('In Loop :', i);
// }

// console.log('Outside loop!')

// const names = ['snoopy', 'goofy', 'scooby']

// for(let i=0; i < names.length; i++){
//     let html= `<h3>${names[i]}</h3>`;
//     console.log(html);
// } 

// While loop

// const names = ['snoopy', 'goofy', 'scooby'];

// let i = 0;

// while(i < names.length){
//     //block of code
//     console.log(names[i]);
//     i++;
// }

// do while loop

// let i = 3;

// do{
//     console.log(i);
//     i++;
// }while( i < 5)


// If else statement
// console.log(names);
// if(names.length > 3){
//     console.log('We have many dog names');
// }

// Logical Operators- AND && and OR ||
// let password = 'pass1234';

// if(password.length >= 10 && password.includes('@')){
//     console.log('Your password is super strong enough!!!')
// }else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('Your password is strong enough!!');
// }else{
//     console.log('Your password is not long enough!!')
// }

// LOGICAL NOT !

// let user = false;

// if(!user){
//     console.log('Please log in');
// }

// Break and continue.

// const points = [50, 25, 60, 0, 100, 30, 70];

// for(let i=0; i < points.length; i++){
//     if(points[i] === 0){
//         continue;
//     }
//     console.log('Your Points: ', points[i])
//     if (points[i] === 100){
//         console.log('You won');
//         break;
//     }   
// }

// console.log('Game over!');


// Switch Case

// const grade = '50';

// switch(grade){
//     case 50:
//         console.log('You have secured A grade');
//         break;
//     case 'B':
//         console.log('You have secured B grade');
//         break;
//     case 'C':
//         console.log('You have secured C grade');
//         break;
//     case 'D':
//         console.log('You have secured D grade');
//         break;
//     case 'E':
//         console.log('You have secured E grade');
//         break;
//     default:
//         console.log('Invalid Grade');
// }

// Variable & Scope

let age = 30; // Global variable
// let condition= 0;

if(true){
    let age = 40; // local variable
    console.log(age); // 40 
    
    if(true){
        let age = 35; // local variable
        let points = 10;
        console.log(age, points); //(35, 10)
    }
}

 console.log(age, points); // (30,)