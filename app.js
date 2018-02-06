$(document).ready(function() {

    $("#generate").on("click", function() {

        $.getJSON("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke", function(json) {
            $(".quote").html(JSON.stringify(json));
          });





    });






















});