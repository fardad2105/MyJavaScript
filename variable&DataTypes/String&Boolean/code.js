//String
var job = 'java developer';
var town= 'Iran';

//escape the normal process and treat quotation marks as punctuation marks
var greeting = 'Hello , I \'m glad to see you';


// spetial characters
//new line
var quote = 'This is a \n new line';
console.log(quote);

// tab
quote = 'Here is \t a tab';
console.log(quote);

//Concatention
var firstname = 'fardad';
var lastname = 'yadegari';
var fullname = firstname + " " + lastname +".";
console.log(fullname);


var s = 'apple';
console.log(s.length);
console.log(s.charAt(2));
console.log(s.indexOf('l'));
console.log(s.lastIndexOf('p'));

// Booleans
var x = 3;
var y= 5;
var z = x>y ;
console.log(z);

// Logical Operator
z = (x<y) && (x>0);
console.log(z);

z = false || true ;
console.log(z);

z = !(x<y);
console.log(z);

z = false && true || true; // && Stronger
console.log(z);

// Unary Operator
z = x>2 ? 'Pass' : 'Failed';
console.log(z);

// Logical operators with non Booleans
console.log(0 == true);
console.log(1 == true);
console.log('banana' == false);
z = 'banana' && true ;
console.log(z);
z = false || 'apple';
console.log(z);

var fruit;
console.log(fruit);
console.log(fruit == false);
z = fruit || 'apple';
console.log(z);

z = '' || 'apple';
console.log(z);

z = '' && false ;
console.log(z);

z = 0 && false;
console.log(z);
