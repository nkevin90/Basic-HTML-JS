var personName = "Kelvin Njenga";
var regNumber = "BBIT/MG/0908/05/18";

document.write("<h1>" + personName + "<pre>" + regNumber + "</h1>");

function largesstnum()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("numberfunction").value);
				num2 = Number(document.getElementById("numbersum").value);
                num3 = Number(document.getElementById("numbertr").value);

				if(num1>num2 && num1>num3)
				{
				
                    document.write("<h1>"+num1+" is larger"+"</h1>");
				}
				else if(num2>num1 && num2>num3)
				{
				
                    document.write("<h1>"+num2+" is larger"+"</h1>");
				}
				else(num3>num1 && num3>num2)
				{
			
                    document.write("<h1>"+num3+" is larger"+"</h1>");
				}
			}
//if satements to compare two numbers and display which number is larger
var x=4;
var y=7;
if(x>y){
  document.write("The first number " + x + " is greater than" + " the second number:" +y);
}else{
  document.write("The second number " + y+ " is greater than " +" the first number" + x);
}
//
function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}

function run(){
  var val;
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+numberSum(val)
  }