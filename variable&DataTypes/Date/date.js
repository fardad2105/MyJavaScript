var now = new Date();
console.log('now is',now);


var millisecond = now.getMilliseconds();
var second = now.getSeconds();
var hours = now.getHours();
var minutes = now.getMinutes();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();

var dateCopy = new Date(year,month,date,hours,minutes,second,millisecond);

console.log("1 jan 2015", dateCopy);


