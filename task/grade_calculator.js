function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
  } else if (marks >= 80 && marks < 90) {
    console.log("Grade B");
  } else if (marks >= 70 && marks < 80) {
    console.log("Grade C");
  } else if (marks >= 60 && marks < 70) {
    console.log("Grade D");
  } else if (marks < 60 && marks >= 0) {
    console.log("Grade F");
  }
}
calculateGrade(92);
