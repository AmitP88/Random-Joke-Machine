$(document).ready(function() {
    var joke = '';
    $("#generate").on("click", function() {
        $.getJSON("https://official-joke-api.herokuapp.com/random_joke", function(json) {
            joke = json.setup + " " + json.punchline;
            $(".setup").html("Joke : " + JSON.stringify(json.setup));
            $(".punchline").html("Punchline : " + JSON.stringify(json.punchline));
            $(".twitter-share-button").attr('href', 'https://twitter.com/intent/tweet?text='+joke).attr('target', '_blank');
          });
    });
});
