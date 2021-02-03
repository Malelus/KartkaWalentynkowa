window.onload = () => {
  //===========================//
  //===// Loading classes //===//
  //===========================//

  // - page transition
  const transitionElementTrBl = document.querySelector('.transition-tr-bl');
  const transitionElementTlBr = document.querySelector('.transition-tl-br');
  const transitionElementBrTl = document.querySelector('.transition-br-tl');
  const transitionElementBlTr = document.querySelector('.transition-bl-tr');

  //=============================//
  //===// Loading variables //===//
  //=============================//

  // Defining const for motion status check
  const motionCheck = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Defining variables array
  const durationsArray = [];
  const varArray = [
    '--btn-anim-time',
    '--transition-time',
    '--logo-anim-time',
    '--heart-show',
    '--heart-beat',
    '--anim-delay',
    '--all-anim-delay',
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

  // Setting own variable for transition time
  const timeTransition = durationsArray[0] * 1000;

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
    console.log(`# Transition time: ` + durationsArray[1]);
    console.log(`# Logo animation time: ` + durationsArray[2]);
    console.log(`# Heart animation:`);
    console.log(`  - show: ` + durationsArray[3]);
    console.log(`  - beat: ` + durationsArray[4]);
    console.log(`# Delays:`);
    console.log(`  - anim: ` + durationsArray[5]);
    console.log(`  - all: ` + durationsArray[6]);
  }

  //====================//
  //===// Scripts //===//
  //===================//

  //===// Page transition //===//
  setTimeout(() => {
    transitionElementTrBl.classList.remove('transition--active-tr-bl');
  }, timeTransition);

  setTimeout(() => {
    transitionElementTlBr.classList.remove('transition--active-tl-br');
  }, timeTransition);

  setTimeout(() => {
    transitionElementBrTl.classList.remove('transition--active-br-tl');
  }, timeTransition);

  setTimeout(() => {
    transitionElementBlTr.classList.remove('transition--active-bl-tr');
  }, timeTransition);
};
