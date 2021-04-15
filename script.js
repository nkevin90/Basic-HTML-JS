//to display day of the week using switch loop
var day;
switch(new Date().getDay()){
  case 0:
    day="Sunday";
    break;
  case 1:
    day="Monday";
    break;
  case 2:
    day="Tuesday";
    break;
  case 3:
    day="Wednesday";
    break;
  case 4:
    day="Thursday"
    break;
  case 5:
    day="Friday"
    break;
  case 6:
    day="Saturday"
}
document.getElementById("trial").innerHTML="Today is"+ day;