// for(let i=0; i < countries.length; i++){
//     if(countries[i] === 'USA'){
//         console.log(`${countries[i]} - Howdy!!`);
//     }else if(countries[i] === 'Australia'){
//         console.log(`${countries[i]} - Hey Mate !!!`);
//     }else if(countries[i] === 'India'){
//         console.log(`${countries[i]} - Namaste!!!`);
//     }else{
//         console.log('Invalid');
//     }
// }

const countries = ['USA', 'Australia', 'India'];

// // Add new zealand to the array??
// countries.unshift('New Zealand'); // array.length
// console.log(countries.shift());
// // console.log(countries);

let deletedElement = countries.splice(1, 1, 'England');
console.log(countries);
console.log(deletedElement);