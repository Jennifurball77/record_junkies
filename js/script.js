// yoda

// $(".text_process").click(function(){

//     $.ajax({
//         url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
//         type: 'GET', // The HTTP Method
//         data: {sentence: $("#yoda_input").val()}, // Additional parameters here
//         datatype: 'json',
//         success: function (data) {
//             $("#output").html(data);
//         },
//         error: function (err) {
//             alert(err);
//         },
//         beforeSend: function (xhr) {
//             xhr.setRequestHeader("X-Mashape-Key", "GDf6bxPUe5mshZkCs6PCt3qAPoYPp1CvcVDjsnxkdfZnkinAY6"); // Enter here your Mashape key
//         }
//     });

// });

// InstaTunes Pluggin:

$(".text_process").click(function(){

    var artist = $("#tunes_input").val();

    var queryURL = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";

    $.ajax({url: queryURL, method: 'GET'})
    .done(function(response) {
        if(response.length <1) {
            $("#output").html("Sorry, no artist was found : (");
        } else {
            $("#output").html(JSON.stringify(response.artists.items[0]));
            console.log(response);
            console.log(response.artists.items[0]);
        }
        // var artistContainer = $('<div class="artist_Container">');
        // $(".pretty_artist_output").append(artistContainer);

        // for(var prop in response) {
        //     var element;
        //     if (prop == "Artist" && response[prop] != "N/A") {
        //         element = $("<img class='artist'>").attr("src", response[prop]);
        //     } else {
        //         element = $("<h3 class='artist'>").text(prop + ": " + response[prop]);
        //     }
 
        //     artistContainer.append(element);
        // }
    });

});

// search bar

 function sendToPage(){
                var input = document.getElementById("search").value;
                 //alert(input);
                if (input == "moonshine stalkers"){
                    location.href = "search.html";
                    return false;
                }
                else if (input == "moonshine stalkers"){
                    location.href = "search.html";
                    return false;
                }
                else {
                    alert('Invalid Input.');
                }
                    }

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
