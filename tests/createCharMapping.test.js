import createCharMapping from "../utils";

test('creates a character mapping from string', () => {

    let fullText = "magic matches johnson";

    expect(createCharMapping(fullText)).toEqual({
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
    });

    let secondFullText = "jack matches jill";

    expect(createCharMapping(secondFullText)).toEqual({
        j: 2,
        a: 2,
        c: 2,
        k: 1,
        m: 1,
        t: 1,
        h: 1,
        e: 1,
        s: 1,
        i: 1,
        l: 2
    });

    let thirdFullText = "novac matches djokovic";

    expect(createCharMapping(thirdFullText)).not.toEqual({
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
    });


});