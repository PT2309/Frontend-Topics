// // Object Literals

// let user = {
//     name: 'Harry',
//     age: 23,
//     location: 'Hogsmead',
//     hobbies: ['Sports', 'Reads', 'Writes', 'Movies'],
//     login(){
//         console.log(`${this.name} has logged in!!!` );
//     },
//     logout(){
//         console.log('User has logged out!!');
//     },
//     logHobbies() {
//         console.log('The hobbies of the user is:');
//         // this keyword
//         this.hobbies.forEach( (hobby, index) => {
//             console.log(`${index+1} - ${hobby}`);
//         })
//     },
//     logBlogs(){
//         this.blogs.forEach( blog => {
//             console.log(blog.title, blog.likes)
//         });
//     }
// }; // array - [], object - {}

// user.email = 'harry@hogwarts.com'; // this - window

// const blogs = [ 
//     { 
//         title: 'How to kill voldemort', 
//         likes:50
//     }, 
//     {
//         title: 'How to catch snitch',
//         likes: 20
//     } 
// ];


// // console.log(blogs);

// user.blogs = blogs;

// user.logBlogs();

// console.log(user);


// Math Object

// const value = 9.7;

// console.log(Math.round(value));
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.trunc(value));

// const random= Math.random(); //0 - 1

// console.log(Math.floor(2 * random)); 


// Primtive Datatype

// let pointOne = 23;
// let pointTwo = pointOne;

// console.log('Point One:', pointOne);
// console.log('Point Two:', pointTwo);

// pointOne =50;

// console.log('Point One after updating:', pointOne);
// console.log('Point Two:', pointTwo);

// Reference Datatype

// const userOne = { name: 'Jon', age: 23 };
// const userTwo = userOne;

// console.log('User One', userOne);
// console.log('User Two', userTwo);

// userOne.age = 24;

// console.log('User One after update', userOne);
// console.log('User Two without update', userTwo);


