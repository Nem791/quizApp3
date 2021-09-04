class Divider {
    $container
    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('divider');
    }

    render() {
        return this.$container;
    }
}
export {Divider};