
// function clickDiv(){
//     console.log('You clicked inside the div');
// }

// const divArea = document.querySelector('.my-div');

// divArea.onclick = function(){
//     console.log('You clicked the div- by anonymous function');
// }

// function titleDecoration(){
//     const title = document.querySelector('#title');
//     // console.log(title);
//     title.classList.toggle('title');
// }

// add eventListener

const ul = document.querySelector('#sports-list ul');
    
    ul.addEventListener('click', function(event){
        console.log(event.target);
    })