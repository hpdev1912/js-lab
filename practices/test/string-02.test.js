import { statisticsWords, statisticsWordsV2 } from '../string-02';

describe('statisticsWords()', () => {
    test('should return empty object when receive an empty string', () => {
        expect(statisticsWords('')).toMatchObject({});
    });
    test('should return correct object', () => {
        expect(statisticsWords('easy so easy')).toMatchObject({
            easy: 2,
            so: 1,
        });
    });
    test('should return correct object when string have redundant spaces', () => {
        expect(statisticsWords('   easy   so  easy    easy    ')).toMatchObject({
            easy: 3,
            so: 1,
        });
    });
});
describe('statisticsWordsV2()', () => {
    test('should return empty object when receive an empty string', () => {
        expect(statisticsWordsV2('')).toMatchObject({});
    });
    test('should return correct object', () => {
        expect(statisticsWordsV2('easy so easy')).toMatchObject({
            easy: 2,
            so: 1,
        });
    });
    test('should return correct object when string have redundant spaces', () => {
        expect(statisticsWordsV2('   easy   so  easy    easy    ')).toMatchObject({
            easy: 3,
            so: 1,
        });
    });
});
