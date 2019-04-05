$(document).ready(function(){

  $("form#convert").submit(function(event){
    event.preventDefault();

      var userNumber = parseInt($("#numberChoiceInput").val());
      var result = beepBoop(userNumber);

    function beepBoop(userNumber){
      for(var i = 0; i <= userNumber.length; i++) {
      //  userNumber.toString()
        $("#answerList").text("<li>"+i+"</li>");
      }
    }
  });
});
