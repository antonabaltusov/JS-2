const { multiplication } = require('../skript');



describe('Функция multiplication()', () => {
    it('должна возвращать 20 при аргументах (5, 4)', () => {
        expect(multiplication(5, 4)).toBe(20);
    })
    it('должна возвращать -20 при аргументах (5, -4)', () => {
        expect(multiplication(5, -4)).toBe(-20);
    })
    it('должна возвращать "обе или одна из переменных является строкой" при переменны (5, "строка")', () => {
        expect(multiplication(5, "string")).toBe("обе или одна из переменных является строкой");
    })
    it('должна возвращать "обе или одна из переменных является null" при переменны (5, null)', () => {
        expect(multiplication(5, null)).toBe("обе или одна из переменных является null");
    })
    it('должна возвращать "обе или одна из переменных является undefined" при переменных (5, undefined)', () => {
        expect(multiplication(5, undefined)).toBe("обе или одна из переменных является undefined");
    })
});