class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    guess() {
        return (Math.ceil((this.minimum + this.maximum) / 2));
    }

    lower() {
        this.maximum = this.guess();
        return this.maximum;
    }

    greater() {
        this.minimum = this.guess();
        return this.minimum;
    }
}

module.exports = GuessingGame;
