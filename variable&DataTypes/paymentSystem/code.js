
// Amount  due
var total = prompt('Total due:');

//Amount paid by the customer
var moneyPaid = prompt('Amount due:');

// Convert collected values to float numbers
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

// Print change amount
var change = (total - moneyPaid).toFixed(2);
console.log('Due: '+total + '/paid' + moneyPaid + '/change:'+change);


var value, note_coin_name, to_return;
// $50 note
 [value,note_coin_name] = [50,'$50 notes: '];
 to_return = Math.floor(change/value);
 change = (change%value).toFixed(2);
 to_return >0 ? console.log(note_coin_name + to_return):0;

 // $20 note
 [value,note_coin_name] = [20,'$20 notes: '];
 to_return = Math.floor(change/value);
 change = (change%value).toFixed(2);
 to_return >0 ? console.log(note_coin_name + to_return):0;

 // $10 note
 [value,note_coin_name] = [10,'$10 notes: '];
 to_return = Math.floor(change/value);
 change = (change%value).toFixed(2);
 to_return >0 ? console.log(note_coin_name + to_return):0;

 // $5 note
 [value,note_coin_name] = [5,'$5 notes: '];
 to_return = Math.floor(change/value);
 change = (change%value).toFixed(2);
 to_return >0 ? console.log(note_coin_name + to_return):0;

 // $2 coin
 [value,note_coin_name] = [2,'$2 coins: '];
 to_return = Math.floor(change/value);
 change = (change%value).toFixed(2);
 to_return >0 ? console.log(note_coin_name + to_return):0;

 // $1 coin
 [value,note_coin_name] = [1,'$1 coins: '];
 to_return = Math.floor(change/value);
 change = (change%value).toFixed(2);
 to_return >0 ? console.log(note_coin_name + to_return):0;


  // $50 coin
  [value,note_coin_name] = [0.50,'$50p coins: '];
  to_return = Math.floor(change/value);
  change = (change%value).toFixed(2);
  to_return >0 ? console.log(note_coin_name + to_return):0;

  // $20 coin
  [value,note_coin_name] = [0.20,'$20p coins: '];
  to_return = Math.floor(change/value);
  change = (change%value).toFixed(2);
  to_return >0 ? console.log(note_coin_name + to_return):0;

  // $10 coin
  [value,note_coin_name] = [0.10,'$10p coins: '];
  to_return = Math.floor(change/value);
  change = (change%value).toFixed(2);
  to_return >0 ? console.log(note_coin_name + to_return):0;

  // $5 coin
  [value,note_coin_name] = [0.05,'$5p coins: '];
  to_return = Math.floor(change/value);
  change = (change%value).toFixed(2);
  to_return >0 ? console.log(note_coin_name + to_return):0;

  // $2p coin
  [value,note_coin_name] = [0.02,'$2p coins: '];
  to_return = Math.floor(change/value);
  change = (change%value).toFixed(2);
  to_return >0 ? console.log(note_coin_name + to_return):0;

  // $1p coin
  [value,note_coin_name] = [0.01,'$1p coins: '];
  to_return = Math.floor(change/value);
  change = (change%value).toFixed(2);
  to_return >0 ? console.log(note_coin_name + to_return):0;
