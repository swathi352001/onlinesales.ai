const assert = require('assert');
const simulateEvent=require('./Simulate')

describe('simulateEvent', () => {
  it('should return one of the given outcomes', () => {
    const outcomes = [
      { outcome: 'Head', probability: 35 },
      { outcome: 'Tail', probability: 65 }
    ];
    const result = simulateEvent(outcomes);
    assert.ok(result === 'Head' || result === 'Tail');
  });

  it('should return the expected outcome based on the given probabilities', () => {
    const outcomes = [
      { outcome: 1, probability: 20 },
      { outcome: 2, probability: 20 },
      { outcome: 3, probability: 15 },
      { outcome: 4, probability: 15 },
      { outcome: 5, probability: 30 },
      { outcome: 6, probability: 0 }
    ];
    const numRolls = 1000;
    const results = {};

    for (let i = 0; i < numRolls; i++) {
      const outcome = simulateEvent(outcomes);
      if (!results[outcome]) {
        results[outcome] = 0;
      }
      results[outcome]++;
    }
    for (let i = 0; i < outcomes.length; i++) {
      const outcome = outcomes[i].outcome;
      const expectedProbability = outcomes[i].probability;
      const count = results[outcome] || 0;
      const actualProbability = (count/numRolls)*100;
      assert.ok(Math.abs(actualProbability - expectedProbability) < 10);
    }
  });

  it('should throw an error if the probabilities do not add up to 100', () => {
    const outcomes = [
      { outcome: 'Head', probability: 35 },
      { outcome: 'Tail', probability: 70 }
    ];
    assert.throws(() => simulateEvent(outcomes), Error);
  });
});

