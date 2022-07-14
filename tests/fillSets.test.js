import { fillSets } from "../readFile";

test('fill set groups', () => {

    let firstSet = new Set();
    let secondSet = new Set();
    let firstArray = [
        ['Kimberley, f'],
        ['Jason, m'],
        ['Billy, m'],
        ['Trini, f'],
        ['Tommy, m'],
        ['Zack, m'],
        ['Billy, f'],
        ['Jason, m']
    ]

    fillSets(firstSet, secondSet, firstArray);

    expect(firstSet).toEqual(new Set('Kimberley', 'Trini', 'Billy'));

});