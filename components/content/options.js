class Option {
    $container;
    $formCheckInput;
    $formCheckLabel;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('form-check');

        this.$formCheckInput = document.createElement('input');
        this.$formCheckInput.classList.add('form-check-input');
        this.$formCheckInput.type = 'radio';
        this.$formCheckInput.addEventListener('click', this.setDataResult)

        this.$formCheckLabel = document.createElement('label');
        this.$formCheckLabel.classList.add('form-check-label');

    }

    setDataResult = () => {
        // Luu ket qua nguoi dung chon vao parentNode
        console.log('stack 1');
        this.$formCheckInput.closest('.question-options').dataset.result = this.$formCheckInput.nextElementSibling.innerText[0];
    }

    render() {
        this.$container.appendChild(this.$formCheckInput);
        this.$container.appendChild(this.$formCheckLabel);
        return this.$container;
    }
}

export { Option }