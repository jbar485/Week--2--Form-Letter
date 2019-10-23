$(document).ready(function(){
  $("form").submit(function(event){
    var firstName = $("#first").val();
    var lastName = $("#last").val();

    $("#firstname").text(firstName);
    $("#fullname").text(firstName + ' ' + lastName);

    $("#first").val("");
    $("#last").val("");

    if (firstName != "") {
      $(".card").removeClass("preview").addClass("final");
    } else {
      $(".card").removeClass("final").addClass("preview");
    }

    event.preventDefault();
  });
});
