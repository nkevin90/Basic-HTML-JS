var personName = "Kelvin Njenga";
var regNumber = "BBIT/MG/0908/05/18";

document.write("<h1>" + personName + "<pre>" + regNumber + "</h1>");
//check largest number between 3 numbers
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
				else(num3>num1 && num3>num2)
				{
			
                    document.write("<h2>"+num3+" is larger"+"</h2>");
				}
			}
function load(){
  var value;
  value =document.getElementById("value").value;
  document.getElementById("numbers").innerHTML=value+": "+largestnum(value)
  }

//function statement to calculate nnumbers between 1 to 10
function numberSum() {
  var total = 0;
    for(var i = 1; i <= 10; i++){
      total += i;
    }
    return total;
}

function run(){
  var val;
  val =document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+numberSum(val)
  }
