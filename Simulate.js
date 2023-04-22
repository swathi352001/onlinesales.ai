function simulateEvent(outcomes) {
    let totalProbability = 0;
    outcomes.forEach(outcome => totalProbability += outcome.probability);
  
    // Check if the probabilities add up to 100%
    if (totalProbability !== 100) {
      throw new Error('Probabilities do not add up to 100%.');
    }
  
    // create a probability distribution object based on randomly genrated double value
    const rand = Math.random() * 100;
    let cumulativeProbability = 0;
  
    for (let i = 0; i < outcomes.length; i++) {
      cumulativeProbability += outcomes[i].probability;
      if (rand < cumulativeProbability) {
        return outcomes[i].outcome;
      }
    }
  
    // If we reach here, it means there was an error
    throw new Error('Could not determine outcome.');
  }
  
  const outcomes = [
    { outcome: 1, probability: 65 },
    { outcome: 2, probability: 35 }
  ];
  
  let numRolls = 1000;
  let results = {};
 // simulate 1000 rolls of the dice
  for (let i = 0; i < numRolls; i++) {
    const outcome = simulateEvent(outcomes);
    if (!results[outcome]) {
      results[outcome] = 0;
    }
    results[outcome]++;
  }
  
  // count the number of occurrences of each outcome
  console.log('Results:');
  for (let i = 0; i < outcomes.length; i++) {
    const outcome = outcomes[i].outcome;
    const probability = outcomes[i].probability;
    const count = results[outcome] || 0;
    console.log(`Outcome ${outcome} occurred ${count} times (${(count/numRolls)*100}%). Expected probability: ${probability}%.`);
  }

  module.exports=simulateEvent;
  