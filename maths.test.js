const evaluateExpression=require("./maths")
describe('Math API Evaluation', () => {
    const expressions = [
        '2 * 4 * 4',
        '5 / (7 - 5)'
      ];
    test.each(expressions)('evaluates expression %s', async (expression) => {
      const result = await evaluateExpression(expression);
      expect(result).toBeDefined();
    });
  
    test('handles invalid expressions gracefully', async () => {
      const invalidExpression = 'invalid_expression';
      const result = await evaluateExpression(invalidExpression);
      expect(result).toBe("Error: Undefined symbol invalid_expression");
    });
  
    test('handles division by zero gracefully', async () => {
      const divisionByZeroExpression = '5 / 0';
      const result = await evaluateExpression(divisionByZeroExpression);
      expect(result).toBe("Infinity");
    });
  
    test('handles imaginary numbers gracefully', async () => {
      const imaginaryExpression = 'sqrt(-1)';
      const result = await evaluateExpression(imaginaryExpression);
      expect(result).toBe("i");
    });
  });
  