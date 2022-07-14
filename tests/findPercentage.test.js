import { findPercentage } from '../main';

test('find percentage of initial number', () => {

    let firstStringResult = '22211111112';

    expect(findPercentage(0, firstStringResult.length - 1, firstStringResult)).toBe('60');

    let secondStringResult = "221121212122";

    expect(findPercentage(0, secondStringResult.length - 1, secondStringResult)).toBe('82');

    let thirdStringResult = '3412111221';

    expect(findPercentage(0, thirdStringResult.length - 1, thirdStringResult)).not.toBe('21');

});