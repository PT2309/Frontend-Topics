window.onload = function(){

    // function get(url){
    //     return new Promise(function(resolve, reject){
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.open("GET", url, true);
    //         xhttp.onload = function(){
    //             if (xhttp.status === 200){
    //                 resolve(JSON.parse(xhttp.response));
    //             } else{
    //                 reject(xhttp.statusText);
    //             }
    //         }
    //         xhttp.onerror =function(){
    //             reject(xhttp.statusText);
    //         }
    //         xhttp.send();
    //     });
    // }

    // var promise = get("data/message.json");

    // promise.then(function(message){
    //     console.log(message);
    //     return get("data/sports.json");
    // }).then(function(sports){
    //     console.log(sports);
    //     return get("data/books.json");
    // }).then(function(books){
    //     console.log(books);
    // }).catch(function(error){
    //     console.log(error);
    // })

    $.get("data/message.json").then(function(message){
        console.log(message);
        return $.get("data/sports.json");
    }).then(function(sports){
        console.log(sports);
        return $.get("data/books.json");
    }).then(function(books){
        console.log(books)
    }).catch(function(error){
        console.log(error);
    })
}

// async and await 