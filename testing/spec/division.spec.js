const { division } = require('../skript');

describe('Функция division()', () => {
    it('должна возвращать 5 при аргументах (20, 4)', () => {
        expect(division(20, 4)).toBe(5);
    })
    it('должна возвращать -5 при аргументах (20, -4)', () => {
        expect(division(20, -4)).toBe(-5);
    })
    it('должна возвращать Infinity при аргументах (5, 0)', () => {
        expect(division(5, 0)).toBe(Infinity);
    })
    it('должна возвращать "обе или одна из переменных является строкой" при переменны (5, "строка")', () => {
        expect(division(5, "string")).toBe("обе или одна из переменных является строкой");
    })
    it('должна возвращать "обе или одна из переменных является null" при переменны (5, null)', () => {
        expect(division(5, null)).toBe("обе или одна из переменных является null");
    })
    it('должна возвращать "обе или одна из переменных является undefined" при переменных (5, undefined)', () => {
        expect(division(5, undefined)).toBe("обе или одна из переменных является undefined");
    })
});