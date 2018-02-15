$(document).ready(function() {
    var joke = '';
    $("#generate").on("click", function() {
        $.getJSON("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke", function(json) {
            joke = json.setup + " " + json.punchline;
            $(".setup").html("Question : " + JSON.stringify(json.setup));
            $(".punchline").html("Answer : " + JSON.stringify(json.punchline));
            $(".twitter-share-button").attr('href', 'https://twitter.com/intent/tweet?text='+joke).attr('target', '_blank');
          });
    });
});
