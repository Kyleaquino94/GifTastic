$("button").on("click",function(){
    var x = $(this).data("search");

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +x+"&api_key=MqJVanYmmelhaWTdFZjzfXMnHUt3WAzb&limit=10";
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function(response){
        console.log(response.data[0].rating);
        for (var i=0; i<response.data.length; i++){
         
        $("#GIFArea").prepend("<p>Rating: "+response.data[i].rating + "</p>");
        $("#GIFArea").prepend("<img src='" + response.data[i].images.downsized. url + "'>");
        }
        
    })
    
})

