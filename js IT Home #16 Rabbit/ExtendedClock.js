class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};

let UpdateClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 1000
});

UpdateClock.start();