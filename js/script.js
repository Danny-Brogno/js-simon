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
var time;
var clock;

function tick() {

  document.getElementById('lol').innerHTML = time++; // THIS STOPS THE CLOCK

  if (time > 10) { // If the time goes OVER the 10 seconds
    clearInterval(clock); // THIS STOPS THE CLOCK
    document.getElementById('lol').innerHTML = "the end";
  }
}

function init() {
  time = 1;
  clock = setInterval(tick, 1000);
}

init();
