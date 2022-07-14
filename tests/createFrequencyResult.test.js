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

    let secondCharMap = {
        n: 2,
        o: 2,
        v: 3,
        a: 3,
        c: 3,
        m: 2,
        t: 2,
        h: 2,
        e: 2,
        s: 2,
        d: 2,
        j: 2,
        k: 2,
        i: 2,
    }

    expect(createFrequencyResult(secondCharMap)).toBe('22333222222222');

});