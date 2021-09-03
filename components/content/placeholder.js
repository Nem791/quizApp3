class Placeholder {
    $container;
    $placeholder;

    constructor () {
        this.$container = document.createElement('p');
        this.$container.classList.add('placeholder-glow');

        this.$placeholder = document.createElement('span');
        this.$placeholder.classList.add('placeholder', 'col-12');
    }

    render() {
        this.$container.appendChild(this.$placeholder);
        return this.$container;
    }
}

export {Placeholder};