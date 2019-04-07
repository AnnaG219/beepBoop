$(document).ready(function() {
  $("#translate").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNum").val());
    var result = ["Beep","Boop","I'm sorry Dave, I'm afraid I can't do that."]

    $("#translatedList").text("");

    for (var i = 0; i <= userNumber; i++) {
      var displayText = String(i);
      if (displayText.indexOf("3") !== -1) {
        displayText = result[2];
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
