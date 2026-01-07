function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

checkVotingEligibility(20);
checkVotingEligibility(16);
