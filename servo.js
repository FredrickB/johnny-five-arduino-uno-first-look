// https://github.com/rwaldron/johnny-five/blob/master/docs/servo.md
const five = require('johnny-five');

const board = new five.Board({repl: false});
const PIN = 10;

board.on('ready', () => {
  const servo = new five.Servo({
    pin: PIN,
    type: 'continuous',
  });

  setInterval(() => {
    servo.min();
    setTimeout(() => {
      servo.max();
    }, 500);
  }, 1000);

  board.on('exit', () => {
    servo.stop();
    console.log('exiting');
  });
});
