const { Calculator } = require("../../common/calc")

describe('Calculadora', () => {
  it('should return the sum result of 1+2', () => {
    const res = Calculator.Soma(1, 2);
    expect(res).toBe(3);
    expect(res).toBeCloseTo(3, 1);
  });
  it('should return the sub result of 2-1', () => {
    const res = Calculator.Sub(2, 1);
    expect(res).toBe(1);
  });
  it('should return the mult result of 2*2', () => {
    const res = Calculator.Mult(2, 2);
    expect(res).toBe(4);
  });
  it('should return the div result of 8/2', () => {
    const res = Calculator.Div(8, 2);
    expect(res).toBe(4);
  })
})