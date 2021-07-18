let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 19;
if (age>18 && registeredEarly) {
  raceNumber+=1000;
  console.log('They will race at 9:30 am and thier raceNumber is: '+raceNumber);
}
else if(age>18 && !registeredEarly){
console.log('They will race at 11:00 am and thier raceNumber is: '+raceNumber);
}else if(age< 18 || registeredEarly){
console.log('Youth registrants run at 12:30 pm and thier raceNumber is: '+raceNumber);
}else{
  console.log('Please approach the registration desk. Thank you');
}
