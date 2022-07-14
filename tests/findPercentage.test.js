import { findPercentage } from '../main';

test('find percentage of initial number', () => {

    let firstStringResult = '22211111112';

    expect(findPercentage(0, firstStringResult.length - 1, firstStringResult)).toBe('60');

});