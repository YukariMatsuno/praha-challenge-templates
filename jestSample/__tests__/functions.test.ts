// todo: ここに単体テストを書いてみましょう！
import * as functions from "../functions";

test('sumOfArray', () => {
    expect(functions.sumOfArray([1,2,3,4])).toBe(10);
});