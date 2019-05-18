var balance = 1000;
var price = 50;

if (price < balance) {
  console.log('payment successful !');
  balance -= price;
}
else {
  console.log('You don\'t have enought funds ! ');
}

var speed = 50; // .... 40 ..... 100 ....
 if (speed >100) {
   console.log('you are going too fast!');
 }
 else if (speed < 40) {
   console.log('you are going to slow !');
 }
 else {
   console.log('your speed is fine !');
 }
