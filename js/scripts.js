$(document).ready(function() {
  $("form #convert").submit(function(event){
    event.preventDefault

      var userNumber = parseInt($("input#numberChoice").val());
      var result = beepBoop(userNumber);

      $("#answerList").text(result);

      var beepBoop = function(userNumber){
        for(var i = 0; i <= userNumber; i++) {
          if (userNumber )
        }
      }
  });
});
