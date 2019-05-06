$(document).ready(function() {
  $(".col-md-4").click(function() {
    $(this).children(".text-showing").toggle();
    $(this).children(".text-hidden").toggle();
  });
});



