function getDayOfWeek(dayNumber) {
  if (dayNumber === 1) console.log("Monday");
  else if (dayNumber === 2) console.log("Tuesday");
  else if (dayNumber === 3) console.log("Wednesday");
  else if (dayNumber === 4) console.log("Thursday");
  else if (dayNumber === 5) console.log("Friday");
  else if (dayNumber === 6) console.log("Saturday");
  else if (dayNumber === 7) console.log("Sunday");
  else console.log("Invalid day number");
}

getDayOfWeek(3);
getDayOfWeek(7);
