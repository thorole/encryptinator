$("#intro-button-one").click(function () {
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
  $("#intro-more-one").slideToggle(200);
});

$("#intro-button-two").click(function () {
  $("#intro-more-two").slideToggle(200);
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
});

$("#intro-button-three").click(function () {
  $("#intro-more-three").slideToggle(200);
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
});