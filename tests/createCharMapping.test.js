import { 
    matchParticipants, 
    finalOutput, 
    findPercentage, 
    createFrequencyResult, 
    createCharMapping 
} from "../main";

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

});