// Change button to active when clicked
// $(".category-button").click(function() {
//   $(".category-button").removeClass("active");
//   $(this).addClass("active");
// });


// Makes variables for button and page content 
var $categoryButton = $(".category-button");
var $pageContent = $(".page-content");

// Hide all page content shows first one
$(".page-content")
  .hide()
  .first()
  .show();

// When button is clicked, show content 
$categoryButton.on("click", function(e) {
var $category = $(this).data("target");
  $pageContent
    .hide()
    .find('img').hide()
    .end()
    .filter("." + $category)
    .show()
    .find('img').fadeIn();
});


(function($) {
  $('.nav_modal .li_modal').click(function() {
    $(this).addClass('.active').siblings('.li_modal').removeClass('.active');
    $('.section_modal:nth-of-type('+$(this).data('rel')+')').stop().fadeIn(400, 'linear').siblings('.section_modal').stop().fadeOut(400, 'linear'); 
  });
})(jQuery);

// Popover

$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
     trigger: 'hover',
         html: true,
         content: function () {
       return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
         },
   }) 
});