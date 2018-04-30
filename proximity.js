// http://johnny-five.io/examples/proximity/ (scroll down to HCSR04)
// https://github.com/johnny-five-io/nodebots-interchange (interactive example)
const five = require('johnny-five');

const board = new five.Board();
const PIN = 7;

board.on('ready', () => {
  const proximity = new five.Proximity({
    pin: PIN,
    controller: 'HCSR04',
  });

  proximity.on('data', () => {
    console.log('cm', proximity.cm);
  });

  proximity.on('change', () => {
    console.log('change');
  });

  board.on('exit', () => {
    console.log('exiting');
  });
});
