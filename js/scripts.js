$(document).ready(function() {
  $("#convertform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#numberChoiceInput").val());
    var result =(userNumber);
    $("#result").text(result);
    var result = function(userNumber) {
      return false
    }
  });
});

//  var userString = userNumber.toString();
  //  var stringChange = ["Beep","Boop", "I'm sorry Dave, I'm afraid I can't do that."]

      //  userNumber.toString()
      //$("#answerList").text("<li>"+i+"</li>");
    //}
//    }
//  });
