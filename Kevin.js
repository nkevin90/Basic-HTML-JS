//number 1 of the exercise: both a and b
//This code displays the name of a student and the registration number
var personName = "Kelvin Njenga";
var regNumber = "BBIT/MG/0908/05/18";
document.write("<h1>" + personName + "<pre>" + regNumber + "</h1>");


//number 2 of the exercise.
//Checks two numbers and displays which number between them is large
function myFunction() {
  var input;
  var number1 = prompt("enter your 1st number");
  var number2=prompt("enter your 2nd number");
  if (number1>number2) {
    document.getElementById("demo").innerHTML="the first number: "+number1+" is larger";
  } else {
    document.getElementById("demo").innerHTML="the second number: "+number2+" is larger";
  }
  
}


//number 3 of the exercise
//this code display the largest number between three numbers entered by the user
function amazing(){
  var input;
  var number1 = prompt("enter your 1st number");
  var number2=prompt("enter your 2nd number");
  var number3=prompt("enter your 3rd number");
  if (number1>number2 && number1>number3) {
    document.getElementById("large").innerHTML="the first number: "+number1+" is larger";
  } else if(number2>number1 && number2>number3){
    document.getElementById("large").innerHTML="the second number: "+number2+" is larger";
  }else {
    document.getElementById("large").innerHTML="the third number: "+number3+" is larger";
  }
}
  

//number 4b of the exercise:
//display day of the week
function date(){
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
  case  6:
    day = "Saturday";
}
document.getElementById("trial").innerHTML = "Today is " + day;
}
