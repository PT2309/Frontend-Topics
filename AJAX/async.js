// window.onload = function(){

//     // /* HTTP Request Methods
//     //     GET - get some data, retrieve 
//     //     POST - it is going to post 
//     //     PUT - updating the data
//     //     DELETE - delete 
//     // */

//     var http = new XMLHttpRequest(); // AJAX Request

//     http.onreadystatechange = function(){
//         // console.log(http);
//         if ( http.readyState === 4 && http.status === 200){
//             console.log(JSON.parse(http.response));
//         }
        
//     }

//     http.open("GET", "data/message.json", true); 
//     http.send();
//     console.log('Testing');

//     // /* Ready State 
//     //     0 - request not initialized
//     //     1 - request has been setup
//     //     2 - request has been sent
//     //     3 - request is in process
//     //     4 - request is complete
//     // */

//     $.get("data/message.json", function(data){
//         console.log(data.message[2].greeting);
//     })
// }

// Callbacks 

window.onload = function(){

    function handleError(jqXHR, errorText, error){
        console.log(error);
    }

    $.ajax({
        type: "GET",
        url: "data/message.json",
        success: callbackMessage,
        error: handleError
    })

    function callbackMessage(message){
        console.log(message);
        $.ajax({
            type: "GET",
            url: "data/sports.json",
            success: callbackSports,
            error: handleError
        })
    }

    function callbackSports(sport){
        console.log(sport);
        $.ajax({
            type: "GET",
            url: "data/books.json",
            success: function(books){
                console.log(books);
            },
            error: handleError
        })
    }

    console.log("Requesting through Ajax .....")
}