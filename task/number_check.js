function checkNumber(num) {
  if (num > 0) {
    console.log(num + " is Positive");
  } else if (num < 0) {
    console.log(num + " is Negative");
  } else {
    console.log("The number is Zero");
  }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);
