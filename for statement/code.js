for (var i = 0; i <10; i++)
{
  console.log(i);
}

for (var j = 8; j < -1; j--) {

  console.log(Math.pow(j,2));
}

// Loop through an array
var shoppingList = ["bread","milk","eggs"];

for (var i = 0; i <3; i++) {
  console.log("item" + i + ":" + shoppingList[i] + ".");
}


// Lopp through an array and change it
var numberList = [1,2,3];
for (var i = 0; i < numberList.length; i++) {
  numberList[i] +=10;
}
console.log(numberList);
