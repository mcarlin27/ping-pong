// business logic
var pingPong = function(userInput) {
  var numberArray = [];
  for (var number = 1; number <= userInput; number++) {
    numberArray.push(number);
  }
  var pingPongArray = [];
numberArray.forEach(function(number) {
  if (number === NaN) {
      alert("Please enter a number.");
    } if ((number %15) === 0) {
      pingPongArray.push("ping-pong");
    } else if ((number % 5) === 0) {
      pingPongArray.push("pong");
    } else if ((number % 3) === 0) {
      pingPongArray.push("ping");
    } else {
       pingPongArray.push(number);
    };
  });
  return pingPongArray;
// console.log(pingPongArray);
};


// front-end logic
$(document).ready(function() {
  $("#number-count").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#input").val());
    var output = pingPong(userInput);

    $("#result").text(output);
    $("#result").show();
    

  });
});
