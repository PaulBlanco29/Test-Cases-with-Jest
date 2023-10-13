const calculator = require('./calculator');

describe('calculator', () => {
 
  it('should correctly add two numbers', () => {
    expect(calculator(2, 3, '+')).toBe(5);
  });

  
  it('should correctly subtract two numbers', () => {
    expect(calculator(5, 3, '-')).toBe(2);
  });

  
  it('should correctly multiply two numbers', () => {
    expect(calculator(4, 3, '*')).toBe(12);
  });

 
  it('should correctly divide two numbers', () => {
    expect(calculator(10, 2, '/')).toBe(5);
  });

 
  it('should return "Invalid Operator" for an invalid operator', () => {
    expect(calculator(5, 2, '%')).toBe('Invalid Operator');
  });
});
