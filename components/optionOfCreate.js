class Option {
    $container;
    $optionMarket;
    $optionText;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('text-option');

        this.$optionMarket = document.createElement('div');
        this.$optionMarket.classList.add('option-market');

        this.$optionText = document.createElement('div');
        this.$optionText.classList.add('option-text');
    }

    render() {
        this.$container.appendChild(this.$optionMarket);
        this.$container.appendChild(this.$optionText);
        return this.$container
    }
}
export {Option};