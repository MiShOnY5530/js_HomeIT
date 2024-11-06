const expect = chai.expect;

describe('Дата', () => {
    it('showDate() - має повертати "двадцяте січня"', () => {
        const date = new MyDate(20, 1, 1990);
        expect(date.showDate()).to.equal('двадцяте січня');
    });

    it('showDate() - має повертати "двадцять перше січня"', () => {
        const date = new MyDate(21, 1, 1990);
        expect(date.showDate()).to.equal('двадцять перше січня');
    });

    it('isFuture() - має повертати true для майбутньої дати', () => {
        const futureDate = new MyDate(20, 5, 2056);
        expect(futureDate.isFuture()).to.equal(true);
    });

    it('isFuture() - має повертати false для минулої дати', () => {
        const pastDate = new MyDate(20, 6, 1990);
        expect(pastDate.isFuture()).to.equal(false);
    });

    it('isLeapYear() - має повертати false для невисокосного року', () => {
        const date = new MyDate(20, 6, 1990);
        expect(date.isLeapYear()).to.equal(false);
    });

    it('isLeapYear() - має повертати true для високосного року', () => {
        const date = new MyDate(20, 6, 2020);
        expect(date.isLeapYear()).to.equal(true);
    });

    it('nextDay() - має повертати 21/6/2020', () => {
        const date = new MyDate(20, 6, 2020);
        expect(date.nextDay()).to.equal('21/6/2020');
    });

    it('nextDay() - має повертати 1/2/2020, коли день є останнім у місяці', () => {
        const date = new MyDate(31, 1, 2020);
        expect(date.nextDay()).to.equal('1/2/2020');
    });

    it('nextDay() - має повертати 29/2/2020 для лютого високосного року', () => {
        const date = new MyDate(28, 2, 2020);
        expect(date.nextDay()).to.equal('29/2/2020');
    });

    it('nextDay() - має повертати 1/3/2019 для лютого невисокосного року', () => {
        const date = new MyDate(28, 2, 2019);
        expect(date.nextDay()).to.equal('1/3/2019');
    });

    it('nextDay() - має повертати 1/1/2021, коли це кінець року', () => {
        const date = new MyDate(31, 12, 2020);
        expect(date.nextDay()).to.equal('1/1/2021');
    });
});