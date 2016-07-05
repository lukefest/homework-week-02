
// --------------------------------------
// --------------------------------------

var number = 33;

// --------------------------------------
// --------------------------------------

/* Second attempt using IF ELSE statement */

for (number=1;number<=100;number=number+1) {

if (number % 3 === 0) {
  console.log ('fizz');
}
else if (number % 5 === 0) {
  console.log ('buzz');
}
else if (number % 15 === 0) {
  console.log ('fizzbuzz');
}
else {
  console.log (number.toString());
}

}



/* First go using Switch statement

switch (number) {
  case number % 3 === 0:
    console.log('Fizz');
    break;
  case number % 5 === 0:
    console.log('Buzz');
    break;
  case number % 15 === 0:
    console.log('Fizzbuzz');
    break;
  default:
    console.log('Please enter between 1-100.');
}

*/
