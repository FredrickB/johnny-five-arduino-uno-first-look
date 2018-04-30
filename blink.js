// https://github.com/rwaldron/johnny-five/blob/master/docs/led-blink.md
const five = require('johnny-five');

const board = new five.Board();
const PIN = 13;

board.on('ready', () => {
  const led = new five.Led(PIN);

  led.blink(300);

  board.on('exit', () => {
    console.log('exiting');
    led.off();
  });
});
