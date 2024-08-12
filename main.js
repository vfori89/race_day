
//create variable randomly between 1 and 1000
let raceNumber = Math.floor(Math.random() * 1000);
//boolean var for early or late registration
let earlyRegistration = false;
//runners age
let runnersAge = 19;
//check if runner is over 18 and registered early, assign number 1000>
if (runnersAge > 18 && earlyRegistration === true) {
  raceNumber += 1000;
}
//create output for 3 groups
if (runnersAge > 18 && earlyRegistration === true) {
  console.log(`Your number is ${raceNumber} and your race begins at 9:30am.`);
} else if (runnersAge > 18 && earlyRegistration === false) {
  console.log(`Your number is ${raceNumber} and your race begins at 11:00am.`);
} else {
  console.log(`Your number is ${raceNumber} and your race begins at 12:30pm`);
}

