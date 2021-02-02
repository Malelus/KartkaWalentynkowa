window.onload = () => {
  //===========================//
  //===// Loading classes //===//
  //===========================//

  // Empty

  //=============================//
  //===// Loading variables //===//
  //=============================//

  // Defining const for motion status check
  const motionCheck = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Defining variables array
  const durationsArray = [];
  const varArray = [
    '--btn-anim-time',
    '--logo-anim-time',
    '--heart-show',
    '--heart-beat',
    '--anim-delay',
  ];

  // Defining const for global variables source and quantity of variable array
  const varGlobal = getComputedStyle(document.body);
  const varQuantity = varArray.length;

  // Inserting all time durations into durations array
  for (let i = 0; i < varQuantity; i++) {
    durationsArray[i] = varGlobal.getPropertyValue(varArray[i]);
  }

  //================================//
  //====// Variables formating //===//
  //================================//

  // Subtracting `s` letter from loaded string
  for (let i = 0; i < varQuantity; i++) {
    durationsArray[i] = durationsArray[i].substring(0, durationsArray[i].length - 1);
  }

  // Setting style for console timing info
  for (let i = 0; i < varQuantity; i++) {
    if (durationsArray[i].indexOf('.') < '') durationsArray[i] = durationsArray[i] + '.0';
  }

  //===================================//
  //===// Reduced motion - Status //===//
  //===================================//

  motionCheck.addEventListener('change', consoleInit);

  function consoleInit() {
    if (!motionCheck || motionCheck.matches) {
      motionStatus = `OFF`;
      console.clear();
      consoleLog();
    } else {
      motionStatus = `ON`;
      console.clear();
      consoleLog();
    }
  }

  //====================//
  //====// Console //===//
  //====================//

  // Console log animation status & animations durations & delays

  consoleInit();

  function consoleLog() {
    console.log(`# Scripts were loaded correctly! (Time is given in seconds)`);
    console.log(`# Animations are ` + motionStatus + `\n\n`);
    console.log(`# Button animation time: ` + durationsArray[0]);
    console.log(`# Logo animation time: ` + durationsArray[1]);
    console.log(`# Heart animation:`);
    console.log(`  - show: ` + durationsArray[2]);
    console.log(`  - beat: ` + durationsArray[3]);
    console.log(`# Animation delay: ` + durationsArray[4]);
  }
};
