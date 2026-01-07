function findLargest(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(`${a} is the largest`);
    } else {
      console.log(`${c} is the largest`);
    }
  } else {
    if (b >= c) {
      console.log(`${b} is the largest`);
    } else {
      console.log(`${c} is the largest`);
    }
  }
}

// Example usage
findLargest(10, 50, 30);
