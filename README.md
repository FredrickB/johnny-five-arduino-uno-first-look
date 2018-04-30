# johnny-five-arduino-uno-first-look
Testing out johnny five and Arduino Uno

Developed using node version 8.7.0

# Prerequisites
Run `npm install` to get all necessary dependencies.

## Blink
Only requires upload of StandardFirmata.

`node blink.js`

http://johnny-five.io/examples/led/

## Proximity
Run `node_modules/nodebots-interchange/bin/cli.js install --interactive`, follow instructions and you should have proper Firmata on your Arduino.

`node proximity.js`

http://johnny-five.io/examples/proximity/
http://johnny-five.io/api/proximity/#hcsr04parallax-ping-

## Servo
Only requires upload of StandardFirmata.

`node servo.js`

https://github.com/rwaldron/johnny-five/blob/master/docs/servo.md
