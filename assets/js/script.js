$("#intro-button-one").click(function () { //Read more/less functionality for 1st paragraph
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
  $("#intro-more-one").slideToggle(200);
});

$("#intro-button-two").click(function () { //Read more/less functionality for 2nd paragraph
  $("#intro-more-two").slideToggle(200);
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
});

$("button").hover(function(){
  $(this).css("background-color", "#000");
  }, function(){
  $(this).css("background-color", "#252525");
});

//-------------------- Modals opening and closing functionality -----------------------
// Get the modal
var modal = document.getElementById("cesar-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-cesar-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//This function is called on page load. It makes the game start button blink by removing and adding classes 

function blinkingText() {
  if ($("#start-game-btn").hasClass("dark-green")) {
    $("#start-game-btn").removeClass("dark-green").addClass("light-green");
  }
  else {
      $("#start-game-btn").removeClass("light-green").addClass("dark-green");
  }
}

setInterval(blinkingText, 500);