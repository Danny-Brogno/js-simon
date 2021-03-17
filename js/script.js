// TODO NOW
// - alert con "fine giro" dopo 10 secondi (setTimeout)
// - stampare in pagina cronometro che arriva a 10 secondi (setInterval)

// function delay() {
//   alert("fine giro");
// }
//
// function init() {
//   setTimeout(delay, 10 * 1000);
// }
//
// init();

// set timeout richiama la funzioen uan volta sola mentre set interval la richiama tante volte

// var time;
// var clock;
//
// function tick() {
//
//   document.getElementById('lol').innerHTML = time++; // THIS STOPS THE CLOCK
//
//   if (time > 10) { // If the time goes OVER the 10 seconds
//     clearInterval(clock); // THIS STOPS THE CLOCK
//     document.getElementById('lol').innerHTML = "the end";
//
//   }
//   console.log(clock);
// }
//
// function init() {
//   time = 1;
//   clock = setInterval(tick, 1000);
// }
//
// init();





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

console.log(getRandomValue(1, 10));

// GENERATING ARRAY WITH FIVE ELEMENTS
var arrNum = [];

while (arrNum.length < 5) {
  var rnd = getRandomValue(1, 10);

  if (!arrNum.includes(rnd)){
    arrNum.push(rnd);
  }
}

alert('Memorizza questi cinque numeri: ' + ' ' + arrNum);

// richiesta imput utente


setTimeout(function(){

  var userArr = [];
  var numberOk = [];

  while (userArr.length < 5) {
    var userNumber = parseInt(prompt('Write the number'));
    if (!userArr.includes(userNumber)){
      userArr.push(userNumber);

      if(arrNum.includes(userNumber)) {
        numberOk.push(userNumber);
      }
    }
  }

  console.log(userArr, numberOk);
}, 3000);

console.log(arrNum);




































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
