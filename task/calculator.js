function calculator(a, b, operator) {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b !== 0) {
        result = a / b;
      } else {
        console.log("Cannot divide by zero");
        return;
      }
      break;
    default:
      console.log("Invalid operator");
      return;
  }
  console.log(`${a} ${operator} ${b} = ${result}`);
}

calculator(10, 5, '+');
calculator(10, 5, '/');
calculator(10, 0, '/');
