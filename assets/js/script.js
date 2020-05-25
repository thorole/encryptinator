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

$("button").hover(function () {
  $(this).css("background-color", "#000");
}, function () {
  $(this).css("background-color", "#252525");
});

//-------------------- Modals opening and closing functionality -----------------------

$("#open-cesar-modal").click(function () {
  $("#cesar-modal").css("display", "block");
});

$(".close").click(function () {
  $("#cesar-modal").css("display", "none");
});

$("#open-vigenere-modal").click(function () {
  $("#vigenere-modal").css("display", "block");
});

$(".close").click(function () {
  $("#vigenere-modal").css("display", "none");
});


window.onclick = function (event) {
  if (event.target == document.getElementById("cesar-modal")) {
    $("#cesar-modal").css("display", "none");
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