"use strict";

/*
Causes read more button to show read less/read more and display/hide hidden section when clicked. 
*/
$(".read-more").click(function () { 
  let hiddenTextId = this.getAttribute("data-display");
  $(hiddenTextId).slideToggle(200);
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
$(".modal-trigger").click(function () {
  let modalId = this.getAttribute("data-open");
  $(modalId).css("display", "block");
});

$(".close").click(function () {
  let modalId = this.getAttribute("data-open");
  $(modalId).css("display", "none");
});

$(".modal").click(function () {
  $(this).css("display", "none");
});



 

