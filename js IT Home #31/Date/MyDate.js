class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    showDate() {
        const days = [
            "", "перше", "друге", "третє", "четверте", "п'яте", "шосте", "сьоме", "восьме", "дев'яте",
            "десяте", "одинадцяте", "дванадцяте", "тринадцяте", "чотирнадцяте", "п'ятнадцяте",
            "шістнадцяте", "сімнадцяте", "вісімнадцяте", "дев'ятнадцяте", "двадцяте",
            "двадцять перше", "двадцять друге", "двадцять третє", "двадцять четверте",
            "двадцять п'яте", "двадцять шосте", "двадцять сьоме", "двадцять восьме", "двадцять дев'яте",
            "тридцяте", "тридцять перше"
        ];
        const months = [
            "", "січня", "лютого", "березня", "квітня", "травня", "червня", "липня",
            "серпня", "вересня", "жовтня", "листопада", "грудня"
        ];
        return `${days[this.day]} ${months[this.month]}`;
    }

    isFuture() {
        const today = new Date();
        const currentDate = new Date(this.year, this.month - 1, this.day);
        return currentDate > today;
    }

    isLeapYear() {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }

    nextDay() {
        const nextDate = new Date(this.year, this.month - 1, this.day + 1);
        return `${nextDate.getDate()}/${nextDate.getMonth() + 1}/${nextDate.getFullYear()}`;
    }
}