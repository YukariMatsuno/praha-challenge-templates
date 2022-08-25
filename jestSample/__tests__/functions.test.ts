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