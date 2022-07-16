//const sum = require('./main');
import { sum } from './main';

test('add 1 and 2 return 3 ', () => {
    expect(sum(1, 2)).toBe(3);
});
