$(document).ready(function() {
  $(".col-md-4").click(function() {
    $(this).children(".text-showing").toggle();
    $(this).children(".text-hidden").toggle();
  });
  $("#submit").click(function(event){
    var dataName =$("#name1").val();
    alert("Thank you" + dataName + "for reaching out to us");
    event.preventDefault();
  });
  $(".hover").fadeOut(500);
  $(".col-md-3").hover(function(){
    $(this).children(".hover").toggle(500);
  });
});





