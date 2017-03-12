// business logic
var pingPong = function(userInput) {
  var numberArray = [];
  for (var number = 1; number <= userInput; number++) {
    // if (isNaN(userInput)) {
    //   alert("Please enter a number.");
    if (userInput % 3 === 0) {
      numberArray.push("ping");
    } else if (userInput % 5 === 0) {
      numberArray.push("pong");
    } else if (userInput %15 === 0) {
      numberArray.push("ping-pong");
    } else {
       numberArray.push(number);
    };

  };
// console.log(numberArray);
};




// front-end logic
