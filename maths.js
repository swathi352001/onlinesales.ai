const request = require('request');
const { promisify } = require('util');


const API_ENDPOINT = 'http://api.mathjs.org/v4/';

const expressions = [
  '2 * 4 * 4',
  '5 / (7 - 5)',
  'sqrt(5^2 - 4^2)',
  'sqrt(-3^2 - 4^2)'
];

//Connecting to the api 
const evaluateExpression = async (expression) => {
try {
  const url = `${API_ENDPOINT}?expr=${encodeURIComponent(expression)}`;
  const requestPromise = promisify(request);

  const response = await requestPromise(url);
  const result = response.body;

  return result;
} catch (error) {
  return null;
}
};


//iterating through each expression and calling the function
expressions.forEach(async (expression) => {

    const result = await evaluateExpression(expression);
    console.log(`${expression} => ${result}`);
  });

module.exports=evaluateExpression