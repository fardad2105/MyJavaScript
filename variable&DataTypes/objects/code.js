// Object Quick overview

// object = collection of properties
var myPhone = {
  make : "apple",
  model: "iphone x",
  warranty: "20",
  colour:"gold"
}

console.log(myPhone);
console.log(myPhone.model);

// Change property
myPhone.model = "Iphone 8";
console.log(myPhone);

// add new property
myPhone.Storage = "128 Go";
console.log(myPhone);

// delete property
delete myPhone.Storage;
console.log(myPhone);

// now let's do something interesting
var x = 1;
var y = x;
x = 2;
console.log(y);

// now let's do that with object
var myOtherPhone = myPhone;
console.log(myOtherPhone);

// change myPhone
myPhone.colour = "grey";
console.log(myPhone);
console.log(myOtherPhone);
