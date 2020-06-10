"use strict";

/*
Causes read more button to show read less when clicked, and vica versa. 
*/
$("#intro-button-one").click(function () { 
  $("#intro-more-one").slideToggle(200);
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
});

/*
Causes read more button to show read less when clicked, and vica versa. 
*/
$("#intro-button-two").click(function () { 
  $("#intro-more-two").slideToggle(200);
  if ($(this).text() === "Read more") {
    $(this).text("Read less");
  }
  else {
    $(this).text("Read more");
  }
});

/*
Button handlers for modals and close symbols. Works by setting display to none or block.
*/
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

/*
Closes modal by clicking anywhere.
*/
$("#vigenere-modal").click(function () {
  $(this).css("display", "none");
});

$("#cesar-modal").click(function () {
  $(this).css("display", "none");
});

 

