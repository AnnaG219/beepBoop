$(document).ready(function() {
  $("#translate").submit(function(event) {
    event.preventDefault();
    var result = ["Beep","Boop","I'm sorry Dave, I'm afraid I can't do that."]
    $("#translatedList").text("");

    var name = $("#userName").val();
    var userNumber = parseInt($("#userNum").val());

    if (name === "" || $("#userNum").val() === "" ) {
      alert("Sorry, you have to type in your name, or any name, and a number, any number!")
      return;
    }

    for (var i = 0; i <= userNumber; i++) {
      var displayText = String(i);
      if (displayText.indexOf("3") !== -1) {
        displayText = result[2].replace("Dave", name);
      }
      else if (displayText.indexOf("2") !== -1) {
        displayText = result[1];
      }
      else if (displayText.indexOf("1") !== -1) {
        displayText = result[0];
      }

      $("#translatedList").append("<p> " + displayText + "</p>");
    }
  });
});
