//number 2 of the exercise.
//Checks two numbers and displays which number between them is large
function myFunction() {
  var number1 = prompt("enter your 1st number");
  var number2 = prompt("enter your 2nd number");
  if (number1 > number2) {
    document.getElementById("demo").innerHTML =
      "Your first input: " + number1 + " is larger";
  } else {
    document.getElementById("demo").innerHTML =
      "Your last input: " + number2 + " is larger";
  }
}

//number 3 of the exercise.
//this code display the largest number between three numbers entered by the user
function amazing() {
  var number1 = prompt("enter your 1st number");
  var number2 = prompt("enter your 2nd number");
  var number3 = prompt("enter your 3rd number");
  if (number1 > number2 && number1 > number3) {
    document.getElementById("large").innerHTML =
      "the first input: " + number1 + " is larger";
  } else if (number2 > number1 && number2 > number3) {
    document.getElementById("large").innerHTML =
      "the second input: " + number2 + " is larger";
  } else {
    document.getElementById("large").innerHTML =
      "the last input: " + number3 + " is larger";
  }
}

//number 4a of the exercise:
//display day of the week using the if-else ladder
function display() {
  var currentDay = new Date().getDay();
  if (currentDay == 0) {
    document.getElementById("wow").innerHTML = "wow today is Sunday";
  } else if (currentDay == 1) {
    document.getElementById("wow").innerHTML = "wow today is Monday";
  } else if (currentDay == 2) {
    document.getElementById("wow").innerHTML = "wow today is Tuesday";
  } else if (currentDay == 3) {
    document.getElementById("wow").innerHTML = "wow today is Wednesday";
  } else if (currentDay == 4) {
    document.getElementById("wow").innerHTML = "wow today is Thursday";
  } else if (currentDay == 5) {
    document.getElementById("wow").innerHTML = "wow today is Friday";
  } else {
    document.getElementById("wow").innerHTML = "wow today is Saturday";
  }
}

//number 4b of the exercise:
//display day of the week using the switch case statement
function date() {
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById("trial").innerHTML = "Today is " + day;
}

//number 5a of the exercise:
//using for statement to find the sum of number 1-10
function node() {
  var user = 10;
  var sum = 0;
  for (var i = 1; i <= user; i++) sum = sum + i;
  document.getElementById("sugar").innerHTML =
    "sum of numbers 1 to 10 is: " + sum;
}

//number 5b of the exercise:
//using while statement to find sum of number 1-10
function tea() {
  var total = 0;
  var user = 10;
  var i = 1;
  while (i <= user) {
    total += i;
    i++;
  }
  document.getElementById("add").innerHTML =
    "The total sum of numbers 1 to 10 is: " + total;
}

//number 5c of the exercise.
//using do while statements to find sum of number 1-10
function add() {
  var sum = 0;
  var user = 10;
  var i = 0;
  do {
    sum = sum + i;
    i++;
  } while (i <= user);
  document.getElementById("test").innerHTML =
    "Sum total of numbers 1 to 10 is: " + sum;
}

//number 5a of the exercise:
//using for statement to find the sum of number 1-10
function baby() {
  var user = 10;
  var sum = 0;
  for (var i = 0; i < user; i += 2) sum = sum + i;
  document.getElementById("moo").innerHTML =
    "sum of even numbers between 1 and 10 is: " + sum;
}
