var x = 1;
console.log(typeof x);

var y= 2.4;


//5.3*10^8
var z=5.3e8;
console.log(z);

// max min in js
var max = Number.MAX_VALUE;
console.log(max);

var min = Number.MIN_VALUE;
console.log(min);

// arithmetic operations
var a = 4+9;
console.log(a);

a = 3*4;
console.log(a);

a = y-x;
console.log(a);

var b = 3;
b= b+2;
console.log(b);
b+=3;
console.log(b);
b++;
console.log(b);

b-=2;
console.log(b);
b--;
console.log(b);

// operator precedence
var c = 4*5+3;
console.log(c);

c= 4*(5+3);
console.log(c);

var d = ++c;
console.log(c);
console.log(d);

var e = c++;
console.log(c);
console.log(e);

//reminder operator

var f = 17%3;
console.log(f);

var g = 3**4; //3^4
console.log(g);


//Infinity
var h = Infinity;
console.log(h);
console.log(3/0);

//NaN
var i = 0/0;
console.log(i);

//power method
var j = Math.pow(2,53);
console.log(j);

//big Number
var k =  Math.pow(2,2000);
console.log(k);

// parse a string and return an integer
var number = '3';
console.log(parseInt(number));

console.log((50-44.44).toFixed(2));
