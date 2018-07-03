var Mouse = require('./mouse');
var Cat = require('./cat');

var Jerry = new Mouse('brown');
var Mickey = new Mouse('black');
var Tom = new Cat();

console.log(Tom);
console.log(Jerry);
console.log(Mickey);

Tom.eat(Jerry);

console.log(Tom);
console.log(Jerry);