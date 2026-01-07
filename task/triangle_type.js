function checkTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}

checkTriangleType(5, 5, 5);
checkTriangleType(5, 5, 8);
checkTriangleType(3, 4, 5);
