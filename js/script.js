// // TODO NOW
// // - alert con "fine giro" dopo 10 secondi (setTimeout)
// // - stampare in pagina cronometro che arriva a 10 secondi (setInterval)
//
// function delay() {
//   alert("fine giro");
// }
//
// function init() {
//   setTimeout(delay, 10 * 1000);
// }
//
// init();
//
// // set timeout richiama la funzioen uan volta sola mentre set interval la richiama tante volte





// -------------------------------------------------
// RECAP POMERIDIANO

// var myBtn = document.getElementById('lallero');
// myBtn.addEventListener('click', buttonHandler);
//
// function buttonHandler() {
//   console.log('clicked');
// }
// --------------------------
// lavatrice parte quando lo dico io (aspetta 2 secondi)



// 1) set timeout/clear timeout
//
// function wash() {
//   console.log('inizio lavaggio');
// }
//
// var milliseconds = parseInt(prompt('tra quanti minuti vuoi iniziare il lavaggio?')) * 6000;
//
// var washerTimeout = setTimeout(wash, milliseconds);
//
// var myBtn = document.getElementById('lallero');
// myBtn.addEventListener('click', function() {
//   clearTimeout(washerTimeout);
//   console.log('Washing machine STOP')
//
// });
//
//
//
//
// var i = 1;
// var textField = document.getElementById('fulmicotone');
//
// setTimeout(function run() {
//   console.log(i);
//   i++;
//   setTimeout(run, 1000);
//
// }, 1000);

// function waitAsecond() {
//   let start = Date.now();
//   console.log(start);
//   setTimeout(function() {
//     let end = Date.now();
//     console.log(end - start);
//   }, 1000);
// }

// waitAsecond();






















// ----------------------------------------------------------------------------

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function getRandomValue(min, max) {
  var localMin = min;
  var localMax = max - min + 1;

  return Math.floor(Math.random() * localMax) + localMin;
}

// GENERATING ARRAY WITH FIVE ELEMENTS

var arrNum = [];

while (arrNum.length < 5) {
  var rnd = getRandomValue(1, 100);

  if (!arrNum.includes(rnd)){
    arrNum.push(rnd);
  }
}

alert('Memorize these numbers: ' + ' ' + arrNum);


// Request user to put numbers one at a time


setTimeout(function(){

  var userArr = [];
  var numberOk = [];

  while (userArr.length < 5) {
    var userNumber = parseInt(prompt('Write the numbers (one at a time)'));

    if (!userArr.includes(userNumber)){
      userArr.push(userNumber);

      if(arrNum.includes(userNumber)) {
        numberOk.push(userNumber);
      }
    }
  }
  console.log("Hai inserito questi numeri: ", userArr, "Hai azzeccato questi numeri: ", numberOk);
}, 4300);


console.log(arrNum);


// Here I create a function with the countdown shown AFTER the alert with the numbers goes away (and before the prompt to write the numbers )

var time;
var clock;

function tickOfClock() {

  document.getElementById('lol').innerHTML = time--; // Here I say that the time has to go BACKWARDS

  if (time < 0) {// If the countdown goes to zero (I timed it perfectly with the function delay at line 145)...
    clearInterval(clock); // ...the ime is officially STOPPED...
    document.getElementById('lol').innerHTML = "START"; // ...and this appears on the page.

  }
  console.log(clock);
}

function init() {
  time = 3; // Here I set the timer start from 3 (three, two, one).
  clock = setInterval(tickOfClock, 1000); // here I set the start of the timer and the end at the same time (summoning the function tickOfClock where there is the "if")
}

init();


















// ----------------------------------------------------------------------------

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// function getRandomValue(min, max) {
//   var localMin = min;
//   var localMax = max - min + 1;
//
//   return Math.floor(Math.random() * localMax) + localMin;
// }
//
//
// getRandomValue();
//
//
// function fiveNumbers() {
//   for (i = 0; i < 5; i++) {
//     var generator = getRandomValue(1, 10);
//     console.log(generator);
//   }
//
//   return generator;
// }
//
//
// alert("Remember these five numbers: ", fiveNumbers());
//
//
// alert("Ricorda questi numeri: ", generator);
