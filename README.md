# GIFTASTIC

Creating a website using the GIPH API

# NBA Theme Giphy:

Type in any favorite basketball team of your choice in the submit box and watch the Giphs appear related to the data the user type.  


# This assignment was built with:
  -HTML
  -Javascript
  -Jquery
  -ajax
  -giphy api
  -css
  
# Installation

Download your GIPHY Developer app. Manage your apps, create your app and sign in to get your API Key.

# Usage

Set the API version and api_key.

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=bKRakmKXT6210rxtpqBRT0Qi7xZgBdLE&limit=10";
Syntax for Ajax call:

$.ajax({
url: queryURL,
method: "GET"
}).then(function (response) {
console.log(queryURL);
console.log(response);

var result = response.data;
}

# Important:

Giphy API is currently in public beta. Unless version and api_key are set to specific values the default values for the beta period will be used. Check Giphy's API for updates.

That's it, you're ready to have fun!
  
