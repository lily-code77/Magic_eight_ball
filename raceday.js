/*
There are adult runners (over 18 years old) and youth runners (under 18 years old).

Race number:
●Early adults receive a race number at or above 1000.
●All others receive a number below 1000.

Start time:
●Adult registrants run at 9:30 am or 11:00 am.
  ●Early adults run at 9:30 am.
  ●Late adults run at 11:00 am.
●Youth registrants run at 12:30 pm (regardless of registration).
*/

let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true;
let runnerAge = 30;

if (runnerAge > 18)
  raceNumber += 1000;

if (runnerAge > 18 && registerEarly){
  console.log(`Your race number is ${raceNumber}, and your race begins at 9:30am.`);
  }else if (runnerAge > 18 && !registerEarly){
  console.log(`Your race number is ${raceNumber}, and your race begins at 11:00am.`);
  }else if (runnerAge === 18){
  console.log('Please see the registration desk.')
  }else{
    console.log(`Your race number is ${raceNumber}, and your race begins at 12:30pm.`);
  }