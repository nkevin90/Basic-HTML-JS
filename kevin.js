var personName = "Kelvin Njenga";
var regNumber = "BBIT/MG/0908/05/18";

document.write("<h1>" + personName + "<pre>" + regNumber + "</h1>");
var number1=1;
var number2=60;
if(number1>number2)
  document.writeline("<p>"+number2)

var hour = new Date().getHours(); 
var greeting;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("firstid").innerHTML = greeting;
