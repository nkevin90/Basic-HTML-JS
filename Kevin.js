var personName = "Kelvin Njenga";
var regNumber = "BBIT/MG/0908/05/18";

document.write("<h1>" + personName + "<pre>" + regNumber + "</h1>");

//if satements to compare two numbers and display which number is larger
var x=4;
var y=7;
if(x>y){
  document.write("The first number " + x + " is greater than" + " the second number:" +y);
}else{
  document.write("The second number " + y+ " is greater than " +" the first number " + x);
}

//this code display the largest number between three numbers
function largestnum()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("numberfunction").value);
				num2 = Number(document.getElementById("numbersum").value);
        num3 = Number(document.getElementById("numbertr").value);
      

				if(num1>num2 && num1>num3)
				{let
				 hey=document.write("<h2>"+num1+" is larger"+"</h2>");
				}
				else if(num2>num1 && num2>num3)
				{let
				hey=document.write("<h2>"+num2+" is larger"+"</h2>");
				}
				else if(num3>num1 && num3>num2)
				{let
			hey=document.write("<h2>"+num3+" is larger"+"</h2>");
				}
			}
//sum of the first 10 natural numbers
function numberSum() {
  var total = 0;
    for(var i = 1; i <= 10; i++){
      total += i;
    }
    return total;
}

function run(){
  let
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+numberSum(val)
  }
