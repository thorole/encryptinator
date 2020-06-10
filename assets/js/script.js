"use strict";

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


$("#vigenere-modal").click(function () {
  $(this).css("display", "none")
});

$("#cesar-modal").click(function () {
  $(this).css("display", "none")
});

 

