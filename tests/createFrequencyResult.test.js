import { createFrequencyResult } from "../main";

test('creates initial number from character mapping', () => {

    let firstCharMap = {
        m: 2,
        a: 2,
        g: 1,
        i: 1,
        c: 2,
        t: 1,
        h: 2,
        e: 1,
        s: 2,
        j: 1,
        o: 2,
        n: 2
    }

    expect(createFrequencyResult(firstCharMap)).toBe('221121212122');

});