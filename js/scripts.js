// business logic
var pingPong = function(userInput) {
  var numberArray = [];
  for (var number = 1; number <= userInput; number++) {
    if (userInput = NaN) {
      alert("Please enter a number.");
    } if (userInput % 3 === 0) {
      numberArray.push("ping");
    } else if (userInput % 5 === 0) {
      numberArray.push("pong");
    } else if (userInput %15 === 0) {
      numberArray.push("ping-pong");
    } else {
       numberArray.push(number);
    };
  };
  return numberArray;
// console.log(numberArray);
};


// front-end logic
$(document).ready(function() {
  $("#number-count").submit(function(event) {
    event.preventDefault();

    var userInput = parseFloat($("#input")).val();
    console.log(userInput);
    var output = pingPong(userInput);
    // console.log(output);
    // $("#result").text(output);


  });
});
