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

function blinkingText() {
  if ($("#start-game-btn").hasClass("dark-green")) {
    $("#start-game-btn").removeClass("dark-green").addClass("light-green");
  }
  else {
      $("#start-game-btn").removeClass("light-green").addClass("dark-green");
  }
}

setInterval(blinkingText, 500);