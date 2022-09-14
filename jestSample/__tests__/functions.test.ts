// todo: ここに単体テストを書いてみましょう！
import * as functions from "../functions";

test('sumOfArray', () => {
    expect(functions.sumOfArray([1,2,3,4])).toBe(10);
});

test('sumOfArray', () => {
    expect(functions.sumOfArray([1])).toBe(1);
});

test("sumOfArray([]) causes exception", (): void => {
    expect((): number => functions.sumOfArray([])).toThrow();
  });
  

test('asyncSumOfArray', () => {
  return functions.asyncSumOfArray([10, 20]).then((data: number) => {
    expect(data).toBe(30);
  })
});

test('async adds 1 + 2 to equal 3', () => {
  return functions.asyncSumOfArray([1, 2]).then((data: any) => {
    expect(data).toBe(3);
  })
});


jest.mock("../util");

describe("asyncSumOfArraySometimesZero", (): void => {
  test("empty array returns 0", (): Promise<void> => {
    return expect(functions.asyncSumOfArraySometimesZero([])).resolves.toBe(0);
  });

  test.each([
    { expected: -7, input: [-7] },
    { expected: +3, input: [1, 2] },
    { expected: -4, input: [0, 5, -9, 0] },
  ])(
    "%o",
    ({ expected, input }): Promise<void> => {
      // eslint-disable-next-line prettier/prettier
      return expect(functions.asyncSumOfArraySometimesZero(input)).resolves.toBe(expected);
    }
  );
});