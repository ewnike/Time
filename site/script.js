
function Time(Hour,Minute, Period ){
 alert('File Linked');

if(Minute< 30 && Period == "AM")
{
  console.log("It's just after ", Hour, "in the morning");
}

else if (Minute > 30 && Period == "PM")
 {
  console.log("It's just after", Hour, "in the evening");
}


else if(Minute > 30 && Period == "AM")
 {
   console.log("It's almost",  Hour+1, "in the morning");
 }

 else if (Minute > 30 && Period == "PM")
 {
   console.log("It's almost",  Hour+1, "in the evening");
 }
}
 Time(9,46, "PM");
 
