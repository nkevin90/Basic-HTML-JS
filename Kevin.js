var personName = "Kelvin Njenga";
var regNumber = "BBIT/MG/0908/05/18";

document.write("<h1>" + personName + "<pre>" + regNumber + "</h1>");

//if satements to compare two numbers and display which number is larger
function largenumber(){
  var txt;
var number1, number2;
				txt=number1 = Number(document.getElementById("numberfunc").value);
				txt=number2 = Number(document.getElementById("numbertotal").value);
				if(number1>number2)
				{
				 document.write("<h2>"+"the first number "+number1+" is larger"+"</h2>");
				}
				else
				{
				document.write("<h2>"+"the second number "+number2+" is larger"+"</h2>");
				}
}

//this code display the largest number between three numbers
function largestnum()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("numberfunction").value);
				num2 = Number(document.getElementById("numbersum").value);
        num3 = Number(document.getElementById("numbertr").value);
      

				if(num1>num2 && num1>num3)
				{
				 document.write("<h2>"+num1+" is larger"+"</h2>");
				}
				else if(num2>num1 && num2>num3)
				{
				document.write("<h2>"+num2+" is larger"+"</h2>");
				}
				else if(num3>num1 && num3>num2)
				{
			  document.write("<h2>"+num3+" is larger"+"</h2>");
				}
			}

//sum of the first 10 natural numbers


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
//trial
function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}